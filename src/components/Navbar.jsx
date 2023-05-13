import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <span style={{ color: 'white', marginLeft:'10px', fontFamily:'Inter',fontSize:'25px'}}>FlixTube</span>
    </Link>
    <Button variant="contained" href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">Github</Button>
    <SearchBar />
  </Stack>
);

export default Navbar;
