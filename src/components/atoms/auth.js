import React from 'react';
import { Redirect } from 'react-router-dom';

import firebase from '../../firebase';

class Auth extends React.Component {

    state = {
        signinCheck: false, // ログインチェックが完了してるか
        signedIn: false,    // ログインしてるか
    }

    _isMounted = false; 

    componentDidMount = () => {

        //mountされてる
        this._isMounted = true;

        console.log("=================================");
        console.log(firebase) // Undefined
        console.log(firebase.auth) // Undefined
        console.log("=================================");
        
        //ログインしてるかどうかチェック
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                //してる
                if (this._isMounted) {
                    this.setState({
                        signinCheck: true,
                        signedIn: true,
                    });
                }
            } else {
                //してない
                if (this._isMounted) {
                    this.setState({
                        signinCheck: true,
                        signedIn: false,
                    });
                }
            }
        })
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }    

    render() {

        //チェックが終わってないなら（ローディング表示）
        if (!this.state.signinCheck) {
            return (
                <div>まだ</div>
            );
        }

        //チェックが終わりかつ
        if (this.state.signedIn) {
            //サインインしてるとき（そのまま表示）
            return this.props.children;
        } else {
            //してないとき（ログイン画面にリダイレクト）
            return <Redirect to="/signin" />
        }
    }}

export default Auth;