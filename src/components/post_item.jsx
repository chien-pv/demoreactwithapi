import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import vite from "../../public/vite.svg";
import Button from "@mui/material/Button";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from "@mui/icons-material/Article";

function PostItem({ title, description, status }) {
  return (
    <div className="box">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <img src={vite} />
          </Grid>
          <Grid item xs={8}>
            <IconButton aria-label="fingerprint" color="secondary">
              {status == "new" && <FiberNewIcon />}
            </IconButton>
            <h4>{title}</h4>
            <p>{description}</p>
            <Button size="small" variant="outlined">
              Readmore
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default PostItem;
