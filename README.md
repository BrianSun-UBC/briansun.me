# briansun.me

Personal portfolio for Brian Sun, built as a static Vinext/React site and deployed through GitHub Pages.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The production build is emitted to `dist/client`:

```bash
npm run build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy-pages.yml`. The workflow builds the static export, uploads `dist/client`, and deploys it to GitHub Pages.

The custom domain is `briansun.me`. GitHub Pages should be configured with GitHub Actions as its publishing source and `briansun.me` as its custom domain.

## DNS

The apex uses GitHub Pages' four A records, while `www` aliases the user site:

| Type | Host | Answer |
| --- | --- | --- |
| A | blank | `185.199.108.153` |
| A | blank | `185.199.109.153` |
| A | blank | `185.199.110.153` |
| A | blank | `185.199.111.153` |
| CNAME | `www` | `BrianSun-UBC.github.io` |

Retain the GitHub account-verification TXT record after verification, and preserve any existing MX/SPF records used for email forwarding.
