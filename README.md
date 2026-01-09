# MalnutriX Collect — Website

This repository holds the public website for the MalnutriX Collect project — a lightweight site that presents the project's goals, features and documentation for the mobile data-collector app used by aides-soignants to collect patient data and sync with the MalnutriX nutritionist application.

This README was generated from the MalnutriX Collect mobile project's README and the website repository package.json to provide a clear site-focused overview, setup and contribution instructions.

## What this site contains

- Project overview and goals
- Installation and local development instructions for the Next.js site
- Links to source code and mobile app documentation

## Tech stack

- Next.js 16 (React 19)
- React
- Tailwind CSS
- Radix UI primitives
- Recharts (charts)
- Sonner (toasts)
- Lucide icons

(The dependencies are listed in package.json — this site repo is a typical Next.js/Tailwind/React app.)

## Getting started (local development)

Prerequisites

- Node.js >= 18
- A package manager (npm, pnpm, or Yarn)

Install

```bash
# from the repository root
npm install
```

Run in development

```bash
npm run dev
# open http://localhost:3000
```

Build and run production

```bash
npm run build
npm run start
```

Lint

```bash
npm run lint
```

## Configuration

If the site requires runtime configuration, create a `.env.local` file in the repository root and add environment variables the app expects (for example NEXT_PUBLIC_API_URL). This repository currently does not include a documented set of env variables; check the codebase for any usage of `process.env`.

## Links

- Mobile app repo (collector): https://github.com/nXhermane/MalnutriXcollect
- This site: https://github.com/nXhermane/MalnutriXcollect.site

## Contributing

1. Fork the repository or create a branch.
2. Make changes and open a pull request against the `main` branch.
3. Provide a clear description of what you changed and why.

Suggested PR title: "chore: add README for MalnutriXcollect.site"

Suggested PR body:

"This pull request adds a README.md to the MalnutriXcollect.site repository. The file explains the purpose of the site, the tech stack, and provides setup and development instructions. The content was adapted from the main MalnutriX Collect mobile README and the site package.json to give contributors a clear starting point."

## License

See the LICENSE file in this repository (if any). If none is present, ask the maintainers which license should be used.

---

Note: I created a branch named `add-readme-and-doc` and added this README there. To open a pull request, visit:

https://github.com/nXhermane/MalnutriXcollect.site/compare/add-readme-and-doc?expand=1
