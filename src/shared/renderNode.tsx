import { components, type LayoutNode, type NodeType } from "../types/nodes";

export function renderNode<T extends NodeType>(
  node: LayoutNode<T>,
  onAdd: (parentId: string, newNode: LayoutNode) => void,
  selectedId: string | null,
  setSelectedId: (id: string | null) => void
): React.ReactNode {
  const Comp = components[node.type] as React.ElementType;
  if (!Comp) return null;
  
  return (
    
      <Comp
        node={node}
        onAdd={onAdd}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      >
        {node.children?.map((child) =>
          renderNode(child, onAdd, selectedId, setSelectedId)
        )}
      </Comp>
    
  );
}
