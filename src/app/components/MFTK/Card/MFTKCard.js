import {
    Card,
    CardContent,
    Typography
} from '@mui/material';

/**
 * MFTKCard
 */
export function MFTKCard(props) {
    // Data -------------------------------------------------
    const sx = props.sx;
    const titleText = props.titleText;
    const titleSx = props.titleSx;
    const children = props.children;
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    const element = (
        <Card
            sx={sx}
            elevation={4}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    gutterBottom
                    {...titleSx}
                >
                    {titleText}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
    return element;
    // ----------------------------------------------- Rander
}