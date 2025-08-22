import { Slider } from "@mui/material";

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  onValueChange: (newValue: number) => void;
}
export const HorizontalSlider = ({
  label,
  min,
  max,
  value,
  onValueChange,
}: Props) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (onValueChange) {
      if (typeof newValue === "number") {
        onValueChange(newValue);
      }
    }
  };
  function valuetext(value: number) {
    return `${value}px`;
  }

  return (
    <div style={{ width: '100%' }} className="flex flex-col p-2">
      <div className="w-full">
        <p style={{ fontSize: 10 }} className="text-left text-white">
          {label}
        </p>
      </div>

      <Slider
        size="small"
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        min={min}
        max={max}
        step={1}
        valueLabelDisplay="auto"
        aria-label="Small"
        aria-labelledby="continuous-slider"
        sx={{
          "& .MuiSlider-markLabel": {
            fontSize: "10px",
          },
        }}
        marks={[
          { value: min, label: `${min}px` },
          { value: max, label: `${max}px` },
        ]}
      />
    </div>
  );
};