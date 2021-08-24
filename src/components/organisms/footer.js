import React from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


function Footer() {

    // stateとstateを更新するための関数を宣言
    const [value, setValue] = React.useState(false);

    const useStyles = makeStyles({
        root: {
            position: "fixed",
            bottom: 0,
            width: "100%",
        },
        label: {},
    });

    const classes = useStyles();

    return (

        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default Footer