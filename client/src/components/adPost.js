import React, {Component} from 'react';
import {Button, Input, InputLabel, FormControl, Grid, Select, MenuItem} from '@material-ui/core';
import {connect} from 'react-redux';
import adAction from '../store/action/adAction';
import NavBar from '../container/nav';
import axios from 'axios';
class AdPost extends Component{

    constructor(props){
        super(props);

        this.state = {
            file:'',
            title:'',
            description:'',
            model:'',
            year:'',
            category:'',
            price:''
        }

        
        
    }

    componentWillMount(){
        if(!this.props.user){
            this.props.history.replace('/')
        }

        this.props.getCategory()
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
        
        const {title, file, description, model, year, category, price} = this.state;
        const userId = this.props.user.id
        const userName = this.props.user.username
        let fcm = localStorage.getItem("fcm")
        let formData = new FormData();
        formData.append('title', title)
        formData.append('selectedFile', file)
        formData.append('description', description)
        formData.append('model', model)
        formData.append('year', year)
        formData.append('category', category)
        formData.append('userId', userId)
        formData.append('userName', userName)
        formData.append('price', price) 
        formData.append('fcm', fcm)
     
       

        this.props.adPNewPost(formData)

       
    }

    render(){
        return(

            <div>
                <NavBar/>
            <Grid container direction="row" justify="center">
                <Grid item xs={12} md={6}>

            <form onSubmit={this.submitHandler} name="form" id="form">

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="title" >
            Title
            </InputLabel>
            <Input id="title" name="title" onChange={this.changeHandler}/>
            </FormControl>


            <FormControl fullWidth style={this.style.margin}>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            value={this.state.category}
            onChange={this.changeHandler}
            inputProps={{
              name: 'category',
              id: 'category',
            }}
          >
          {
              this.props.categories.map(item=>{
                  return(
                    <MenuItem key={item._id} value={item.title + '_' + item._id}>{item.title}</MenuItem>
                  )
              })
          }
            
          </Select>
        </FormControl>

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="price" >
            Price
            </InputLabel>
            <Input id="price" name="price" onChange={this.changeHandler}/>
            </FormControl>

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="description" >
            Description
            </InputLabel>
            <Input id="description" name="description" onChange={this.changeHandler}/>
            </FormControl>

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="model" >
            Model
            </InputLabel>
            <Input id="model" name="model" onChange={this.changeHandler}/>
            </FormControl>

            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="year" >
            Year
            </InputLabel>
            <Input id="year" name="year" onChange={this.changeHandler}/>
            </FormControl>


            <FormControl fullWidth style={this.style.margin}>
            <InputLabel htmlFor="file" >
            Upload Image
            </InputLabel>
            <Input id="file" type="file" name="file" onChange={this.changeHandler}/>
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
       categories:state.adReducer.categories,
       user:state.adReducer.user
    }
}


const mapDispatchToProps = (dispatch)=> {
    return{
        
        getCategory: () => {return dispatch(adAction.getCategory())},
        adPNewPost: payload => {return dispatch(adAction.addPost(payload))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdPost);
