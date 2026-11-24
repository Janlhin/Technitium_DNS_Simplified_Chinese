param(
    [string]$InstallDir = 'C:\Program Files (x86)\Technitium\DNS Server'
)

$ErrorActionPreference = 'Stop'

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw '请右键选择“以管理员身份运行”，否则无法写入 Program Files。'
}

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcJs = Join-Path $here 'js\i18n-zh.js'
$srcHelp = Join-Path $here 'js\i18n-zh-help.js'
$srcApps = Join-Path $here 'js\i18n-zh-apps.js'
$www = Join-Path $InstallDir 'www'
$dstIndex = Join-Path $www 'index.html'
$dstJsDir = Join-Path $www 'js'
$dstJs = Join-Path $dstJsDir 'i18n-zh.js'
$dstHelp = Join-Path $dstJsDir 'i18n-zh-help.js'
$dstApps = Join-Path $dstJsDir 'i18n-zh-apps.js'

if (-not (Test-Path -LiteralPath $srcJs)) { throw "找不到 $srcJs" }
if (-not (Test-Path -LiteralPath $srcHelp)) { throw "找不到 $srcHelp" }
if (-not (Test-Path -LiteralPath $srcApps)) { throw "找不到 $srcApps" }
if (-not (Test-Path -LiteralPath $dstIndex)) { throw "找不到 $dstIndex，请确认 Technitium 安装路径。" }

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'

Copy-Item -LiteralPath $dstIndex -Destination "$dstIndex.bak-zh-$stamp" -Force
if (Test-Path -LiteralPath $dstJs) {
    Copy-Item -LiteralPath $dstJs -Destination "$dstJs.bak-$stamp" -Force
}
if (Test-Path -LiteralPath $dstHelp) {
    Copy-Item -LiteralPath $dstHelp -Destination "$dstHelp.bak-$stamp" -Force
}
if (Test-Path -LiteralPath $dstApps) {
    Copy-Item -LiteralPath $dstApps -Destination "$dstApps.bak-$stamp" -Force
}

Copy-Item -LiteralPath $srcJs -Destination $dstJs -Force
Copy-Item -LiteralPath $srcHelp -Destination $dstHelp -Force
Copy-Item -LiteralPath $srcApps -Destination $dstApps -Force

$html = Get-Content -LiteralPath $dstIndex -Raw

if ($html -notmatch 'i18n-zh-help\.js') {
    if ($html -match 'i18n-zh\.js') {
        $html = $html -replace '(<script\s+src="js/i18n-zh\.js"></script>)', ('<script src="js/i18n-zh-help.js"></script>' + "`r`n" + '$1')
    }
    else {
        $pos = $html.LastIndexOf('</body>')
        if ($pos -lt 0) { throw 'index.html 里找不到 </body>。' }
        $html = $html.Substring(0, $pos) + '    <script src="js/i18n-zh-help.js"></script>' + "`r`n" + '    <script src="js/i18n-zh.js"></script>' + "`r`n" + $html.Substring($pos)
    }
}
elseif ($html -notmatch 'i18n-zh\.js') {
    $pos = $html.LastIndexOf('</body>')
    if ($pos -lt 0) { throw 'index.html 里找不到 </body>。' }
    $html = $html.Substring(0, $pos) + '    <script src="js/i18n-zh.js"></script>' + "`r`n" + $html.Substring($pos)
}

if ($html -notmatch 'i18n-zh-apps\.js') {
    $html = $html -replace '(<script\s+src="js/i18n-zh\.js"></script>)', ('<script src="js/i18n-zh-apps.js"></script>' + "`r`n" + '$1')
}

[System.IO.File]::WriteAllText($dstIndex, $html, (New-Object System.Text.UTF8Encoding($false)))

Write-Host '中文语言包已安装。'
Write-Host '请回到浏览器按 Ctrl + F5 强制刷新。'
Write-Host "备份文件：$dstIndex.bak-zh-$stamp"
