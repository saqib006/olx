import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../container/nav';
import {Grid, Card, CardContent, Typography, Button ,Table, TableBody, TableCell, TableRow, TableHead, Drawer ,Input, FormControl, InputLabel } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import chatAction from '../store/action/chatAction';



class SingleAd extends Component{
    constructor(props){
        super(props);

        console.log('signle ad', props)
    }

    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        msg:''
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };


      changeHandler = (eve) => {
        this.setState({
          [eve.target.name]:eve.target.value
        })
      }

      msgHandler = () => {
        const user = this.props.user.id
        

        const {userId, id, title, username} = this.props.location.state

        let obj = {
          userId:user,
          sendTo:username + '_' + userId,
          postId:title + '_' + id,
          text:this.state.msg
        }

        this.props.sendMsg(obj)
       


        console.log(obj)
      }


    render(){
        return(
            <div>

            <NavBar/>





<Drawer 
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div 
            tabIndex={0}
            role="button"
            
          >
           
            <FormControl>
              <InputLabel>Send Message</InputLabel>
              <Input name="msg" value={this.state.msg} onChange={this.changeHandler}/>
            </FormControl>
            <Button onClick={this.msgHandler} variant="contained" color="secondary">Send Message</Button>

          </div>
        </Drawer>


            <Grid container direction="row" justify="center">
            
            <Grid item xs={12} sm={8}>
            
            <Card>
                
            <img style={{width:'100%',height:"500px"}} alt="hello" src={this.props.location.state.image} />

        <CardContent style={{backgroundColor:'#F1F5FC'}}>
          
        <Table >
        <TableHead>
          <TableRow>
            <TableCell numeric>Category</TableCell>
            <TableCell numeric>Model</TableCell>
            <TableCell numeric>Year</TableCell>
            <TableCell numeric>Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        
        
              <TableRow  >
                
                <TableCell numeric>{this.props.location.state.category.split('_')[0]}</TableCell>
                <TableCell numeric>{this.props.location.state.model}</TableCell>
                <TableCell numeric>{this.props.location.state.year}</TableCell>
                <TableCell numeric>{this.props.location.state.date}</TableCell>
              </TableRow>
           
        </TableBody>
      </Table>

        <div style={{padding:20}}>
        <Typography variant="headline" >Description</Typography>
      <Typography variant="caption" >{this.props.location.state.desc}</Typography>
      </div>
        </CardContent>
       
            </Card>
            

            </Grid>
            
            <Grid item xs={12} sm={4}>

                <div style={{backgroundColor:"#F50057"}}>
                <Typography variant="headline" style={{color:'white', textAlign:'center',padding:10}}> {'$' + this.props.location.state.price}</Typography>
                    
                </div>
                <div style={{backgroundColor:'#F1F5FC', textAlign:'center', padding:20}}>
                <Typography variant="headline" style={{color:'black',padding:10}}> <AccountCircle/> {this.props.location.state.username}</Typography>
             {this.props.user ? <Button variant="contained" color="secondary" onClick={this.toggleDrawer('bottom', true)}>Send Message</Button>:<Button variant="contained" color="secondary" onClick={()=>this.props.history.replace('/signin')}>Login To Chat</Button>}   
                </div>




                
                <div style={{backgroundColor:'#F1F5FC', paddingLeft:30, color:'black',padding:30}}>
                <Typography variant="subheading" >1 Meet seller at a safe location</Typography>
                <Typography variant="subheading" >2 Check the item before you buy</Typography>
                <Typography variant="subheading" >3 Pay only after collecting item</Typography>

                </div>
            </Grid>
            </Grid>


            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
          user:state.adReducer.user,
          
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendMsg: payload => {return dispatch(chatAction.sendMsg(payload))},
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleAd);