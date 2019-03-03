import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';

import stylesheet from 'antd/dist/antd.min.css';
import stylesheet_pro from 'ant-design-pro/dist/ant-design-pro.min.css';

const { UserName, Password, Submit } = Login;

class LoginForm extends React.Component {
    state = {
        notice: '',
        type: 'tab32',
        autoLogin: true
    }

    onSubmit = (err, values) => {
        console.log(values)
    }

    onTabChange = key => {
        this.setState({ type: key });
    }

    changeAutoLogin = e => {
        this.setState({
            autoLogin: e.target.checked
        });
    }

    render () {
        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <style dangerouslySetInnerHTML={{ __html: stylesheet_pro }} />

                <Login
                    defaultActiveKey={this.state.type}
                    onTabChange={this.onTabChange}
                    onSubmit={this.onSubmit}
                >
                    <UserName name="username" />
                    <Password name="password" />

                    <div>
                        <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>Keep me logged in</Checkbox>
                        <a style={{ float: 'right'}} href="">Forgot Password</a>
                    </div>
                    <Submit>Login</Submit>
                </Login>
            </React.Fragment>
        )
    }
}

export default LoginForm;