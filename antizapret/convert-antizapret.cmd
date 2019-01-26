md temp
copy /b antizapret-proxy.pac+convert-antizapret.js temp\convert-antizapret.js
cscript /nologo temp\convert-antizapret.js > temp\domains.json
pause