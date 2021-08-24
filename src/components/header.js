import React from 'react'
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles(() => ({
    typographyStyles: {
      flex: 1
    }
  }));

function Header() {
    
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                Book
                </Typography>
                <AccountCircleOutlinedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header