import chatAction from '../action/chatAction';


const INITIAL_STATE = {
    user:null,
    messages:[],
    isLoad:false
}

export default function chatReducer(state = INITIAL_STATE, action){
    switch(action.type){

    case chatAction.SEND_MSG_PRO:
        return Object.assign({}, state, {isLoad:true})
    case chatAction.SEND_MSG_PRO:
        console.log('from reducer send msg', action.payload)
        return Object.assign({}, state, {isLoad:false, messages:[...state.messages, action.payload]})

    case chatAction.GET_MSG_PRO:
        return Object.assign({}, state, {isLoad:true})
    case chatAction.GET_MSG_SUC:
        console.log('from reducer get msg', action.payload)
        return Object.assign({}, state, {isLoad:false, messages:action.payload})

    default:
        return state
    }

    
}