import React, {Component} from 'react';
import {connect} from 'react-redux';
import chatAction from '../../store/action/chatAction';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Person from '@material-ui/icons/Person';
import Forum from '@material-ui/icons/Forum';
import Message from '@material-ui/icons/Message';

class Messages extends Component{
    constructor(props){
        super(props);

        this.state = {
            expanded: null,
        }

        setTimeout(()=>{
            console.log('messages',props)
        },2000)
    }


    componentWillMount(){
        const userId = this.props.user.id
        this.props.getMessage(userId)
    }

  
    render(){

       
        return(
            <div style={{width:'100%'}}>

             {
                            this.props.messages.map(value=>{
                                return(

            <ExpansionPanel >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography ><IconButton><Person/></IconButton>{value.sendTo.split('_')[0]}</Typography>
            <Typography ><IconButton><Forum/></IconButton>{value.postId.split('_')[0]}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
           <IconButton><Message/></IconButton> {value.text}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

            )
            })
            }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        user:state.adReducer.user,
        messages:state.chatReducer.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getMessage:userId => {return dispatch(chatAction.getMsg(userId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);