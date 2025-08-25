import { MarginEditor } from "../components/controlPanel/MarginEditor";
import { PaddingEditor } from "../components/controlPanel/PaddingEditor";
import { TextEditor } from "../components/controlPanel/TextEditor";


export interface EditorProps<T> {
  value: T;
  onChange: (newValue: T) => void;
}

type PropEditorMap = {
  padding: typeof PaddingEditor;
  text: typeof TextEditor;
  margin: typeof MarginEditor;
};

// eslint-disable-next-line react-refresh/only-export-components
export const propEditors: PropEditorMap = {
  padding: PaddingEditor,
  text: TextEditor,
  margin: MarginEditor,
};