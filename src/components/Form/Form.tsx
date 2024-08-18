import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { schema, Schema } from "../../validations/formSchema";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const [names, setNames] = useState<string[]>([]);
  console.log(names);

  const onSubmit = (data: Schema) => {
    setNames((prevNames) => [...prevNames, data.name]);
    reset();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" />
        <input id="name" {...register("name")} />
        <button>Adding to list</button>
        {errors.name && <p>{errors.root?.message}</p>}
      </form>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
}
