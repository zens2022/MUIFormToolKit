import React, { useState } from 'react';
import {
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse
} from '@mui/material';
import {
    orange
} from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

/**
 * MFTKMenu
 */
export function MFTKNestedList(props) {
    // Data -------------------------------------------------
    const selectedID = props.selectedID;
    const subTitle = props.subTitle;
    const list = props.list;
    const defaultOpenCollapse = props.defaultOpenCollapse;
    const [openCollapse, setOpenCollapse] = useState(defaultOpenCollapse);
    const selectedSx = {
        color: orange[500]
    }
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    const clickEven = (itemIndex) => {
        if (openCollapse === itemIndex) {
            setOpenCollapse(undefined);
        } else {
            setOpenCollapse(itemIndex);
        }
    };
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------

    // Sub title element
    let subTitleElement = undefined;
    if (subTitle) {
        subTitleElement = (
            <ListSubheader component="div">
                {subTitle}
            </ListSubheader>
        )
    }

    // Build sub item list
    const subItems = (list, itemIndex) => {
        if (list) {
            let items = list.map((item, subItemindex) => {
                let itemID = `${itemIndex}-${subItemindex}`;
                let hasSelected = selectedID === itemID;
                let key = `sub-item-${itemIndex}-${subItemindex}`;
                let text = item.text;
                let icon = item.icon;
                let url = item.url;
                let buttonSx = {
                    pl: 4
                }
                if (hasSelected) {
                    buttonSx = Object.assign(buttonSx, selectedSx);
                }
                let element = (
                    <ListItemButton
                        selected={hasSelected}
                        key={key}
                        href={url}
                        sx={buttonSx}
                    >
                        <ListItemIcon sx={{
                            color: 'inherit'
                        }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                );
                return element;
            });

            let element = (
                <Collapse in={openCollapse === itemIndex}>
                    <List
                        component="div"
                        disablePadding
                    >
                        {items}
                    </List>
                </Collapse>
            );
            return element;
        }
        return undefined;
    }

    // Build item list
    let items = undefined;
    if (list) {
        items = list.map((item, itemIndex) => {
            let itemID = `${itemIndex}`;
            let hasSelected = selectedID === itemID;
            let key = `item-${itemIndex}`;
            let icon = item.icon;
            let text = item.text;
            let url = item.url;
            let child = item.child;
            let collapseIconElement = undefined;
            let bindClickEven = undefined;
            if (child) {
                if (openCollapse === itemIndex) {
                    collapseIconElement = <KeyboardArrowDownIcon />;
                } else {
                    collapseIconElement = <KeyboardArrowRightIcon />;
                }
                bindClickEven = clickEven.bind(this, itemIndex);
            }
            let buttonSx = {};
            if (hasSelected) {
                buttonSx = Object.assign(buttonSx,selectedSx);
            }
            let element = (
                <React.Fragment key={key}>
                    <ListItemButton
                        selected={hasSelected}
                        href={url}
                        onClick={bindClickEven}
                        sx={buttonSx}
                    >
                        <ListItemIcon 
                            sx={{
                                color:'inherit'
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {collapseIconElement}
                    </ListItemButton>
                    {subItems(child, itemIndex)}
                </React.Fragment>
            )
            return element;
        });
    }

    const element = (
        <List
            disablePadding
            component="nav"
            subheader={subTitleElement}
        >
            {items}
        </List>
    );
    return element;
    // ----------------------------------------------- Rander
}