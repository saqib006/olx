import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../container/nav';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForever from '@material-ui/icons/DeleteForever';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import adAction from '../store/action/adAction';
import {Table, TableBody, TableHead, TableCell, TableRow, IconButton, Hidden} from '@material-ui/core';
import SaveAds from './user/saveAds';
import MyAds from './user/myAds';
import axios from 'axios';
import Messages from './user/messages';
import chatAction from '../store/action/chatAction';



class MyAccount extends Component{
    constructor(props){
        super(props);

        console.log('account',props)

        this.state = {
            value: 0,
          };
          
          
     
            console.log('user ads', this.props.adsList)
  
          setTimeout(()=>{
            console.log('save ads', this.props.saveAds)
          },2000)
    }


   
    
      handleChange = (event, value) => {
        this.setState({ value });
      };

    componentWillMount(){


        if(this.props.user === null){
            this.props.history.replace('/signin')
        }
        else {
          const userId = this.props.user.id
          this.props.getUserAds(userId)
          this.props.getSaveAds(userId)

          

          
          
        }
        
    }

     TabContainer(props) {
        return (
          <Grid container direction="row" justify="center">
        
          <Grid item xs={12} sm={12} style={{ padding: 8 * 3 }}>
            {props.children}
          </Grid>
          </Grid>
          
        );
      }

    render(){

   

        const { value } = this.state;
        const TabContainer = this.TabContainer
        return(
            <div>
            <NavBar/>       

            <Grid container direction="row" justify="center">
              <Grid item xs={12} sm={12}>
              
             

                 <Tabs  fullWidth
         value={this.state.value}
         onChange={this.handleChange}
         centered
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Ad Listings" icon={<PhoneIcon />} />
            <Tab label="Saved Ads" icon={<FavoriteIcon />} />
            <Tab label="Messages" icon={<PersonPinIcon />} />
           
          </Tabs>

          </Grid>
            </Grid>

        {value === 0 && <TabContainer>
  
         
          <Hidden only="xs">

   
     <TableHead style={{display:'table', width:'100%'}}>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Image</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Action</TableCell>
            
          </TableRow>
          </TableHead>
     
      </Hidden>

        {this.props.adsList.map(value=>{
          return <MyAds value={value} id={value._id}/>
        })}
              
           
       
  
   
  
        </TabContainer>}


        {value === 1 && <TabContainer>
          
          <Hidden only="xs">

   
<TableHead style={{display:'table', width:'100%'}}>
     <TableRow>
       <TableCell >Title</TableCell>
       <TableCell >Price</TableCell>
       <TableCell >Image</TableCell>
       <TableCell >Date</TableCell>
       <TableCell >Action</TableCell>
       
     </TableRow>
     </TableHead>

 </Hidden>
          
 {this.props.saveAds.map(value=>{
          return <SaveAds value={value} id={value._id}/>
        })}
          
          </TabContainer>}
        {value === 2 && <TabContainer><Messages/></TabContainer> }


        
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        adsList:state.postReducer.userPost,
        saveAds:state.postReducer.saveAds
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      getUserAds: userId => {return dispatch(adAction.getUserPost(userId))},
      getSaveAds: userId => {return dispatch(adAction.getSaveAds(userId))},
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);