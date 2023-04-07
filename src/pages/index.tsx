import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { Container, Main } from "@/pages/styles";
import Input from "@/components/Input";
export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, getValues, watch } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: any) => {
    localStorage.setItem("name-user", data.name);
    router.push("feed");
  };

  return (
    <Main>
      <Container>
        <h2>Welcome to CodeLeap network!</h2>
        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            register={register}
            placeholder="John doe"
            label="Please enter your username"
          />
          <button disabled={!watch().name}>ENTER</button>
        </form>
      </Container>
    </Main>
  );
}
