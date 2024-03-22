import { CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <div className="mx-auto my-20 flex flex-col items-center justify-center gap-y-4">
      <CircularProgress />
      <Typography color="primary">Loading Data</Typography>
    </div>
  );
}
