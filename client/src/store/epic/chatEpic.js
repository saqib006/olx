import {Observable} from 'rxjs';
import chatAction from '../action/chatAction';
import {sendMsg, getMsg} from '../firebase/db';

export class chatEpic{

    static sendMessage(action$){
        return action$.ofType(chatAction.SEND_MSG_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(sendMsg(payload)).map(obj=>{
                return{
                    type:chatAction.SEND_MSG_SUC,
                    payload:obj
                }
            })
        })
    }

    static getMessage(action$){
        return action$.ofType(chatAction.GET_MSG_PRO).switchMap(({payload})=>{
            return Observable.fromPromise(getMsg(payload)).map(obj=>{
                return{
                    type:chatAction.GET_MSG_SUC,
                    payload:obj
                }
            })
        })
    }
}