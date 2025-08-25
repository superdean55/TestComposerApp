import { useState } from "react";
import { PreviewContent } from "../../shared/PreviewContent";
import PreviewDialog from "../../shared/PreviewDialog";
import type { LayoutNode } from "../../types/nodes";
import { Button } from "@mui/material";

const nodesThatCanAddChildren: string[] = [
  "Page",
  "HorizontalLayout",
  "Header",
  "Content",
];

export const NodeControls = ({
  node,
  onAdd,
  onRemove,
}: {
  node: LayoutNode;
  onAdd: (parentId: string, newNode: LayoutNode | LayoutNode[]) => void;
  onRemove: (nodeId: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const handleAddHeaders = (newNodes: LayoutNode[]) => {
    setOpen(false);
    onAdd(node.id, newNodes);
  };
  const removeNode = () => {
    onRemove(node.id);
  };
  const hasChildren = node.children && node.children.length > 0;
  const canAddChildren = nodesThatCanAddChildren.includes(node.type);
  return (
    <>
      <div>
        {!hasChildren && canAddChildren && (
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Add layout
          </Button>
        )}
        {hasChildren && (
          <div>
            <Button variant="outlined" onClick={removeNode}>
              Remove Node
            </Button>
          </div>
        )}
        <PreviewDialog
          title="Choose layout configuration"
          open={open}
          onClose={() => setOpen(false)}
        >
          <PreviewContent
            nodeType={node.type}
            onSelect={handleAddHeaders}
          ></PreviewContent>
        </PreviewDialog>
      </div>
    </>
  );
};
