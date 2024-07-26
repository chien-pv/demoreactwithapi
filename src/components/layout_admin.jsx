import ColorInversionNavigation from "./sidebar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Admin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <ColorInversionNavigation />
        </Grid>
        <Grid xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
