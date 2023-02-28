import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const MenuData = [
    {
        text: 'Home',
        icon: <HomeIcon />,
        url: '/'
    },
    {
        text: 'Component',
        icon: <AppsIcon />,
        child: [{
            text: 'CardList',
            icon: <DashboardIcon />,
            url: '/CardList'
        }]
    }
]