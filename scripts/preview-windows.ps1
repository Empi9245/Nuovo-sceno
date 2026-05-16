Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$port = 3000
$url = "http://127.0.0.1:$port/"

function Test-Preview {
  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 3
    return $response.StatusCode -eq 200
  } catch {
    return $false
  }
}

Set-Location -LiteralPath $root

if (Test-Preview) {
  Write-Host "Scenografica preview is already running at http://localhost:$port"
  exit 0
}

Write-Host "Building production site..."
npm.cmd run build

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}

Write-Host "Starting production server in a separate terminal..."
$serverCommand = "cd /d `"$root`" && npm.cmd run start"
Start-Process -FilePath "cmd.exe" -ArgumentList @("/k", $serverCommand) -WindowStyle Minimized

Write-Host "Waiting for http://localhost:$port ..."
for ($attempt = 1; $attempt -le 30; $attempt++) {
  Start-Sleep -Seconds 1
  if (Test-Preview) {
    Write-Host "Ready: http://localhost:$port"
    exit 0
  }
}

Write-Error "The preview server did not respond on http://localhost:$port within 30 seconds. Check the separate terminal window for Next.js output."
exit 1
