import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PrimarySearchAppBar() {
  let Navigate = useNavigate();

  const [search, setSearch] = React.useState([]);
   
  const handleOnSearch = (query, results) => {
    if (query.length > 1) {
      axios(
        `https://api.themoviedb.org/3/search/movie?api_key=1738daf9496d49421cdec9255aba9b10&language=tr-TR&query=${query}&page=1&include_adult=false`
      ).then((value) => {
        //value consoledan bak aşağıdaki yere sadece filmleri koy setSearch'a
        console.log(value.data.results);
        setSearch(value.data.results);
      });
    }
  };
  
  const handleOnSelect = (item) => {
    
    // the item selected
    console.log(item);
  
    Navigate(`/detail/${item.id}`);
    
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "60px"}}>
      
      <AppBar position="static" style={{backgroundColor:"#242624"}}>
        
        <Toolbar>

        <Link to="/">
          <IconButton >
        <Home fontSize="small"  htmlColor="white"/>
        </IconButton>
        </Link>
        <Box style={{width:350}}>
        <ReactSearchAutocomplete
              fuseOptions={{ keys: ["title", "original_title"] }}
              resultStringKeyName="title"
              items={search}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect} 
              autoFocus
            
            />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}