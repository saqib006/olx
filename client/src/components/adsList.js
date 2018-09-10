import React, {Component} from 'react';
import { Grid, Card, CardActions, CardHeader, CardContent, IconButton, Typography, Avatar, CardMedia} from '@material-ui/core';

import adAction from '../store/action/adAction';
import {connect} from 'react-redux';

import FavoriteIcon from '@material-ui/icons/Favorite';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';

class AdsList extends Component{
    constructor(props){
        super(props);

        console.log('ad list', props.adList)

        this.state = {
            list:[]
        }

        setTimeout(()=>{
            console.log(this.props.adList)
        },5000)
       
    }

    componentWillMount(){

        //this.props.getAds()
    }


       handler = (value) =>{
            console.log(value)

            this.props.history.replace('/viewpost')
       }


       btnHandler = (postId) => {
           console.log('key', postId)

           const userId = this.props.user.id

           let info = {
            userId:userId,
            postId:postId
           }

           this.props.saveAds(info)
       }

    render(){
      
        return(
            <div> 
                
                
            <Grid container spacing={16} direction="row" justify="center">
              
        
      {this.props.adList.map(item => (
        <Grid item xs={12} sm={4}>
                    <Card >
                    <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                        R
                        </Avatar>
                    }
                    action={
                        <IconButton>
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title={item.title}
                    subheader={'$' + item.price}
                    />
                    <CardMedia
                    image={item.image}
                    
                    title="Contemplative Reptile"
                    ><img style={{width:"100%", height:"300px"}} alt="imageds" src={item.image}/></CardMedia>
                    <CardContent>
                    <Typography component="p">
                      <b> Category: {item.category.split('_')[0]}</b> <b style={{float:'right'}}>Date: {item.createdAt.split('T')[0]}</b> 
                    </Typography>
                    
                    </CardContent>
                    <CardActions style={{textAlign:'center'}}  disableActionSpacing>
                    <IconButton onClick={()=>this.btnHandler(item._id, item.userId)}  aria-label="Add to favorites" style={{flex:1}} >
                        <FavoriteIcon />
                    </IconButton>
                    <Link style={{backgroundColor:'#F40057', color:'white', padding:10, textDecoration:'none', flex:1}} to={{pathname:'/viewpost', state: {id:item._id,image:item.image,userId:item.userId, title:item.title,model:item.model,year:item.year,price:item.price, desc:item.description, category:item.category, date:item.createdAt.split('T')[0], username:item.userName}}}> View Ad</Link>

                    

                    </CardActions>

                    </Card>

            </Grid>
          
        ))}
 


     </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user:state.adReducer.user,
        adList:state.postReducer.post
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        saveAds:(payload)=>{return dispatch(adAction.saveAds(payload))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AdsList);


