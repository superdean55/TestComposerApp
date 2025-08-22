import { TextField } from "@mui/material";
import type { EditorProps } from "../../types/editorProps";

export function TextEditor({ value, onChange }: EditorProps<string>) {
  return (
    <TextField
      id="outlined-basic"
      label="Text"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
