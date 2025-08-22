
import type { EditorProps } from "../../types/editorProps";
import { HorizontalSlider } from "./shared/HorizontalSlider";

export const PaddingEditor = ({ value, onChange }: EditorProps<number>) => {
  return (
    <>
      <HorizontalSlider
        label="padding"
        min={0}
        max={20}
        value={value}
        onValueChange={(newValue) => onChange(newValue)}
      />
    </>
  );
};
