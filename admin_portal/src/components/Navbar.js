import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: "auto",
        marginRight: "0",
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: "30px",
        alignSelf: "center",
        "&:hover": {
            color: "yellow",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <h1 style={{ color: "white" }}>
                    Parivahan
                </h1>
                {isMobile ? (<DrawerComponent />) :
                    (
                        <div className={classes.navlinks}>
                            <Link to="/" className={classes.link}>
                                <h1 style={{ color: "white", fontSize: "1.2em" }}>Home</h1>
                            </Link>
                            <Link to="/drivers" className={classes.link}>
                                <h1 style={{ color: "white", fontSize: "1.2em" }}>Drivers</h1>
                            </Link>
                            <Link to="/rides" className={classes.link}>
                                <h1 style={{ color: "white", fontSize: "1.2em" }}>Rides</h1>
                            </Link>
                            {/* <Link to="/map" className={classes.link}>
                                <h1 style={{ color: "white", fontSize: "1.2em" }}>Map</h1>
                            </Link> */}
                        </div>
                    )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;