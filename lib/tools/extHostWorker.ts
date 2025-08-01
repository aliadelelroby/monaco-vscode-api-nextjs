'use client';

import type { WorkerConfig } from '@codingame/monaco-vscode-extensions-service-override';

// Import local extension host to register it
import '@codingame/monaco-vscode-theme-defaults-default-extension';
import '@codingame/monaco-vscode-css-default-extension';
import '@codingame/monaco-vscode-html-default-extension';
import '@codingame/monaco-vscode-javascript-default-extension';
import '@codingame/monaco-vscode-json-default-extension';
import '@codingame/monaco-vscode-markdown-basics-default-extension';
import '@codingame/monaco-vscode-scss-default-extension';
import '@codingame/monaco-vscode-shellscript-default-extension';
import '@codingame/monaco-vscode-sql-default-extension';
import '@codingame/monaco-vscode-typescript-basics-default-extension';
import '@codingame/monaco-vscode-xml-default-extension';
import '@codingame/monaco-vscode-yaml-default-extension';
import '@codingame/monaco-vscode-theme-seti-default-extension';
import '@codingame/monaco-vscode-npm-default-extension';
import '@codingame/monaco-vscode-media-preview-default-extension';
import '@codingame/monaco-vscode-configuration-editing-default-extension';
import '@codingame/monaco-vscode-markdown-math-default-extension';
import '@codingame/monaco-vscode-search-result-default-extension';
import '@codingame/monaco-vscode-references-view-default-extension';
import '@codingame/monaco-vscode-ipynb-default-extension';

import '@codingame/monaco-vscode-json-language-features-default-extension';
import '@codingame/monaco-vscode-typescript-language-features-default-extension';
import '@codingame/monaco-vscode-html-language-features-default-extension';
import '@codingame/monaco-vscode-css-language-features-default-extension';
import '@codingame/monaco-vscode-markdown-language-features-default-extension';
import '@codingame/monaco-vscode-emmet-default-extension';

import 'vscode/localExtensionHost';

/**
 * Extension host worker configuration
 * This provides the worker configuration for the VSCode extension host
 */
export const workerConfig: WorkerConfig = {
    url: '/workers/extensionHost.js',
    options: {
        type: 'module',
        name: 'extensionHost',
    },
};
