import { Button } from "@mui/material";

interface Props {
  onSubmit: () => void;
}

export default function MuiFormButton({ onSubmit }: Props) {
  return <Button onClick={onSubmit}></Button>;
}
