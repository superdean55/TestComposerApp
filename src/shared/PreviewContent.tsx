import { HorizontalLayoutPreview } from "../components/layout/HorizontalLayout";
import type { LayoutNode } from "../types/nodes";

interface PreviewItem {
  type: string;
  Component: React.FC<{ onClick: (newNode: LayoutNode[]) => void }>;
}

const previewConfig: Record<string, PreviewItem[]> = {
  layout: [{ type: "layout", Component: HorizontalLayoutPreview }],
  header: [],
};

interface PreviewContentProps {
  nodeType: string;
  onSelect: (newNodes: LayoutNode[]) => void;
}

export const PreviewContent = ({
  nodeType,
  onSelect,
}: PreviewContentProps) => {
  const previews = previewConfig[nodeType] || [];

  return (
    <div className="grid grid-cols-1 gap-4">
      {previews.map((preview) => (
        <preview.Component key={preview.type} onClick={onSelect} />
      ))}
    </div>
  );
};
