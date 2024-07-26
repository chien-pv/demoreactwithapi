import Button from "@mui/material/Button";
import BugReportIcon from "@mui/icons-material/BugReport";

function PageHeader() {
  let style = {
    color: "blue",
    backgroundColor: "red",
  };

  return (
    <>
      <h1 style={style}>Page header</h1>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        <BugReportIcon />
      </Button>
    </>
  );
}

export default PageHeader;
