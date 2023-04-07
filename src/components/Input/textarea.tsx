import { Container } from "./styles";
import { InputProps } from "./types";

export default function TextArea({register, name, label, placeholder}: InputProps) {

  return (
    <Container>
        <p>{label}</p>
        <textarea placeholder={placeholder} {...register(name, {required: true})} rows={4} />
    </Container>
  );
}
