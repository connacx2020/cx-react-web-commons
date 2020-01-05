import React, { Component } from 'react';
// import { Button, TextField, Card, CardHeader } from '@material-ui/core';
// import Auth from '../../interfaces/auth.interface';
// import './login.scss';

class Login extends Component<{}, {
    email: string,
    password: string
}> {
    constructor() {
        super({});

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div>login</div>
        )
    }

    // render() {
    //     const { email, password } = this.state;
            
    //     //onSubmit={this.loginSubmit}
    //     return (
    //         <div className="DN_Login_Container">
    //             <Card className="card">
    //                 <form className="DN_Login_Form_Container">
    //                     <CardHeader title="DevNet" />
    //                     <TextField id="outlined-basic" className="email_input" label="Email" variant="outlined" value={email} onChange={this.emailTextChanged} />
    //                     <TextField id="outlined-basic" type="password" className="password_input" label="Password" variant="outlined" value={password} onChange={this.passwordTextChanged} />
    //                     <Button type='submit' className="login_btn" variant="contained" color="primary">Login</Button>
    //                 </form>
    //             </Card>
    //         </div>
    //     )
    // }

    // loginSubmit = event => {
    //     // console.log(this.state.email + '\n' + this.state.password)
    //     // loginValidate(this.state.email, this.state.password).then(
    //         loginValidate('bryyan.mk@gmail.com', '12345').then(
    //         res => {
    //             this.setState({
    //                 loginData: res
    //             })
    //         }
    //         )

    //     // getUsers().then(res=>console.log(res))
    //     event.preventDefault()
    // }

    emailTextChanged = (event: any) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordTextChanged = (event: any) => {
        this.setState({
            password: event.target.value
        })
    }
}

export default Login
