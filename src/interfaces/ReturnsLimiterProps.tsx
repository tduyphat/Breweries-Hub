import { SelectChangeEvent } from "@mui/material";

interface ReturnsLimiterProps {
  returnsLimit: number;
  handleLimitChange: (event: SelectChangeEvent<unknown>) => void;
}

export default ReturnsLimiterProps;