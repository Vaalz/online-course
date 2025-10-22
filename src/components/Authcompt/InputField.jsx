import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function InputField({
  label,
  type = "text",
  error = false,
  helperText = "",
  ...props
}) {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      error={error}
      autoComplete="off"
      helperText={helperText}
      sx={{
        autoComplete: "new-email",
        form: {
          autoComplete: "off",
        },
        "& .MuiOutlinedInput-root": {
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          fontStyle: "regular",
          fontWeight: 400,
          fontSize: "20px",
          "& fieldset": {
            borderColor: error ? "#f44336" : "#D9D9D9",
            transition: "border 0.2s ease-in-out",
          },
          "&:hover fieldset": {
            borderColor: error ? "#f44336" : "#7AC2F5",
          },
          "&.Mui-focused fieldset": {
            border: error ? "2px solid #f44336" : "2px solid transparent",
            background: error
              ? "none"
              : "linear-gradient(white, white) padding-box, linear-gradient(90deg, #7AC2F5) border-box",
            borderRadius: "10px",
          },
        },
        "& .MuiInputBase-root": {
          backgroundColor: "white",
        },
        "& .MuiInputBase-input": {
          color: "#010E0A",
          position: "relative",
          zIndex: 1,
        },
        "& .MuiInputLabel-root": {
          fontSize: "20px",
          fontStyle: "regular",
          fontWeight: 400,
          color: error ? "#f44336" : "#657575",
          backgroundColor: "white",
          px: 1,
        },
        "& .MuiFormHelperText-root": {
          color: "#f44336",
          marginLeft: 2,
        },
      }}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : {}
      }
      {...props}
    />
  );
}
