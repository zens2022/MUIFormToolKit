import { MFTKNestedList } from '../components/MFTK/NestedList/MFTKNestedList';
import { MenuData } from './MenuData';

/**
 * Menu
 */
export function Menu(props) {
    // Data -------------------------------------------------
    const path = props.path;
    let defaultOpenCollapse;
    let selectedID;
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    
    switch (path) {
        case '/':
            selectedID = '0';
            break;
        case '/CardList':
            selectedID = '1-0';
            defaultOpenCollapse = 1;
            break;
    }

    const element = (
        <MFTKNestedList
            selectedID={selectedID}
            subTitle="Menu"
            list={MenuData}
            defaultOpenCollapse={defaultOpenCollapse}
        />
    );
    return element;
    // ----------------------------------------------- Rander
}