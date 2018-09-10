import React, {Component} from 'react';
import {Button, Input, InputLabel, FormControl, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import axios from 'axios';
import adAction from '../store/action/adAction';
class AdCategory extends Component{

    constructor(props){
        super(props);

        this.state = {
            category:'',
            
        }

        console.log('user', this.props.user)
    }

    changeHandler = eve =>{
        this.setState({
            [eve.target.name]:eve.target.value
        })


        switch (eve.target.name) {
            case 'file':
              this.setState({ file: eve.target.files[0] });
              break;
            default:
              this.setState({ [eve.target.name]: eve.target.value });
          }
    }

    

    style = {
        flex:{
          flexGrow:1
        },
        margin: {
            marginTop: 20,
          },
    }

    submitHandler = (eve) =>{
        eve.preventDefault();
      

        let category = this.state.category
       
        this.props.adCategory(category)
       
    }

    render(){
        return(

            <div>
            <Grid container direction="row" justify="center">
                <Grid item xs={12} md={6}>

            <form onSubmit={this.submitHandler} name="form" id="form">

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="title" >
            Title
            </InputLabel>
            <Input id="title" name="title" onChange={this.changeHandler}/>
            </FormControl>

           

            <div style={this.style.margin}>
                <Button variant="contained" color="secondary" type="submit">Submit</Button>
            </div>
            </form>
            </Grid>
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return{
       
    }
}


const mapDispatchToProps = (dispatch)=> {
    return{
        adCategory: payload => {return dispatch(adAction.addCategory(payload))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdCategory);
