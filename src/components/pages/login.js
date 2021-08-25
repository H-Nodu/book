import React from 'react'
import { Input, TextField, Button } from '@material-ui/core'
import axios from 'axios'
function Login() {

    // イベント
    var event = {

        // クリックイベント
        click: function () {

            try {
                axios.get(`https://jsonplaceholder.typicode.com/users`)
                    .then(res => {
                        const persons = res.data;
                        this.setState({ persons });
                    })

            } catch (e) {

            }
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <div>
            <TextField id="standard-basic" label="userid" />
            </div>
            <div>
            <Input type="password"/>
            </div>
            <div>
            <Button variant="contained" color="primary" onClick={event.click}>
                login
            </Button>
            </div>
        </div>
    )
}

export default Login