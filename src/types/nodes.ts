import { type ContentProps, Content } from "../components/layout/Content";
import { type DescriptionProps, Description } from "../components/layout/Description";
import { type DividerProps, Divider } from "../components/layout/Divider";
import { type HeaderProps, Header } from "../components/layout/Header";
import {
  type HorizontalLayoutProps,
  HorizontalLayout,
} from "../components/layout/HorizontalLayout";
import { type PageProps, Page } from "../components/layout/Page";

export type NodeType =
  | "Page"
  | "Header"
  | "Content"
  | "Divider"
  | "HorizontalLayout"
  | "Description";

export type NodePropsMap = {
  Page: PageProps;
  Header: HeaderProps;
  Divider: DividerProps;
  Content: ContentProps;
  HorizontalLayout: HorizontalLayoutProps;
  Description: DescriptionProps;
};

export interface LayoutNode<T extends NodeType = NodeType> {
  id: string;
  type: T;
  props: NodePropsMap[T];
  children?: LayoutNode[];
}
export const components: {
  [K in NodeType]: React.ComponentType<LayoutProps<K>>;
} = {
  Page,
  Header,
  Content,
  Divider,
  HorizontalLayout,
  Description
};
export interface LayoutProps<T extends NodeType> {
  node: LayoutNode<T>;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}
