"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import "@/styles/vscode.css";

/**
 * Props for the DevEditor component
 */
interface DevEditorProps {
  language?: string;
  initialValue?: string;
  onChange?: (content: string) => void;
}

/**
 * DevEditor component that provides a Monaco editor interface
 */
export function DevEditor({
  language,
  initialValue,
  onChange,
}: DevEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastContentRef = useRef<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleContentChange = useCallback(() => {
    if (!onChange) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      if (typeof window !== "undefined") {
        const { getEditorContent } = await import("@/lib/vscode-setup");
        const content = getEditorContent();
        onChange(content);
      }
    }, 500);
  }, [onChange]);

  const updateEditor = useCallback(async () => {
    if (
      initialValue !== undefined &&
      initialValue !== lastContentRef.current &&
      typeof window !== "undefined"
    ) {
      const { updateEditorContent } = await import("@/lib/vscode-setup");
      updateEditorContent(initialValue);
      lastContentRef.current = initialValue;
    }
  }, [initialValue]);

  const initializeEditor = useCallback(async () => {
    if (
      containerRef.current &&
      !isInitializedRef.current &&
      initialValue !== undefined &&
      isClient
    ) {
      const startVSCode = async () => {
        if (containerRef.current && typeof window !== "undefined") {
          try {
            const { initVSCode } = await import("@/lib/vscode-setup");
            const container = containerRef.current;
            container.style.height = "100%";
            container.style.width = "100%";
            await initVSCode(container, initialValue, language);
            isInitializedRef.current = true;
            lastContentRef.current = initialValue;
            const editor = (window as any).monaco?.editor?.getModels()?.[0];
            if (editor) {
              editor.onDidChangeContent(handleContentChange);
            }
          } catch (error) {
            console.error("Failed to initialize Monaco editor", error);
          }
        }
      };

      startVSCode();
    }
  }, [initialValue, handleContentChange, isClient]);

  useEffect(() => {
    if (!isInitializedRef.current && isClient) {
      initializeEditor();
    }
  }, [initializeEditor, isClient]);

  useEffect(() => {
    if (isInitializedRef.current && isClient) {
      updateEditor();
    }
  }, [updateEditor, isClient]);

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
        className="flex-1"
      />
    </div>
  );
}
