"use client";

import { initialize } from "@codingame/monaco-vscode-api";
import "./features/intellisense";
import "./tools/extHostWorker";

import getLanguagesServiceOverride from "@codingame/monaco-vscode-languages-service-override";
import getThemeServiceOverride from "@codingame/monaco-vscode-theme-service-override";
import getTextmateServiceOverride from "@codingame/monaco-vscode-textmate-service-override";
import getModelServiceOverride from "@codingame/monaco-vscode-model-service-override";
import getConfigurationServiceOverride, {
  updateUserConfiguration,
} from "@codingame/monaco-vscode-configuration-service-override";
import getKeybindingsServiceOverride from "@codingame/monaco-vscode-keybindings-service-override";
import getExtensionServiceOverride from "@codingame/monaco-vscode-extensions-service-override";
import getOutputServiceOverride from "@codingame/monaco-vscode-output-service-override";
import getTaskServiceOverride from "@codingame/monaco-vscode-task-service-override";

import { MonacoWorkerManager } from "./tools/monacoWorkers";
import { workerConfig } from "./tools/extHostWorker";
import * as monaco from "monaco-editor";

/**
 * Language mapping configuration for file extensions to Monaco editor languages
 */
const LANGUAGE_MAP: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  jsx: "javascript",
  tsx: "typescript",
  json: "json",
  html: "html",
  css: "css",
  scss: "scss",
  sass: "sass",
  less: "less",
  py: "python",
  java: "java",
  c: "c",
  cpp: "cpp",
  cs: "csharp",
  php: "php",
  rb: "ruby",
  go: "go",
  rs: "rust",
  swift: "swift",
  kt: "kotlin",
  sql: "sql",
  md: "markdown",
  xml: "xml",
  yaml: "yaml",
  yml: "yaml",
  toml: "toml",
  ini: "ini",
  sh: "shell",
  bash: "shell",
  zsh: "shell",
  fish: "shell",
  ps1: "powershell",
  bat: "batch",
  cmd: "batch",
} as const;

/**
 * Default editor configuration
 */
const DEFAULT_EDITOR_CONFIG = {
  fontSize: 12,
  lineHeight: 18,
  fontFamily: "Menlo, Monaco, 'Courier New', monospace",
  fontWeight: "normal",
  letterSpacing: 0,
  theme: "vs",
  minimapEnabled: true,
  lineNumbers: "on",
  roundedSelection: false,
  scrollBeyondLastLine: false,
  readOnly: false,
  cursorStyle: "line",
  contextmenu: true,
  mouseWheelZoom: true,
  suggestOnTriggerCharacters: true,
  acceptSuggestionOnEnter: "on",
  quickSuggestions: true,
  parameterHintsEnabled: true,
  hoverEnabled: true,
  wordBasedSuggestions: "off",
  bracketPairColorizationEnabled: true,
  guidesBracketPairs: true,
  guidesIndentation: true,
} as const;

/**
 * Configuration service for managing editor settings
 */
class ConfigurationService {
  /**
   * Update user configuration with default editor settings
   */
  static async updateUserConfiguration(): Promise<void> {
    const config = {
      "editor.fontSize": DEFAULT_EDITOR_CONFIG.fontSize,
      "editor.lineHeight": DEFAULT_EDITOR_CONFIG.lineHeight,
      "editor.fontFamily": DEFAULT_EDITOR_CONFIG.fontFamily,
      "editor.fontWeight": DEFAULT_EDITOR_CONFIG.fontWeight,
      "editor.letterSpacing": DEFAULT_EDITOR_CONFIG.letterSpacing,
      "editor.theme": DEFAULT_EDITOR_CONFIG.theme,
      "editor.minimap.enabled": DEFAULT_EDITOR_CONFIG.minimapEnabled,
      "editor.lineNumbers": DEFAULT_EDITOR_CONFIG.lineNumbers,
      "editor.roundedSelection": DEFAULT_EDITOR_CONFIG.roundedSelection,
      "editor.scrollBeyondLastLine": DEFAULT_EDITOR_CONFIG.scrollBeyondLastLine,
      "editor.readOnly": DEFAULT_EDITOR_CONFIG.readOnly,
      "editor.cursorStyle": DEFAULT_EDITOR_CONFIG.cursorStyle,
      "editor.contextmenu": DEFAULT_EDITOR_CONFIG.contextmenu,
      "editor.mouseWheelZoom": DEFAULT_EDITOR_CONFIG.mouseWheelZoom,
      "editor.suggestOnTriggerCharacters":
        DEFAULT_EDITOR_CONFIG.suggestOnTriggerCharacters,
      "editor.acceptSuggestionOnEnter":
        DEFAULT_EDITOR_CONFIG.acceptSuggestionOnEnter,
      "editor.quickSuggestions": DEFAULT_EDITOR_CONFIG.quickSuggestions,
      "editor.parameterHints.enabled":
        DEFAULT_EDITOR_CONFIG.parameterHintsEnabled,
      "editor.hover.enabled": DEFAULT_EDITOR_CONFIG.hoverEnabled,
      "editor.wordBasedSuggestions": DEFAULT_EDITOR_CONFIG.wordBasedSuggestions,
      "editor.bracketPairColorization.enabled":
        DEFAULT_EDITOR_CONFIG.bracketPairColorizationEnabled,
      "editor.guides.bracketPairs": DEFAULT_EDITOR_CONFIG.guidesBracketPairs,
      "editor.guides.indentation": DEFAULT_EDITOR_CONFIG.guidesIndentation,
      "workbench.colorTheme": "Default Light+",
    };

    await updateUserConfiguration(JSON.stringify(config));
  }
}

/**
 * Monaco editor instance manager
 */
class EditorManager {
  private static instance: monaco.editor.IStandaloneCodeEditor | null = null;

  /**
   * Get the current editor instance
   * @returns The current editor instance or null if not initialized
   */
  static getInstance(): monaco.editor.IStandaloneCodeEditor | null {
    return EditorManager.instance;
  }

  /**
   * Set the editor instance
   * @param editor - The Monaco editor instance
   */
  static setInstance(editor: monaco.editor.IStandaloneCodeEditor): void {
    EditorManager.instance = editor;
  }

  /**
   * Update editor content and language
   * @param content - The content to set in the editor
   * @param language - Optional language to set in the editor
   */
  static updateContent(content: string, language?: string): void {
    if (!EditorManager.instance) {
      console.warn("Editor not initialized");
      return;
    }

    const model = EditorManager.instance.getModel();

    if (model) {
      model.setValue(content);
      monaco.editor.setModelLanguage(model, language);
    }
  }

  /**
   * Get current editor content
   * @returns The current content of the editor or empty string if not initialized
   */
  static getContent(): string {
    if (!EditorManager.instance) {
      return "";
    }
    return EditorManager.instance.getValue();
  }

  /**
   * Create and configure a new Monaco editor instance
   * @param container - The HTML element to mount the editor
   * @param content - Initial content for the editor
   * @param language - Optional language to set in the editor
   * @returns The created editor instance
   */
  static createEditor(
    container: HTMLElement,
    content: string,
    language?: string
  ): monaco.editor.IStandaloneCodeEditor {
    const editor = monaco.editor.create(container, {
      value: content,
      language: language,
      automaticLayout: true,
    });

    editor.onDidChangeModelContent(() => {
      console.log("Content changed");
    });

    EditorManager.setInstance(editor);
    return editor;
  }
}

/**
 * VSCode API initialization service
 */
class VSCodeInitializer {
  /**
   * Initialize VSCode API with essential services for highlighting and extension support
   * @param container - The HTML element to mount the editor
   * @param initialContent - Optional initial content for the editor
   * @param filePath - Optional file path to determine language
   */
  static async initialize(
    container: HTMLElement,
    initialContent?: string,
    language?: string
  ): Promise<void> {
    // Initialize Monaco environment with proper worker configuration
    MonacoWorkerManager.initializeMonacoEnvironment();

    // Initialize Monaco service with essential overrides for highlighting and extensions
    await initialize({
      ...getExtensionServiceOverride({
        ...workerConfig,
      }),
      ...getTextmateServiceOverride(),
      ...getThemeServiceOverride(),
      ...getLanguagesServiceOverride(),
      ...getModelServiceOverride(),
      ...getConfigurationServiceOverride(),
      ...getKeybindingsServiceOverride(),
      ...getOutputServiceOverride(),
      ...getTaskServiceOverride(),
    });

    // Update user configuration
    await ConfigurationService.updateUserConfiguration();

    // Enable async tokenization for textmate worker
    await updateUserConfiguration(
      JSON.stringify({
        "editor.experimental.asyncTokenization": true,
      })
    );

    // Create editor instance
    const content = initialContent ?? "";
    EditorManager.createEditor(container, content, language);

    console.log("VSCode initialized with extension support");
  }
}

/**
 * Public API functions for external use
 */

/**
 * Update editor content and language
 * @param content - The content to set in the editor
 * @param language - Optional language to set in the editor
 */
export function updateEditorContent(content: string, language?: string): void {
  EditorManager.updateContent(content, language);
}

/**
 * Get current editor content
 * @returns The current content of the editor
 */
export function getEditorContent(): string {
  return EditorManager.getContent();
}

/**
 * Initialize VSCode API with essential services for highlighting and extension support
 * @param container - The HTML element to mount the editor
 * @param initialContent - Optional initial content for the editor
 * @param filePath - Optional file path to determine language
 */
export const initVSCode = VSCodeInitializer.initialize;
