import { components, type LayoutNode, type NodeType } from "../types/nodes";

export function renderNode<T extends NodeType>(
  node: LayoutNode<T>,
  selectedId: string | null,
  setSelectedId: (id: string | null) => void
): React.ReactNode {
  const Comp = components[node.type] as React.ElementType;
  if (!Comp) return null;

  return (
    <Comp
      key={node.id}
      node={node}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    >
      {node.children?.map((child) =>
        renderNode(child, selectedId, setSelectedId)
      )}
    </Comp>
  );
}
