import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { Stack, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function MuiFormDialog() {
  const { control } = useFormContext();

  return (
    <Stack>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <TextField
              {...fields}
              helperText={error ? error.message : null}
              error={!!error}
              onChange={onChange}
              fullWidth
              label={"Name"}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <TextField
              {...fields}
              helperText={error ? error.message : null}
              error={!!error}
              onChange={onChange}
              fullWidth
              label={"Email"}
            />
          </>
        )}
      />
    </Stack>
  );
}
