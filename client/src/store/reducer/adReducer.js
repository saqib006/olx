import userAction from '../action/userAction';
import adAction from '../action/adAction';
import firebase from '../firebase/config';
const INITIAL_STATE = {
    user:null,
    categories:[],
    searchAds:[],
    isLoad:false
}

export default function adReducer(state = INITIAL_STATE, action){
    switch(action.type){

        // user section

        case userAction.ADD_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case userAction.ADD_USER_SUC:
            console.log('from reducer', action.payload)
            return Object.assign({}, state, {isLoad:false, user:action.payload})

        case userAction.GET_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case userAction.GET_USER_SUC:
            console.log('from reducer', action.payload)
            localStorage.setItem("token", action.payload.token)
            return Object.assign({}, state, {isLoad:false, user:action.payload.userInfo})

        case userAction.SIGNOUT_PRO:
            localStorage.removeItem("token")
            let fcm = localStorage.getItem("fcm")
            const messaging = firebase.messaging();
            messaging.deleteToken(fcm)
            localStorage.removeItem("fcm")
            return Object.assign({}, state, {isLoad:false, user:null})
        case userAction.SIGNOUT_SUC:
            return Object.assign({}, state, {isLoad:false, user:null})

        case userAction.CHECK_USER_PRO:
            return Object.assign({}, state, {isLoad:true})
        case userAction.CHECK_USER_SUC:
            console.log('check user', action.payload)
            return Object.assign({}, state, {isLoad:false, user:action.payload})


        // category section

        case adAction.ADD_CATEGORY_PRO:
             return Object.assign({}, state, {isLoad:true})

        case adAction.ADD_CATEGORY_SUC:
            console.log('from reducer', action.payload)
            return Object.assign({}, state, {isLoad:false, categories:[...state.categories, action.payload]})

        case adAction.GET_CATEGORY_PRO:
            return Object.assign({}, state, {isLoad:true})

        case adAction.GET_CATEGORY_SUC:
            console.log('from reducer', action.payload)
            return Object.assign({}, state, {isLoad:false, categories:action.payload})

        case adAction.SEARCH_ADS_PRO:
            return Object.assign({}, state, {isLoad:true})

        case adAction.SEARCH_ADS_SUC:
            console.log('search ads', action.payload)
            return Object.assign({}, state, {isLoad:false, searchAds:action.payload})
      

        default:
            return state

    }
} 