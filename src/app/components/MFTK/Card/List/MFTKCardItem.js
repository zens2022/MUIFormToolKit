import {
    Box, Button, Typography
} from "@mui/material";

/**
 * MFTKCardItemButton
 */
export function MFTKCardItem(props) {
    // Data -------------------------------------------------
    const sx = props.sx;
    const buttonSx = props.buttonSx;
    const buttonText = props.buttonText;
    const href = props.href;
    const icon = props.icon;
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    const element = (
        <Box
            sx={{
                ...sx
            }}
        >
            <Button
                fullWidth
                size="small"
                href={href}
                startIcon={icon}
                sx={{
                    justifyContent:'left',
                    px:2,
                    ...buttonSx
                }}
            >
                <Typography
                    variant="subtitle1"
                >
                    {buttonText}
                </Typography>
            </Button>
        </Box>
    );
    return element;
    // ----------------------------------------------- Rander
}