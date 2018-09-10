import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../container/nav';
import {Grid , Paper , Typography, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchAds from './searchAds';
import axios from 'axios';

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            list:[],
            title:''
        }

        setTimeout(()=>{
            console.log('search page',this.props.searchList)
        }, 1000)

    }

    searchHandler = (title) => {
        console.log('title', title)
  
    

        axios.get(`/ads/search/${title}`).then(res=>{
            this.setState({
                list:res.data
            })
            console.log(res)
        })
       // this.props.search(title)
       // this.props.history.replace('/search');
        
    }

    componentDidMount(){
        console.log('did mount',this.props.postList)
    }
    

  

    render(){
        return(
            <div>
                <NavBar/>
                <SearchAds search={this.searchHandler}/>
                <div style={{flexGrow:1}}>
                <Grid container container
  direction="row"
  justify="center"
  alignItems="center">
               

                {
                    this.state.list.map(value => {
                        return (
                
                    <Grid item xs={10} sm={10}>
                        <Paper> 

                        <Grid container direction="row" justify="center" alignItems="center">

                        <Grid item xs={4} sm={4}>
                            <img style={{width:"70%", height:"90%"}} src={value.image}/>
                         </Grid>

                        <Grid item xs={6} sm={6}>
                            <Typography variant="headline">{value.title}</Typography>
                            <Typography variant="caption">Category: {value.category.split('_')[0]}</Typography>
                            <Typography variant="caption">Date: {value.createdAt.split('T')[0]}</Typography>
                            <Typography variant="headline" style={{color:"#f40057"}}>{value.price}</Typography>
                         </Grid>
                         <Grid item xs={2} sm={2}>
                         <IconButton aria-label="Add to favorites" style={{flex:1}} >
                        <FavoriteIcon />
                    </IconButton>
                         </Grid>



                            </Grid>
                        </Paper>
                    </Grid>
                        )
                 

                })
                }
                </Grid>
               </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        searchList: state.adReducer.searchAds,
        postList:state.postReducer.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
