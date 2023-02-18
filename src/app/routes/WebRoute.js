import {
    Outlet,
    Route,
    Routes
} from 'react-router-dom';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
/**
 * WebRoute
 */
export function WebRoute() {
    // Data -------------------------------------------------
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    const routerElement = (
        <Routes>
            <Route path='/' element="Home" />
            <Route path='/page2' element="Page2" />
        </Routes>
    );

    const element = (
        <DashboardLayout
            logo="MUI Form Tool Kit"
            content={routerElement}
        />
    );
    return element;
    // ----------------------------------------------- Rander
}