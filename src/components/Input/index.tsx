import { Container } from "./styles";
import { InputProps } from "./types";
export default function Input({register, name, label, placeholder}: InputProps) {

  return (
    <Container>
        <p>{label}</p>
        <input placeholder={placeholder} {...register(name, {required: true})} />
    </Container>
  );
}
