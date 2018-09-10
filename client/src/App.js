import React, { Component } from 'react';
import {FormControl, Input, InputAdornment, Grid, } from '@material-ui/core';
import Location from '@material-ui/icons/LocationOn';
import SearchAds from './components/searchAds';
import NavBar from './container/nav';
import {connect} from 'react-redux';
import adAction from './store/action/adAction';
import AdsList from './components/adsList';

class App extends Component {

  
  constructor(props){
    super(props);

    this.state = {
      list:[]
    }

    console.log( 'list', this.state.list)

    //const userId = this.props.user.id
           // this.props.getUserAds(userId)
    //console.log('from route else',userId)
    
  }

  style = {
      flex:{
        flexGrow:1
      }
  }

  
  searchHandler = (title) => {
      console.log('title', title)

      this.props.search(title)
      this.props.history.replace('/search');
  }

   

  render() {



    return (
      <div className="App" style={this.style.flex}>
        <NavBar />

      <div style={{marginTop:20}}>
      <Grid container direction="row" justify="center" spacing={40}>
      
      <Grid item xs={12} md={6}>
          <FormControl fullWidth >
       
       <Input onChange={this.changeHandler}
         startAdornment={
           <InputAdornment position="start">
             <Location />
           </InputAdornment>
         }
      placeholder="All Pakistan" />
     </FormControl>
     </Grid>


      <Grid item xs={12} md={6} >
       

      <SearchAds search={this.searchHandler}/>

  </Grid>
  
</Grid>
         </div>

         <div>

        <AdsList/>


         </div>
      

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      search: title => {return dispatch(adAction.searchAds(title))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
