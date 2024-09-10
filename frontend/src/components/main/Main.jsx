import {
  Container,
  Stack,
  Box,
  Typography,
  useTheme,
  Rating,
  IconButton,
} from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

import { useGetproductByNameQuery } from "../../Redux/product";

function Main() {
  const allProducts = "products?populate=*";
  const MenProducts = "products?populate=*&filters[productCategory][$eq]=Men";
  const WomanProducts =
    "products?populate=*&filters[productCategory][$eq]=Women";
  const [Show, setShow] = useState(allProducts);
  const { data, error, isLoading } = useGetproductByNameQuery(Show);
  const [alignment, setAlignment] = React.useState("left");
  const theme = useTheme();
  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);

    setShow(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    <Typography variant="h6" color="initial">
      Loading ...
    </Typography>;
  }

  if (error) {
    <Typography variant="body1" color="initial">
      {error}
    </Typography>;
  }
  if (data) {
    return (
      <Container sx={{ mt: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in an exclusive brand selection
            </Typography>
          </Box>

          <Box>
            <ToggleButtonGroup
              value={data}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              color="error" // Ensure color is set to "error"
            >
              <ToggleButton
                value={allProducts}
                sx={{
                  color:
                    alignment === "left"
                      ? theme.palette.error.main
                      : theme.palette.text.primary,
                }}
                aria-label="left aligned"
              >
                All Products
              </ToggleButton>

              <ToggleButton
                value={MenProducts}
                sx={{
                  mx: "16px !important",
                  color:
                    alignment === "center"
                      ? theme.palette.error.main
                      : theme.palette.text.primary,
                }}
                aria-label="centered"
              >
                MEN category
              </ToggleButton>

              <ToggleButton
                value={WomanProducts}
                sx={{
                  color:
                    alignment === "right"
                      ? theme.palette.error.main
                      : theme.palette.text.primary,
                }}
                aria-label="right aligned"
              >
                Women category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${import.meta.env.VITE_BASE_URL}${
                    item.attributes.productImg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setclickedProduct(item);
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    add to cart
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
              //maxHeight: "90vh", // Set a maximum height for the dialog
              overflowY: "auto", // Allow scrolling if content overflows
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
