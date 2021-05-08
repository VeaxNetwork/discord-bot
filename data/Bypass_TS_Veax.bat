 @echo off
TITLE TeamSpeak 3 Bypass BlackList [Veax]
echo.
echo TeamSpeak 3 Bypass BlackList
echo TeamSpeak 3 Bypass BlackList [Veax]
:choice
SET /P C="Desea instalar el bypass? Pon Y si quieres o n si no quieres [Y/n]: "
for %%? in (Y) do if /I "%C%"=="%%?" goto setup
for %%? in (n) do if /I "%C%"=="%%?" exit
goto choice
:setup
echo Set UAC = CreateObject("Shell.Application") > "%temp%\getadmin.vbs"
set params = %*:"="
echo UAC.ShellExecute "cmd.exe","/c echo.0.0.0.0 blacklist2.teamspeak.com >> %WINDIR%\System32\drivers\etc\hosts","","runas", 0 >> "%temp%\getadmin.vbs"
"%temp%\getadmin.vbs" > NUL
:setup
echo Set UAC = CreateObject("Shell.Application") > "%temp%\getadmin.vbs"
set params = %*:"="
echo UAC.ShellExecute "cmd.exe","/c echo.0.0.0.0 blacklist.teamspeak.com >> %WINDIR%\System32\drivers\etc\hosts","","runas", 0 >> "%temp%\getadmin.vbs"
"%temp%\getadmin.vbs" > NUL
 @echo off
echo.
echo se ha quitado la lista negra de su ordenador
:salida
SET /P C="Ya se hizo todo, puedes volver al inicio(1) o salir(2) [1 o 2]: "
for %%? in (1) do if /I "%C%"=="%%?" goto inicio
for %%? in (2) do if /I "%C%"=="%%?" exit
goto salida
:inicio
echo Estás en el inicio de vuelta.
goto choice
