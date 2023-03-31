import React, { ChangeEvent } from "react";
import { StyledInput } from "./index.styles";

interface InputFieldProps {
  label: string;
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
}

const InputField = (props: InputFieldProps) => {
  const { label, value, placeholder = "", type, handleChange, ...rest } = props;
  return (
    <StyledInput
      label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default InputField;
