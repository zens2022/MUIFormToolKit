import {
    AppBar,
    Box,
    Drawer,
    ThemeProvider,
    Typography
} from '@mui/material';
import { MFTKTheme } from '../theme/MFTKTheme';
/**
 * DashboardLayout
 */
export function DashboardLayout(props) {
    // Data -------------------------------------------------
    const logoElement = props.logo;
    const menuElement = props.menu;
    const subMenuElement = props.subMenu;
    const menuWidth = (props.menuWidth) ? props.menuWidth : 300;
    const headerHeight = (props.headerHeight) ? props.headerHeight : 50;
    const content = props.content;
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    const headerZoneElement = (
        <ThemeProvider theme={MFTKTheme}>
            <AppBar
                position="fixed"
                color="neutral"
                sx={{
                    height: headerHeight,
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%'
                    }}
                >
                    <Box
                        sx={{
                            flexShrink: 0,
                            width: menuWidth,
                            pl: 2,
                            boxSizing: 'border-box'
                        }}
                    >
                        <Typography
                            variant="h6"
                        >
                            {logoElement}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 2,
                        }}
                    >
                        {subMenuElement}
                    </Box>
                </Box>
            </AppBar>
        </ThemeProvider>
    );

    const menuZoneElement = (
        <Drawer
            variant="permanent"
            sx={{
                width: menuWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: menuWidth,
                    boxSizing: 'border-box'
                }
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    top: headerHeight,
                    mt: 1
                }}
            >
                {menuElement}
            </Box>
        </Drawer>
    );

    const contentZoneElement = (
        <Box
            sx={{
                flex: 1,
                p: 2,
                mt: `${headerHeight}px`
            }}
        >
            {content}
        </Box>
    )

    const element = (
        <Box
            sx={{
                display: 'flex'
            }}
        >
            {headerZoneElement}
            {menuZoneElement}
            {contentZoneElement}
        </Box>
    );
    return element;
    // ----------------------------------------------- Rander
}