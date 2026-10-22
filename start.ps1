$env:PATH = "$PSScriptRoot\.tools;$env:PATH"
Set-Location -LiteralPath $PSScriptRoot
& "$PSScriptRoot\.tools\node.exe" "$PSScriptRoot\.tools\package\bin\npm-cli.js" run dev
