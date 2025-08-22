import { type ContentProps, Content } from "../components/layout/Content";
import { type HeaderProps, Header } from "../components/layout/Header";
import { type PageProps, Page } from "../components/layout/Page";

export type NodeType = "Page" | "Header" | "Content";

export type NodePropsMap = {
  Page: PageProps;
  Header: HeaderProps;
  Content: ContentProps;
};

export interface LayoutNode<T extends NodeType = NodeType> {
  id: string;
  type: T;
  props: NodePropsMap[T];
  children?: LayoutNode[];
}
export const components: {
  [K in NodeType]: React.ComponentType<NodePropsMap[K]>;
} = {
  Page,
  Header,
  Content,
};
