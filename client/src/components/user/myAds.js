import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHead, TableCell, TableRow, IconButton, Grid, List, ListItem, ListItemText, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, Hidden, Divider} from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class MyAds extends Component{
    constructor(props){
        super(props);

        console.log(props)
    }

    render(){
        return(
            <div>
            <Hidden only="xs">
                <TableRow style={{display:'table',width:'100%'}}>
                <TableCell>{this.props.value.title}</TableCell>
                <TableCell>{this.props.value.price}</TableCell>
                <TableCell><img width="70" height="70"  src={this.props.value.image} alt={this.props.value.title}/></TableCell>
                <TableCell>{this.props.value.createdAt.split('T')[0]}</TableCell>
                <TableCell><IconButton><DeleteForever/></IconButton></TableCell>
                </TableRow>
            </Hidden>
          
            <Hidden only={['sm', 'lg']}>
          <ExpansionPanel >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography >{this.props.value.title}</Typography>
            <Typography ></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

              <Grid container direction="row" justify="center">
        
        <Grid item xs={12} style={{ padding: 8 * 3 }}>

<img style={{width:'100%'}} height="70"  src={this.props.value.image} alt={this.props.value.title}/>
          <Divider/>
            <Typography>
           <b>Price: </b> {this.props.value.price}
            </Typography>
            

            <Typography>
            <b>Date: </b> {this.props.value.createdAt.split('T')[0]}
            </Typography>
            <Typography>  <b>Delete: </b>  <IconButton><DeleteForever/></IconButton> </Typography>

        </Grid>
        </Grid>
          
          </ExpansionPanelDetails>
        </ExpansionPanel>
       </Hidden>
        </div>
               
        )
    }
}


const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAds);