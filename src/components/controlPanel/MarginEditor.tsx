import type { EditorProps } from "../../types/editorProps";
import type { Margin } from "../../types/margins";

export function MarginEditor({ value, onChange }: EditorProps<Margin>) {
  const handleChange = (side: keyof Margin, newVal: string) => {
    onChange({ ...value, [side]: Number(newVal) });
  };
  console.log("value:", value);
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}
    >
      {(["top", "right", "bottom", "left"] as (keyof Margin)[]).map((side) => (
        <div key={side}>
          <label>{side}: </label>
          <input
            type="number"
            value={value[side]}
            onChange={(e) => handleChange(side, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
