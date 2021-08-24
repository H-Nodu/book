import React from 'react'
import { AppBar, Toolbar, Typography, Drawer, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


function Header() {

  // stateとstateを更新するための関数を宣言
  const [open, setOpen] = React.useState(false);

  // メニューを開く関数
  const handleDrawerOpen = function () {
    setOpen(true);
  };

  // メニューを開く関数
  const handleDrawerClose = function () {
    console.log('Handle Toggle')
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static" style={{ color: "#e0f2f1", backgroundColor: "#6200ee" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            TOP
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer open={open} onClick={handleDrawerClose}>
          <MenuItem>ログアウト</MenuItem>
        </Drawer>
      </div>
    </div>
  )
}

export default Header