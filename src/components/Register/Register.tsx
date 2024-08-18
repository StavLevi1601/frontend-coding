import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { Schema, schema } from "./validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFetch } from "./fetch/registerFetch";

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: Schema) => {
    if (data) {
      await registerFetch(data);
    }
  });

  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <form onSubmit={onSubmit}>
        <input
          id="usernamedsd"
          placeholder="username"
          {...register("username")}
        />
        <input id="password" placeholder="password" {...register("password")} />
        <button>Register</button>
        {errors ? errors.root?.message : ""}
      </form>
    </Stack>
  );
}
