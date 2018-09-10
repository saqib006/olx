import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import userAction from '../store/action/userAction';
class NavBar extends Component{
    constructor(props){
        super(props);

        console.log(props.user)
    }

    btnHandler = () => {

    }

    style = {
        flex:{
          flexGrow:1
        }
    }

    logout = () => {
        this.props.signout()
    }
    


   

    render(){
        const user = this.props.user;
        return(
            <AppBar position="static">
            <Toolbar>
              <IconButton  color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" style={this.style.flex}>
                OLX
              </Typography>
     
             
     
    
          <Typography variant="headline" style={{color:'white'}}>  {user? 'Welcome' + user.username :  ''}    </Typography>
          {user? <Button color="secondary" variant="text" onClick={this.logout}><Link to="/" style={{textDecoration:"none", color:"white"}}>Logout</Link></Button> :  ''} 
              
              <Button color="secondary" variant="text" ><Link to={user?'/myaccount': '/signin'} style={{textDecoration:"none", color:"white"}}>My Account</Link></Button>
              <Button color="secondary" variant="contained" ><Link to="/adpost" style={{textDecoration:"none", color:"white"}}>Post an Ad</Link></Button>
            </Toolbar>
          </AppBar>
        )
    }
}




const mapStateToProps = (state) => {
    return{
        user:state.adReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        checkUser: token =>{ return dispatch(userAction.checkUser(token))},
        signout: () => {return dispatch(userAction.signout())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);