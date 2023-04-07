import { UseFormRegister } from "react-hook-form"

export type InputProps = {
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
  label: string;
}