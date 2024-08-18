import { Button, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { MuiFormSchema, muiFormSchem } from "../../validations/muiFormSchem";
import { zodResolver } from "@hookform/resolvers/zod";
import MuiFormDialog from "./MuiFormDialog";

export default function MuiForm() {
  const methods = useForm<MuiFormSchema>({
    resolver: zodResolver(muiFormSchem),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <Stack>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <MuiFormDialog />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </Stack>
  );
}
