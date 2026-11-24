param(
    [string]$InstallDir = 'C:\Program Files (x86)\Technitium\DNS Server'
)

$ErrorActionPreference = 'Stop'

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw '请右键选择“以管理员身份运行”。'
}

$www = Join-Path $InstallDir 'www'
$dstIndex = Join-Path $www 'index.html'

if (-not (Test-Path -LiteralPath $dstIndex)) { throw "找不到 $dstIndex" }

$html = Get-Content -LiteralPath $dstIndex -Raw
$html = $html.Replace('<script src="js/i18n-zh-help.js"></script>', '')
$html = $html.Replace('<script src="js/i18n-zh-apps.js"></script>', '')
$html = $html.Replace('<script src="js/i18n-zh.js"></script>', '')
[System.IO.File]::WriteAllText($dstIndex, $html, (New-Object System.Text.UTF8Encoding($false)))

Remove-Item -LiteralPath (Join-Path $www 'js\i18n-zh.js') -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $www 'js\i18n-zh-help.js') -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $www 'js\i18n-zh-apps.js') -Force -ErrorAction SilentlyContinue

Write-Host '中文语言包已卸载，浏览器按 Ctrl + F5 刷新即可恢复英文。'
Write-Host '如需恢复原始 index.html，可使用同目录下的 index.html.bak-zh-* 备份。'
