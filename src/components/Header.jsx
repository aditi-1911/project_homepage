import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect, useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'

    },
    appbarTitle: {
        flexGrow: '1'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#5AFF3D'

    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    },
    title: {
        color: '#fff',
        fontSize: '4rem',
        fontFamily: 'Nunito'
    }
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true)
    }, []);

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Just <span className={classes.colorText}>Sell It</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>

            </AppBar>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcome to <br />
                Just <span className={classes.colorText}>Sell It</span>
                .</h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </div>
            </Collapse>

        </div>
    );
}