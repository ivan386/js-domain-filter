cd /d %~dp0
md temp

rem compile proxy.pac
copy /b prefix.js+domains.json+replace-words.js+get-key.js+domains-validator.js+find-words.js+pack-list.js+compress.js temp\build.js
copy /b unpack-cdomains.js temp\proxy.pac
cscript /nologo temp\build.js >> temp\proxy.pac
copy /b temp\proxy.pac+replace-words.js+get-key.js+check-domain.js+proxy-pac.tmp temp\proxy.pac

pause