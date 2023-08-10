import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import fbImage from '../Pictures/fb.png'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import viratImage from '../Pictures/virat.png'
import rf from '../Pictures/rf.png'
import tc from '../Pictures/tc.png'
import HomeIcon from '@mui/icons-material/Home';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GridViewIcon from '@mui/icons-material/GridView';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { FaFacebookMessenger } from 'react-icons/fa'
import Body from '../Body/body';



import './drawer.css'

const drawerWidth = 240;

const icons = [{
  id:1,
  text:"Friends",
  icon:<PeopleAltIcon sx={{fontSize:'25px',color:'white'}}/>
},{
  id:2,
  text:"Marketplace",
  icon:<StorefrontIcon sx={{fontSize:'25px',color:'white'}}/>
},{
  id:3,
  text:"Most Recent",
  icon:<HistoryIcon sx={{fontSize:'25px',color:'white'}}/>
},{
  id:4,
  text:"Groups",
  icon:<GroupsIcon sx={{fontSize:'25px',color:'white'}}/>
},{
  id:5,
  text:"Watch",
  icon:<OndemandVideoIcon sx={{fontSize:'25px',color:'white'}}/>
},
{
  id:6,
  text:"See More",
  icon:<ExpandCircleDownIcon sx={{fontSize:'29px',color:'white'}}/>
}]

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: 'grey',
    },
    marginLeft: 0,
    width: '65%',
    
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '10ch',
        },
      },
    },
  }));

  const drawer = (
    <Box sx={{backgroundColor:'black',height:'100vh'}}>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',pt:1}}>
      <img src={fbImage} className='fb-image'/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',pt:1,pl:2}}>
          <img src={viratImage} className='fb-image'/>
          <Typography className='virat-text'>Virat Kohli</Typography>
          </Box>
      <Toolbar />
    
      <List sx={{marginTop:-5}}>
        {icons.map((each) => (
          <ListItem key={each.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {each.icon}
              </ListItemIcon>
              <ListItemText  sx={{color:'white'}}primary={each.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{background:'white'}}/>
      <Typography className='shortcut'>
        Your shortcuts
      </Typography>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',pl:2,mb:2}}>
      <img src={rf} className='rf'/>
      <Typography  className='short-text'>
        Rcb Fanclub
      </Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',pl:2}}>
      <img src={tc} className='rf'/>
      <Typography className='short-text'>
        Test Championship
      </Typography>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'black'
        }}
      >
        <Toolbar>
          <Box sx={{width:'30%'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Box sx={{display:'flex',flexDirection:"row",justifyContent:'space-between',alignItems:'center',width:'100%'}}>
          <Box sx={{display:'flex',flexDirection:"row",justifyContent:'space-around',alignItems:'center',width:{xs:'100%',sm:'50%',md:'40%',lg:'40%',xl:'35%'}}}>
            <HomeIcon/>
            < OndemandVideoIcon/>
            <StorefrontIcon />
            <GroupsIcon/>
            <VideogameAssetIcon/>
            <GridViewIcon sx={{display:{xs:'block',sm:'none',md:'none'},marginLeft:2}} />
          </Box>
          <Box sx={{display:{xs:'none',sm:'flex',md:'flex',lg:'flex',xl:'flex'},flexDirection:"row",justifyContent:'space-around',alignItems:'center',width:{xs:'60%',sm:'40%',md:'30%',lg:'30%',xl:'30%'}}}>
           <GridViewIcon />
           <FaFacebookMessenger />
           <CircleNotificationsIcon/>
           <img src={viratImage} className='fb-image'/>
          </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          anchor='left'
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer 
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        > 
          
        
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
         
        </Typography> */}
        <Body/>
      </Box>
    </Box>
  );
}
