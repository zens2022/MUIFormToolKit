import {
    Route,
    Routes,
    useLocation
} from 'react-router-dom';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { Menu } from '../pages/Menu';

/**
 * WebRoute
 */
export function WebRoute() {
    // Data -------------------------------------------------
    const routeInfo = useLocation();
    const currentPath = routeInfo.pathname;
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    const routerElement = (
        <Routes>
            <Route path='/' element="Home" />
            <Route path='/CardList' element="CardList" />
        </Routes>
    );

    const menuElement = (
        <Menu
            path={currentPath}
        />
    );

    const element = (
        <DashboardLayout
            logo="MUI Form Tool Kit"
            menu={menuElement}
            content={routerElement}
        />
    );
    return element;
    // ----------------------------------------------- Rander
}