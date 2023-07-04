import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FeedIcon from '@mui/icons-material/Feed';
import PeopleIcon from '@mui/icons-material/People';




export const SidebarData=[
    {
        title:"Home",
        icon: <HomeIcon />,
        link: "/",
    },
    
    {
        title:"Dashboard",
        icon: <SpaceDashboardIcon />,
        link: "/dashboard",
    },
    {    
        title:"Details",
        icon: <FeedIcon />,
        link: "/details",
    },
    {
        title:"About",
        icon: <PeopleIcon />,
      link: "/about",
    },
 ];