import { Component } from 'react';
import Auth from '../../interfaces/auth.interface';
declare class Login extends Component<{}, Auth> {
    constructor();
    render(): JSX.Element;
    emailTextChanged: (event: any) => void;
    passwordTextChanged: (event: any) => void;
}
export default Login;
