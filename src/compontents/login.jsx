import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import actions from '../action/action'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            logining:false,
            username:null,
            password:null  
        }
        this.loginfunc = this.loginfunc.bind(this);
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
    }
    componentDidMount() {
        /** */
        
    }
    shouldComponentUpdate() {
        /** */
        console.log("shouldComponentUpdate")
        return false
        
    }
    componentWillReceiveProps() {
        let {status } = this.props;
        status.toJS().token && this.props.history.push(`/home/${status.toJS().token}`); 
        console.log("props componentWillReceiveProps")
    }
    loginfunc(e){
        e.preventDefault()
        this.props.actions.loginuser({"username":this.state.username,"password":this.state.password})
    }
    usernameOnChange(event){
        this.setState({
            username:event.target.value
        })
    }
    passwordOnChange(event){
        this.setState({
            password:event.target.value
        })
    }
    render(){
        return (
            <Loginbd>
                <Logincenter>
                    <Logininput > <input type="text" placeholder="USERNAME" onChange={this.usernameOnChange}/></Logininput>
                    <Logininput className="password"> <input type="password" placeholder="PASSWORD" onChange={this.passwordOnChange}/></Logininput>
                    <Loginbutton onClick={this.loginfunc}>Login</Loginbutton>
                </Logincenter>
            </Loginbd>
        )
    }
}
const Loginbd = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(./images/login/login_bg.png) no-repeat center center;
`
const Logincenter = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 252px;
    width: 428px;
    padding: 70px 66px;
    box-sizing: border-box;
    background: url(./images/login/login_title.png);
`;
const Logininput = styled.div`
    position: relative;
    input{
        height: 38px;
        line-height:38px;
        padding-left: 30px;
        width: 297px;
        margin: 0 auto;
        outline: none;
        margin-bottom: 20px;
        border: 1px solid #b7b7b7;
    }
    &:before{
        content:"";
        top: 10px;
        left: 8px;
        position:absolute;
        height: 18px;
        width: 18px;
        background: url(./images/login/user.png);
    }
    &.password:before{
        background: url(./images/login/password.png);
    }
`
const Loginbutton = styled.button`
    height: 26px;
    line-height: 24px;
    width: 80px;
    color: #fff;
    text-align:center;
    background: #000;
    border: none;
    outline: none;
    margin-left: 216px;
    &:hover{
        cursor: pointer;
    }
`
const mapStateToProps = state => ({
    status: state.loginReducer
});
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
