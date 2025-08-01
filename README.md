# Monaco VSCode API Next.js Example

This project demonstrates how to integrate the [Monaco Editor](https://microsoft.github.io/monaco-editor/) with the [VSCode API](https://github.com/codingame/monaco-vscode-api) in a [Next.js](https://nextjs.org) application. It provides a ready-to-use playground for editing TypeScript/JavaScript with VSCode-like features in the browser.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

2. **Bundle Monaco workers:**

   Before running the development server, you need to bundle the Monaco workers:

   ```bash
   npm run bundle-monaco-workers
   # or
   yarn bundle-monaco-workers
   # or
   pnpm bundle-monaco-workers
   # or
   bun run bundle-monaco-workers
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the editor in action.

You can start editing the main page by modifying `app/page.tsx`. The page will auto-update as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a modern font family from Vercel.

## Learn More

- [Monaco Editor Documentation](https://microsoft.github.io/monaco-editor/)
- [VSCode API for Monaco](https://github.com/codingame/monaco-vscode-api)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
