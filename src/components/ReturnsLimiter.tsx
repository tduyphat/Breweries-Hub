import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ReturnsLimiterProps from "../interfaces/ReturnsLimiterProps";

const ReturnsLimiter: React.FC<ReturnsLimiterProps> = ({
  returnsLimit,
  handleLimitChange,
}) => {
  return (
    <Box sx={{ minWidth: 120, marginLeft: "16px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Limit returns</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={returnsLimit}
          label="Limit returns"
          onChange={handleLimitChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ReturnsLimiter;
