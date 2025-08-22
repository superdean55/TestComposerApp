import React, { useState } from "react";
import { propEditors, type EditorProps } from "./types/editorProps";

import { createTheme, Divider, ThemeProvider } from "@mui/material";
import {
  type LayoutNode,
  type NodePropsMap,
  type NodeType,
} from "./types/nodes";
import { layoutTree_ } from "./data/local/layout";
import { renderNode } from "./shared/renderNode";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [layout, setLayout] = useState<LayoutNode>(layoutTree_);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedNode = selectedId ? findNode(layout, selectedId) : null;

  function findNode(node: LayoutNode, targetId: string): LayoutNode | null {
    if (node.id === targetId) return node;
    if (!node.children) return null;
    for (const child of node.children) {
      const found = findNode(child, targetId);
      if (found) return found;
    }
    return null;
  }

  function updateNode<T extends NodeType>(
    node: LayoutNode<T>,
    targetId: string,
    newProps: Partial<NodePropsMap[T]>
  ): LayoutNode<T> {
    if (node.id === targetId) {
      return {
        ...node,
        props: { ...node.props, ...newProps },
      };
    }

    if (!node.children) return node;

    return {
      ...node,
      children: node.children.map((child) =>
        updateNode(child, targetId, newProps as Partial<typeof child.props>)
      ),
    };
  }
  function handlePropChange<K extends keyof NodePropsMap[NodeType]>(
    key: K,
    value: NodePropsMap[NodeType][K]
  ) {
    if (!selectedId) return;
    setLayout((prev) => updateNode(prev, selectedId, { [key]: value }));
  }

  const addChildNode = (
    parentId: string,
    newNodes: LayoutNode | LayoutNode[]
  ) => {
    function helper(node: LayoutNode): LayoutNode {
      if (node.id === parentId) {
        const nodesToAdd = Array.isArray(newNodes) ? newNodes : [newNodes];
        return { ...node, children: [...(node.children ?? []), ...nodesToAdd] };
      }
      return { ...node, children: node.children?.map(helper) };
    }

    setLayout((prev) => {
      const updatedLayout = helper(prev);
      console.log("Updated layout:", JSON.stringify(updatedLayout, null, 2));
      return updatedLayout;
    });
  };

  return (
    <div className="flex flex-row gap-4">
      <div style={{ flex: 1 }}>
        <h2>Layout</h2>
        {renderNode(layout, addChildNode, selectedId, setSelectedId)}
      </div>

      <div className="w-sm">
        <div className="w-full p-4 flex flex-col border rounded-3xl border-gray-500">
          <ThemeProvider theme={darkTheme}>
            <div className="w-full flex flex-row justify-center pb-4">
              <h2 className="text-4xl">Control Panel</h2>
            </div>
            {selectedNode ? (
              <div className="flex flex-col gap-2">
                {(
                  Object.keys(selectedNode.props) as Array<
                    keyof typeof selectedNode.props
                  >
                ).map((key) => {
                  const value = selectedNode.props[key];
                  type PropType = typeof value;

                  const Editor = (
                    propEditors as Record<string, React.FC<EditorProps<any>>>
                  )[key];

                  if (!Editor) return null;

                  return (
                    <div key={String(key)} style={{ marginBottom: "10px" }}>
                      <Editor
                        value={value}
                        onChange={(val: PropType) => handlePropChange(key, val)}
                      />
                      <Divider />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-full flex flex-row justify-center">
                <p>Odaberi komponentu</p>
              </div>
            )}
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
