import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
function ScrollToTop() {
  return (
    <div>
      <Zoom in={useScrollTrigger({ threshold: 100 })}>
        <Fab
          sx={{ position: "fixed", bottom: 33, right: 33 }}
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </div>
  );
}

export default ScrollToTop;
