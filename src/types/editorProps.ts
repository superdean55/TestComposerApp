import { MarginEditor } from "../components/controlPanel/MarginEditor";
import { PaddingEditor } from "../components/controlPanel/PaddingEditor";
import { TextEditor } from "../components/controlPanel/TextEditor";


export interface EditorProps<T> {
  value: T;
  onChange: (newValue: T) => void;
}
/*export type PropEditorMap = {
  text: React.FC<EditorProps<string>>;
  padding: React.FC<EditorProps<number>>;
  margin: React.FC<EditorProps<Margin>>;
  // možeš dodati ostale propse
};*/
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