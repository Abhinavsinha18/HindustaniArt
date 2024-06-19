// import { useRouter } from 'next/router';
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import "./sidemenu.css"
// import StarIcon from '@mui/icons-material/Star';

export default function SideMenu() {
  return (  <div >


  <div className="sidebarbox">
<div className="implink">Important Links</div>
 
<List
      sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}
      aria-label="contacts"
   
   className="listnew">
      <ListItem disablePadding>
        <ListItemButton>
       
          <ListItemText primary="Chelsea Otakan" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
      <ListItemButton>
       
       <ListItemText primary="Chelsea Otakan" />
     </ListItemButton>
      </ListItem>
    </List>
    </div>
    </div>
  );
}
