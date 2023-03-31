import { Stack } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../../../features/theme";
import Button from "../../atoms/Button";
import InputField from "../../atoms/InputField";

const ChangeColor = () => {
  const [color, setColor] = useState("#00ff65");
  const dispatch = useDispatch();
  const handleColorInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleColorChange = () => {
    dispatch(changeColor(color));
  };

  return (
    <Stack direction="row" gap={2}>
      <InputField
        type="color"
        label="Color"
        value={color}
        handleChange={handleColorInputChange}
      />
      <Button handleClick={handleColorChange}>Change Color</Button>
    </Stack>
  );
};

export default ChangeColor;
