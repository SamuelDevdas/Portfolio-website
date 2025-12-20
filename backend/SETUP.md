# Portfolio Website - Setup Documentation

## Hosting

| Item            | Value                                     |
| --------------- | ----------------------------------------- |
| **Platform**    | Netlify                                   |
| **Site URL**    | https://truevineinsights.ch               |
| **Netlify URL** | capable-bunny-d5800b.netlify.app          |
| **Repo**        | github.com/SamuelDevdas/Portfolio-website |

## DNS (Infomaniak)

| Type  | Name | Value                            |
| ----- | ---- | -------------------------------- |
| A     | @    | 75.2.60.5                        |
| CNAME | www  | capable-bunny-d5800b.netlify.app |

## Contact Form

- **Method**: Netlify Forms
- **Form name**: `consultation`
- **Notifications**: Email to SamuelDevdas01@gmail.com
- **Spam protection**: Honeypot field enabled

## Key Files

| File         | Purpose                                   |
| ------------ | ----------------------------------------- |
| `index.html` | Form with `data-netlify="true"` attribute |
| `js/main.js` | AJAX form submission handler              |

## How Form Works

1. User fills form → submits
2. Netlify receives submission
3. Netlify emails you
4. Submissions stored in Netlify dashboard

## To View Submissions

Netlify Dashboard → Forms → consultation

## Troubleshooting

| Issue            | Solution                                  |
| ---------------- | ----------------------------------------- |
| Form not working | Check Netlify Forms dashboard             |
| No email         | Check Form notifications in Site settings |
| SSL error        | Netlify → Domain management → Verify DNS  |
