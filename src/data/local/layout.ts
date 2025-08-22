import type { LayoutNode } from "../../types/nodes";

export const layoutTree : LayoutNode = {
  id: "page1",
  type: "Page",
  props: { text: "Page" },
  children: [
    {
      id: "header1",
      type: "Header",
      props: {
        text: "Dobrodošli!",
        padding: 30,
        margin: { top: 10, right: 10, bottom: 10, left: 10 },
      },
    },
    {
      id: "header2",
      type: "Header",
      props: {
        text: "Heder 2",
        padding: 30,
        margin: { top: 10, right: 10, bottom: 10, left: 10 },
      },
    },
    { id: "content1", type: "Content", props: { text: "Ovo je sadržaj." } },
  ],
};
