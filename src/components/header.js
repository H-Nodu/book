import React from 'react'
import clsx from 'clsx';
import { AppBar, Toolbar, makeStyles, Typography, Drawer, MenuItem, IconButton } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

function Header() {

  // stateとstateを更新するための関数を宣言
  const [open, setOpen] = React.useState(false);

  // メニューを開く関数
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // メニューを開く関数
  const handleDrawerClose = () => {
    console.log('Handle Toggle')
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            TOP
          </Typography>
        </Toolbar>
      </AppBar>

      <div>
          <Drawer 
          open={open}
          onClick={handleDrawerClose}
          >
            <MenuItem>ログアウト</MenuItem>
          </Drawer>
      </div>      
    </div>
  )
}

export default Header