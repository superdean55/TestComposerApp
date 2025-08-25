import { DescriptionPreview } from "../components/layout/Description";
import { HorizontalLayoutPreview } from "../components/layout/HorizontalLayout";
import type { LayoutNode, NodeType } from "../types/nodes";

const nodeTypeToPreviewType: Record<NodeType, string> = {
  HorizontalLayout: "component",
  Header: "header",
  Content: "content",
  Page: "layout",
  Divider: "component",
  Description: "component"
};

interface PreviewItem {
  type: string;
  Component: React.FC<{ onClick: (newNode: LayoutNode[]) => void }>;
}

const previewConfig: Record<string, PreviewItem[]> = {
  paper: [],
  layout: [{ type: "layout", Component: HorizontalLayoutPreview }],
  header: [],
  content: [{ type: "component", Component: DescriptionPreview }],
  component: [],
};

interface PreviewContentProps {
  nodeType: string;
  onSelect: (newNodes: LayoutNode[]) => void;
}

export const PreviewContent = ({ nodeType, onSelect }: PreviewContentProps) => {
  const previewType = Object.prototype.hasOwnProperty.call(
    nodeTypeToPreviewType,
    nodeType
  )
    ? nodeTypeToPreviewType[nodeType as NodeType]
    : "layout";
  const previews = previewConfig[previewType] || [];

  return (
    <div className="grid grid-cols-1 gap-4">
      {previews.map((preview) => (
        <preview.Component key={preview.type} onClick={onSelect} />
      ))}
    </div>
  );
};
