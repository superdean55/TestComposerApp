import { components, type LayoutNode, type NodeType } from "../types/nodes";

export function renderNode<T extends NodeType>(
  node: LayoutNode<T>,
  onAdd: (parentId: string, newNode: LayoutNode) => void,
  selectedId: string | null,
  setSelectedId: (id: string | null) => void
): React.ReactNode {
  const Comp = components[node.type] as React.ElementType;
  if (!Comp) return null;
  const isSelected = node.id === selectedId;
  return (
    <div
      key={node.id}
      style={{ border: isSelected ? "1px solid red" : "1px solid transparent" }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedId(node.id);
      }}
    >
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
    </div>
  );
}
