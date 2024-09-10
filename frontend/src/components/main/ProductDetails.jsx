import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
export default function ProductDetyails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        {
          //zedna display felx 5ater ken thama espace taht taswira donc 7asb 5ebret dev ali 9al naatiwha d flex taw tetna7a}
        }
        <img width={360} src="../../../public/final.png" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          Lorem llllllllllllllllllllllllddddddddddddddddd
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          lorem ipsum dolor sit amet, consectetur adip
        </Typography>
        <Typography variant="body1">
          asssssssssssssssssssssssssssssaa
        </Typography>

        <Stack
          direction={"row"}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          gap={1}
          my={2}
        >
          {["../../../public/final.png", "../../../public/images (2).jpg"].map(
            (item) => {
              return (
                <img
                  height={100}
                  width={100}
                  style={{ borderRadius: 3 }}
                  src={item}
                  key={item}
                />
              );
            }
          )}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
