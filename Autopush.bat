call git add .
set /p id="Enter Commit Description: "\r\n
call git commit -m "%id%"
call git push https://github.com/mutantsforever/my-app.git
pause