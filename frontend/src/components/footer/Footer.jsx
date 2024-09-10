import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        mt: 5,
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Omar Abdelkader
        </Button>
        ©2024
      </Typography>
    </Box>
  );
}

export default Footer;
