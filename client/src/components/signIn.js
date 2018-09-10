import React, {Component} from 'react';
import {Button, Input, InputLabel, FormControl, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import userAction from '../store/action/userAction';
import NavBar from '../container/nav';
class SignIn extends Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            pass:''
        }

        console.log('user', this.props.user)
    }

    componentWillMount(){
        if(this.props.user){
            this.props.history.replace('/')
        }
    }

    changeHandler = eve =>{
        this.setState({
            [eve.target.name]:eve.target.value
        })
    }

    style = {
        flex:{
          flexGrow:1
        },
        margin: {
            marginTop: 20,
          },
    }

    submitHandler = () =>{
        let userInfo = {
            email:this.state.email,
            password:this.state.pass
        }

        this.props.signIn(userInfo)

        console.log('user Info', userInfo)

        this.setState({
            email:'',
            password:''
        })
        this.props.history.replace('/')
    }

    render(){
        return(

            <div >

            <NavBar />
            <Grid container direction="row" justify="center">
                <Grid item xs={12} md={6}>
                
                <div style={{backgroundColor:'#d8d8d8', padding:30,marginTop:100}}>
            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="email">
            Email
            </InputLabel>
            <Input id="email" name="email" onChange={this.changeHandler}/>
            </FormControl>

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="pass" >
            Password
            </InputLabel>
            <Input id="pass" type="password" name="pass" onChange={this.changeHandler}/>
            </FormControl>

            <div style={this.style.margin}>
                <Button variant="contained" color="secondary" onClick={this.submitHandler}>SignIn</Button>
                <Button variant="contained" color="primary" onClick={()=> this.props.history.replace("/signup")}>Register</Button>
            </div>
                </div>
            </Grid>
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return{
        user:state.adReducer.user
    }
}


const mapDispatchToProps = (dispatch)=> {
    return{
        signIn: payload => {return dispatch(userAction.getUser(payload))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
