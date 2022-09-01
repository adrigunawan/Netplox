import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import { CssVarsProvider } from "@mui/joy/styles";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function SelectIndicator() {
  return (
    <CssVarsProvider>
      <Select
        placeholder="Language"
        indicator={<KeyboardArrowDown />}
        sx={{
          color: "#fff",
          backgroundColor: "#000",
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            color: "#58A5FF",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
              color: "#58A5FF",
            },
          },
        }}
      >
        <Option value="EN">English</Option>
        <Option value="IDN">Indonesia</Option>
      </Select>
    </CssVarsProvider>
  );
}
