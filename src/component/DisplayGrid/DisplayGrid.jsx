import Banner from '@/hocs/SubdomainBanner/Banner'
import React from 'react'
import GridImages from './comp/GridImages'
import "./displaygrid.css"
import Footer from '../footer/Footer'
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const DisplayGrid = () => {
  return (
    <div>
        <Banner headline={"Political"}/>

        <div className='displaygridbox'>
            <div>
                <GridImages/>
            </div>


            <div>
       
              
            <div className="implink">More Collections</div>
            <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}

      className='morecollside'
  >
      <ListItem disablePadding>
        <ListItemButton>
       
        <ListItemAvatar>
          <Avatar>
            {/* <ImageIcon /> */}
          </Avatar>
        </ListItemAvatar>
            <ListItemText primary="FootBall Caricatures" secondary="Jan 9, 2014" />
        </ListItemButton>
      </ListItem>
  
      <ListItem disablePadding>
        <ListItemButton>
       
        <ListItemAvatar>
          <Avatar>
            {/* <ImageIcon /> */}
          </Avatar>
        </ListItemAvatar>
            <ListItemText primary="FootBall Caricatures" secondary="Jan 9, 2014" />
        </ListItemButton>
      </ListItem>
    </List>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default DisplayGrid