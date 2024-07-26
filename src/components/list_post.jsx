import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import vite from "../../public/vite.svg";
import Button from "@mui/material/Button";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from "@mui/icons-material/Article";
let count = 0;

function PostItem({ title, description, status }) {
  count = count + 1;
  return (
    <div className="box">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <img src={vite} />
          </Grid>
          <Grid item xs={8}>
            <h2># {count}</h2>
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

function ListPost() {
  let list = [
    {
      title: "Học css",
      description: "Học css rất dễ",
      status: "new",
    },
    {
      title: "Học JS",
      description: "Học JS rất dễ",
      status: "new",
    },
    {
      title: "Học HTML",
      description: "Học HTML rất dễ",
      status: "old",
    },
    {
      title: "Học SCSS",
      description: "Học SCSS rất dễ",
      status: "new",
    },
    {
      title: "Học React",
      description: "Học react rất  dễ rớt",
      status: "old",
    },
  ];

  return (
    <>
      <h2>List Post </h2>
      <PostItem status="new" title="abc" description="abc" />
      <PostItem status="new" title="abc" description="abc" />
      <PostItem status="new" title="abc" description="abc" />
    </>
  );
}

export default ListPost;
