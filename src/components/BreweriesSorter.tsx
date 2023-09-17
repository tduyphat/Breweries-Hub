import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import BreweriesSorterProps from "../interfaces/BreweriesSorterProps";

const BreweriesSorter: React.FC<BreweriesSorterProps> = ({
  sortType,
  handleSortTypeChange,
}) => {
  return (
    <FormControl sx={{ marginLeft: "16px" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={sortType}
        onChange={handleSortTypeChange}
      >
        <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
        <FormControlLabel value="desc" control={<Radio />} label="Descending" />
      </RadioGroup>
    </FormControl>
  );
};

export default BreweriesSorter;
