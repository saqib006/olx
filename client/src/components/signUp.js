import React, {Component} from 'react';
import {Button, Input, InputLabel, FormControl, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import userAction from '../store/action/userAction';
import NavBar from '../container/nav';
class SignUp extends Component{

    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            pass:''
        }

        console.log('user', this.props.user)
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
            username:this.state.name,
            email:this.state.email,
            password:this.state.pass
        }

        this.props.addUser(userInfo)

        this.setState({
            username:'',
            email:'',
            password:''
        })

        this.props.history.replace('/signin')
        console.log(userInfo)
    }

    render(){
        return(
            <div>
                 <NavBar />
            <Grid container direction="row" justify="center">
                <Grid item xs={12} md={6}>
                <div style={{backgroundColor:'#d8d8d8', padding:30,marginTop:100}}>
            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="name" >
            User Name
            </InputLabel>
            <Input id="name"  name="name" onChange={this.changeHandler}/>
            </FormControl>
                
            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="email">
            Email
            </InputLabel>
            <Input id="email" type="email" name="email" onChange={this.changeHandler}/>
            </FormControl>

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="pass">
            Password
            </InputLabel>
            <Input id="pass" type="password" name="pass" onChange={this.changeHandler}/>
            </FormControl>

            <div style={this.style.margin}>
                <Button variant="contained" color="secondary" onClick={this.submitHandler}>SignUp</Button>
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
        addUser: payload => {return dispatch(userAction.addUser(payload))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);