import type { ModelViewerElement } from "@google/model-viewer";

export function getModelViewer(): ModelViewerElement | null {
  return document.querySelector("model-viewer") as ModelViewerElement | null;
}
