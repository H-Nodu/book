import React from 'react'

// 画面遷移
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Button from '@material-ui/core/Button';

// 各種画面
import Home from '../pages/home';
import SignUp from '../pages/sign_up';
import SignInOrUp from '../pages/sign_in_or_up';

import Auth from '../atoms/auth';

function PageRouter() {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signin" component={SignInOrUp} />
                    <Route exact path="/signup" component={SignUp} />
                    {/* 以下認証のみ */}
                    <Auth>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route render={() => <p>not found.</p>} />
                        </Switch>
                    </Auth>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default PageRouter;
