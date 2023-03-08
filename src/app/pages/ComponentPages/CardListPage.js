import {
    Box,
    Grid,
    Typography
} from "@mui/material";
import {
    indigo
} from '@mui/material/colors';
import { MFTKCardItem } from "../../components/MFTK/Card/List/MFTKCardItem";
import { MFTKCard } from "../../components/MFTK/Card/MFTKCard";
import LabelIcon from '@mui/icons-material/Label';

/**
 * CardListPage
 */
export function CardListPage(props) {
    // Data -------------------------------------------------
    // ------------------------------------------------- Data
    // Process ----------------------------------------------
    // ---------------------------------------------- Process
    // Event ------------------------------------------------
    // ------------------------------------------------ Event
    // Rander -----------------------------------------------
    const element = (
        <>
            <Box sx={{
                mb: 2
            }}>
                <Typography variant="h4">
                    Card List
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <MFTKCard
                        titleText="Care1"
                        titleSx={{
                            color: indigo[500]
                        }}
                    >
                        <MFTKCardItem
                            buttonText="Item1"
                            icon={<LabelIcon />}
                            href="#item1"
                        />
                        <MFTKCardItem
                            buttonText="Item2"
                            icon={<LabelIcon />}
                            href="#item2"
                        />
                        <MFTKCardItem
                            buttonText="Item3"
                            icon={<LabelIcon />}
                            href="#item3"
                        />
                        <MFTKCardItem
                            buttonText="Item4"
                            icon={<LabelIcon />}
                            href="#item4"
                        />
                    </MFTKCard>
                </Grid>
                <Grid item xs={6}>
                    <MFTKCard
                        titleText="Care2"
                        titleSx={{
                            color: indigo[500]
                        }}
                    >
                        <MFTKCardItem
                            buttonText="Item1"
                            icon={<LabelIcon />}
                            href="#item1"
                        />
                        <MFTKCardItem
                            buttonText="Item2"
                            icon={<LabelIcon />}
                            href="#item2"
                        />
                    </MFTKCard>
                </Grid>
                <Grid item xs={6}>
                    <MFTKCard
                        titleText="Care3"
                        titleSx={{
                            color: indigo[500]
                        }}
                    >
                        <MFTKCardItem
                            buttonText="Item1"
                            icon={<LabelIcon />}
                            href="#item1"
                        />
                        <MFTKCardItem
                            buttonText="Item2"
                            icon={<LabelIcon />}
                            href="#item2"
                        />
                        <MFTKCardItem
                            buttonText="Item3"
                            icon={<LabelIcon />}
                            href="#item3"
                        />
                    </MFTKCard>
                </Grid>
                <Grid item xs={6}>
                    <MFTKCard
                        titleText="Care4"
                        titleSx={{
                            color: indigo[500]
                        }}
                    >
                        <MFTKCardItem
                            buttonText="Item1"
                            icon={<LabelIcon />}
                            href="#item1"
                        />
                        <MFTKCardItem
                            buttonText="Item2"
                            icon={<LabelIcon />}
                            href="#item2"
                        />
                        <MFTKCardItem
                            buttonText="Item3"
                            icon={<LabelIcon />}
                            href="#item3"
                        />
                    </MFTKCard>
                </Grid>
            </Grid>
        </>
    );
    return element;
    // ----------------------------------------------- Rander
}