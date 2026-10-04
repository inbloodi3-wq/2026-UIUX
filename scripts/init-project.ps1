<#
.SYNOPSIS
  새 리디자인 프로젝트를 초기화하거나 config/project.yaml 및 Runtime 상태를 재설정한다.

.DESCRIPTION
  기존 프로젝트 결과를 임의로 삭제하지 않는다. -New 없이 실행하면 아무 것도 하지 않는다.
  config/project.yaml이 이미 있으면 -Force 없이는 덮어쓰지 않는다.
  research/ia/design-system/figma의 자유 서술 문서는 프로젝트마다 형식이 크게 달라
  이 스크립트가 자동으로 비우지 않는다 — 완료 후 안내 메시지로 수동 절차를 알려준다.

.PARAMETER New
  새 프로젝트로 초기화한다: config/project-template.yaml -> config/project.yaml 복사,
  Runtime JSONL(references/assets/legal) 비우기, automation/pipeline-state.json 초기화.
  실행 전 확인 프롬프트를 띄운다.

.PARAMETER Force
  이미 존재하는 config/project.yaml이 있어도 확인 없이 덮어쓴다. -New와 함께만 사용한다.

.EXAMPLE
  ./scripts/init-project.ps1 -New
#>

param(
    [switch]$New,
    [switch]$Force
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

function Confirm-Action($message) {
    $answer = Read-Host "$message (y/N)"
    return ($answer -eq "y" -or $answer -eq "Y")
}

if (-not $New) {
    Write-Host "새 프로젝트로 초기화하려면 -New 플래그를 사용하세요. 아무 작업도 하지 않았습니다." -ForegroundColor Yellow
    exit 0
}

$projectYaml = Join-Path $root "config/project.yaml"
$templateYaml = Join-Path $root "config/project-template.yaml"

if (-not (Test-Path $templateYaml)) {
    Write-Host "config/project-template.yaml을 찾을 수 없습니다. 중단합니다." -ForegroundColor Red
    exit 1
}

if ((Test-Path $projectYaml) -and -not $Force) {
    Write-Host "config/project.yaml이 이미 존재합니다. 덮어쓰려면 -Force를 추가하세요." -ForegroundColor Red
    exit 1
}

Write-Host "다음 작업을 수행합니다:" -ForegroundColor Cyan
Write-Host "  1. config/project-template.yaml -> config/project.yaml 복사"
Write-Host "  2. references/reference-index.jsonl, assets/manifest.jsonl, legal/license-evidence.jsonl 비우기"
Write-Host "  3. automation/pipeline-state.json을 초기 상태로 재설정"
Write-Host ""
Write-Host "기존 프로젝트의 Runtime 데이터(위 3개 jsonl, pipeline-state.json)가 있다면 되돌릴 수 없습니다." -ForegroundColor Yellow

if (-not (Confirm-Action "계속하시겠습니까?")) {
    Write-Host "취소되었습니다."
    exit 0
}

Copy-Item $templateYaml $projectYaml -Force
Write-Host "config/project.yaml 생성 완료" -ForegroundColor Green

$emptyJsonlFiles = @(
    "references/reference-index.jsonl",
    "assets/manifest.jsonl",
    "legal/license-evidence.jsonl"
)
foreach ($rel in $emptyJsonlFiles) {
    $path = Join-Path $root $rel
    New-Item -ItemType File -Path $path -Force | Out-Null
    Write-Host "비움: $rel"
}

$pipelineState = Join-Path $root "automation/pipeline-state.json"
$initialState = [ordered]@{
    project_id           = ""
    current_stage        = "research"
    stage_status         = "NOT_STARTED"
    last_completed_stage = $null
    next_stage           = "research"
    next_agent           = "ux-researcher"
    next_skill           = "audit-current-site"
    blocked_reason       = "config/project.yaml 값을 채운 뒤 Research 단계를 시작하세요."
    updated_at           = (Get-Date -Format "yyyy-MM-dd")
}
$initialState | ConvertTo-Json | Set-Content -Path $pipelineState -Encoding utf8
Write-Host "automation/pipeline-state.json 초기화 완료" -ForegroundColor Green

Write-Host ""
Write-Host "다음은 자동으로 비우지 않았습니다 (형식이 프로젝트마다 달라 수동 확인이 더 안전합니다):" -ForegroundColor Yellow
Write-Host "  research/*.md, ia/*.md, design-system/*.md, figma/screen-registry.md, figma/file-links.md"
Write-Host "새 프로젝트 내용으로 직접 다시 작성하거나, 필요한 파일만 열어서 비우세요."
Write-Host ""
Write-Host "완료되었습니다. config/project.yaml을 열어 값을 채운 뒤 Pipeline을 시작하세요." -ForegroundColor Cyan
