import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component} from 'react';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import AdPost from './components/adPost';
import App from './App'
import SingleAd from './components/singleAd';
import MyAccount from './components/account';
import {connect} from 'react-redux';
import userAction from './store/action/userAction';
import adAction from './store/action/adAction';
import {Observable} from 'rxjs';
import Search from './components/search';
import {initializePush} from './store/firebase/db';
import axios from 'axios';
class Routing extends Component{

    constructor(props){

        super(props);
        
        

    const verifyUsers = new Observable((observer)=>{
        if(!this.props.user){

            let token = {
                token:localStorage.getItem("token")
              }
            if (localStorage.getItem("token") === null ){
                console.log('no token')
            }
           
            else{
                observer.next(token)
                observer.next(this.props.checkUser(token))
                initializePush()
               // const userId = this.props.user.id
                //console.log('user user ', userId)
            }
           
           
            
        }
    })

    verifyUsers.subscribe(value => console.log('from observer',value))




    

        

}
    componentWillMount(){
        
        this.props.getAds()
        
    }

    componentDidMount(){
      //  this.props.getAds()
     //   this.props.getCategory()

     setTimeout(()=>{
       
     
      
            if(this.props.user){
                let fcm = {
                    fcm:localStorage.getItem("fcm"),
                    userId:this.props.user.id
                }

                if(localStorage.getItem("fcm") === null){
                    console.log('fcm not found')
                }
           
                else{
                    console.log('fcm found')
                   axios.post('/ads/fcm', fcm).then(res=>{
                       console.log('axios', res)
                   })
                }
            }
        },2000)
     

    }

    componentWillUpdate(){
        console.log('will')
    }
    render(){
        const user = this.props.user
        return(
        <Router>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route  path="/signin" component={SignIn}></Route>
                <Route  path="/signup" component={SignUp}></Route>
                <Route  path="/adpost" component={AdPost}></Route>
                <Route  path="/viewpost" component={SingleAd}></Route>
                <Route  path="/search" component={Search}></Route>
             {user?<Route  path="/myaccount" render={(props)=>(<MyAccount {...props} user={user}/>)} ></Route>:''}

            </div>
        </Router>
       
        )
    }
}



const mapStateToProps = (state) => {
    return{
        user:state.adReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        checkUser: token =>{ return dispatch(userAction.checkUser(token))},
        getUserAds: userId => {return dispatch(adAction.getUserPost(userId))},
        getAds: ()=> { return dispatch(adAction.getAds())}
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routing);