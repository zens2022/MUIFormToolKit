import {
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
    const element = (
        <Routes>
            <Route path='/' element={<DashboardLayout />}>
                <Route index element={<>content</>} />
            </Route>
            <Route path='/subSystem1' element={<DashboardLayout/>}>
                <Route index element={<>subSystem1 content</>} />
            </Route>
            <Route path='/subSystem2' element={<DashboardLayout/>}>
                <Route index element={<>subSystem2 content</>} />
            </Route>
            <Route path='/subSystem3' element={<DashboardLayout/>}>
                <Route index element={<>subSystem3 content</>} />
            </Route>
        </Routes>

    );
    return element;
    // ----------------------------------------------- Rander
}