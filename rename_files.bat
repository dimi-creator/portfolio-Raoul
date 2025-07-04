@echo off
for /r src %%f in (*.js) do (
    if not "%%~nxf"=="main.jsx" (
        ren "%%f" "%%~nf.jsx"
    )
)
