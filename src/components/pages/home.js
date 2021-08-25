import React from 'react'

// 各種インポート
import Button from '@material-ui/core/Button';
import FullScreenDialog from '../organisms/full_screen_dialog';

import firebase from '../../firebase';

function Home() {

    // イベント
    var event = {

        // クリックイベント
        click: function () {
            alert("clickされた");
        },

        handleLogout:function(){
            firebase.auth().signOut();
        }
    };

    return (
        <div>
            <h2>Home Page</h2>
            <Button variant="contained" color="primary" onClick={event.click}>
                Hello World
            </Button>

            <div className="container">
                <p>Home</p>
                <br />
                <Button onClick={event.handleLogout}>ログアウト</Button>
            </div>

            <FullScreenDialog />
        </div>
    )
}

export default Home