import userAction from '../action/userAction';
import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

export class userEpic{
    
    static createUser(action$){
        return action$.ofType(userAction.ADD_USER_PRO).mergeMap(({payload})=>{
            return ajax.post('/user',payload).map(res=>{
                return{
                    type:userAction.ADD_USER_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }

    static getUser(action$){
        return action$.ofType(userAction.GET_USER_PRO).mergeMap(({payload})=>{
            return ajax.post('/user/signin', payload).map(res=>{
                return{
                    type:userAction.GET_USER_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }


    static checkUser(action$){
        return action$.ofType(userAction.CHECK_USER_PRO).mergeMap(({payload})=>{
            return ajax.post('/user/session', payload).map(res=>{
                console.log('from epic', res)
                return{
                    type:userAction.CHECK_USER_SUC,
                    payload:res.response.userInfo
                }
            })
           
            })
       
    }


    
}