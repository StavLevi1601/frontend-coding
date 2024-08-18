import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { Schema, schema } from "./validations";
import axios from "axios";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const fetchData = async (dataForm: Schema) => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(result);
    const { data } = result;
    const find = data.find(
      (data: { title: string; body: string }) => data.title === dataForm.title
    );
    console.log(find);
    if (find) {
      alert("Existing - error");
    } else {
      alert("adding");
    }
    reset();
  };

  const onSubmit = handleSubmit(async (dataForm: Schema) => {
    await fetchData(dataForm);
  });

  return (
    <Stack>
      <form onSubmit={onSubmit}>
        <input id="title" {...register("title")} />
        <input id="body" {...register("body")} />
        <button onClick={onSubmit} type={"submit"}>
          Add
        </button>
      </form>
      {errors ? errors.root?.message : ""}
    </Stack>
  );
};

export default PostForm;
