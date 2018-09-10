import React, {Component} from 'react'
import Downshift from 'downshift'
import {MenuItem, Input, FormControl, InputAdornment} from '@material-ui/core';
import adAction from '../store/action/adAction';
import {connect} from 'react-redux';
import Search from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import axios from 'axios';
const items = [
  {id: 1, value: 'honda'},
  {id: 2,value: 'pear'},
  {id: 3,value: 'orange'},
  {id: 4,value: 'grape'},
  {id: 5,value: 'banana'},
]

class SearchAds extends Component{



constructor(props){
  super(props);

  this.state = {
    searchList:[]
  }


  setTimeout(() => {
    console.log('search list',this.state.searchList)
  }, 3000);

}

componentDidMount(){



  this.props.postList.map(item => {
  
    this.setState({
      searchList:item
    })

  })

  console.log('search list',this.state.searchList)
  
}


  changeHandler = (selection) => {
    this.props.search(selection.value)
    
  }


  render(){
    return(

 
  <Downshift 
    onChange={this.changeHandler}
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div >
        <FormControl fullWidth>
        
        <Input {...getInputProps()} id="ads" startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
       placeholder="Search Ads"/>
        <div style={{zIndex:1200}} {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <MenuItem 
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : null,
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </MenuItem>
                ))
            : null}
        </div>
        </FormControl>
      </div>
    )}
  </Downshift>
   )
  }
}

const mapStateToProps = (state) => {
  return{
      postList:state.postReducer.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAds)