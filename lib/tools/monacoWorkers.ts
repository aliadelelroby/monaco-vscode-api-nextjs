/**
 * Monaco Editor Worker Configuration
 * Handles all worker types needed for Monaco editor functionality
 */

/**
 * Type definitions for worker loaders
 */
export type WorkerLoader = () => Worker;
export type WorkerLoaders = Partial<Record<string, WorkerLoader>>;

/**
 * Worker manager for Monaco editor
 */
export class MonacoWorkerManager {
  /**
   * Get worker loaders configuration
   * @returns Object containing worker loaders for different worker types
   */
  static getWorkerLoaders(): WorkerLoaders {
    return {
      TextEditorWorker: () =>
        new Worker("/workers/editor.js", { type: "module" }),
      TextMateWorker: () =>
        new Worker("/workers/textmate.js", { type: "module" }),
      OutputLinkDetectionWorker: () =>
        new Worker("/workers/outputLinkDetection.js", {
          type: "module",
        }),
      LanguageDetectionWorker: () =>
        new Worker("/workers/languageDetection.js", { type: "module" }),
      NotebookEditorWorker: () =>
        new Worker("/workers/notebook.js", { type: "module" }),
      LocalFileSearchWorker: () =>
        new Worker("/workers/localFileSearch.js", { type: "module" }),
      ExtensionHostWorker: () =>
        new Worker("/workers/extensionHost.js", { type: "module" }),
    };
  }

  /**
   * Initialize Monaco environment with worker configuration
   */
  static initializeMonacoEnvironment(): void {
    const workerLoaders = MonacoWorkerManager.getWorkerLoaders();

    (window as any).MonacoEnvironment = {
      getWorker: function (moduleId: string, label: string) {
        const workerFactory = workerLoaders[label];
        if (workerFactory != null) {
          return workerFactory();
        }
        throw new Error(`Unimplemented worker ${label} (${moduleId})`);
      },
    };
  }
}
