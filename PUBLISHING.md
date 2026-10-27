# Publishing Subtitle burner

This folder is the git copy of the website. Pushing from here updates the live site:

https://themalificent.github.io/subtitle-video-editor/

GitHub Pages updates a few minutes after a push.

## Publish a new version

Run these in PC PowerShell, one at a time.

1. Go to the folder:

```
Set-Location "C:\Users\blkni\OneDrive\Desktop\Subtitle burner website"
```

2. Copy in the new files (`index.html`, and `sw.js` / `manifest.webmanifest` if they changed):

```
Copy-Item "<path to the new index.html>" ".\index.html" -Force
```

3. Stage everything:

```
git add -A
```

4. Commit with the version number:

```
git commit -m "Subtitle burner X.Y"
```

5. Push to GitHub:

```
git push
```

## Check it

- `git status` should show nothing after a successful push.
- If `git push` asks you to log in, run `gh auth status`. If it says you are not logged in, run `gh auth login` again.

## Notes

- The README.md test line from the first setup is harmless; it can stay.
- The site is an installable app. Phones may keep the old copy until the app is opened with internet, then it refreshes.
