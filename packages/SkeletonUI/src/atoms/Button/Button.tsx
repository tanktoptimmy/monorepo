import React, { FC } from "react";

const Button: FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>
}

type ButtonProps = {
  label: string
}

export default Button