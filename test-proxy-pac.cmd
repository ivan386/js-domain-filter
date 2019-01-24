cd /d %~dp0

rem test proxy.pac
copy /b temp\proxy.pac+prefix.js+domains.json+test-all-domains.js temp\test-pac.js
cscript /nologo temp\test-pac.js > temp\output.txt
pause