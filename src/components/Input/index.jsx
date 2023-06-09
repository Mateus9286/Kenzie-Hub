import React from "react";
import { Input, Label } from "./styles";

export const Inputs = ({ placeholder, type, label, id, register }) => {
  return (
    <>
      <Label id={id}>{label}</Label>
      <Input
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
        {...register}
      ></Input>
    </>
  );
};
