@REM Open new Sublime Text 3 Workspace in the current folder
subl.exe .

@REM Synchronizes current dir and all in-folders with the browser
browser-sync start --server --directory --files "**/*"

