import React from "react";
import './Header.scss'
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#61DAFB',
        },
        secondary: {
            main: '#003c57',
        },
    },
});
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

interface INavigationItem {
    title: string;
    url: string;
}

export default function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        isDrawer: false,
    });
    const toggleDrawer = () => (event: React.MouseEvent | React.KeyboardEvent) => {
        setState({ ...state, isDrawer: !state.isDrawer });
    };
    const navigationItems: INavigationItem[] = [
        { title: 'Home', url: '/' },
        { title: 'General', url: '/general' }
    ]

    return (
        <header className="Header">
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon onClick={ toggleDrawer() } />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Reactive chat
                        </Typography>
                        <Button color="inherit">
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left" open={state.isDrawer} onClose={ toggleDrawer() }>
                    <nav className="Header__navigation">
                        <ul className="Header__navigation-list">
                            {navigationItems.map((item) => {
                                return (
                                    <li className="Header__navigation-item" key={item.title}>
                                        <Link to={item.url} className="Header__navigation-item-link">
                                            <Button
                                                className="Header__navigation-item-link-button"
                                                onClick={ toggleDrawer() }
                                                variant="outlined"
                                                color="primary">{item.title}</Button>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </Drawer>
            </ThemeProvider>
        </header>
    );
}
