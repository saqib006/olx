import adAction from '../action/adAction';

const INITIAL_STATE = {
    post:[],
    userPost:[],
    saveAds:[],
    isLoad:false
}

export default function postReducer(state = INITIAL_STATE, action){
    switch(action.type){

        


        case adAction.GET_POST_PRO:
            return Object.assign({}, state, {isLoad:true})

        case adAction.GET_POST_SUC:
            console.log('from reducer get post', action.payload)
            return Object.assign({}, state, {isLoad:false, post:action.payload})

        case adAction.ADD_POST_PRO:
            return Object.assign({}, state, {isLoad:true})
        case adAction.ADD_POST_SUC:
            console.log('from reducer post suc', action.payload)
            return Object.assign({}, state, {isLoad:false, post:[...state.post, action.payload]})

        case adAction.GET_USER_POST_PRO:
            return Object.assign({}, state, {isLoad:true})

        case adAction.GET_USER_POST_SUC:
            console.log('from reducer user ads', action.payload)
            return Object.assign({}, state, {isLoad:false, userPost:action.payload})


        case adAction.SAVE_ADS_PRO:
            return Object.assign({}, state, {isLoad:true})
        case adAction.SAVE_ADS_SUC:
            console.log('from reducer save ads', action.payload)
            return Object.assign({}, state, {isLoad:false, saveAds:[...state.saveAds, action.payload]})

        case adAction.GET_SAVEADS_PRO:
            return Object.assign({}, state, {isLoad:true})
        case adAction.GET_SAVEADS_SUC:
            console.log('from reducer get save ads', action.payload)
            return Object.assign({}, state, {isLoad:false, saveAds:action.payload})
        
        default:
            return state

    }
} 