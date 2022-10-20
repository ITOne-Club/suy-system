import { Box, Typography, Grid } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Box sx={{ width: "100%", bottom: 0, position: "fixed", marginLeft: "8px", paddingRight: "16px", marginBottom: "8px" }}>
                <Grid container>
                    <Grid item xs={6} sx={{ textAlign: "left" }}>
                        &copy; Copyright ITOne - Show Us Yours 2022. DEMO VERSION - DO NOT USE IN PROD MODE.
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                        Made with ❤️ by CookieGMVN.
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
}

export default Footer;