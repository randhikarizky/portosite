import { Chip } from "@mui/material";

export default function TechStackChip(name: string) {
  return <Chip label={name} size="small" variant="outlined" color="primary" />;
}
