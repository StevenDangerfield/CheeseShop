```
$base64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes("Downloads\jarlsberg.jpg"))
$base64 | Set-Clipboard
```