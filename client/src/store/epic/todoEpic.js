import todoAction from '../action/todoAction';
import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';


export class todoEpic {

    


    static getTodo(action$){
        return action$.ofType(todoAction.GET_TODO_PRO).mergeMap(()=>{
             return ajax.getJSON('/api/post').map((res)=>{
                return{
                    type:todoAction.GET_TODO_SUC,
                    payload:res
                }
                
            })
        })
    }

    static addTodo(action$){
        return action$.ofType(todoAction.ADD_TODO_PRO).mergeMap(({payload})=>{
            return ajax.post('/api/post',payload).map(res=>{
                return{
                    type:todoAction.ADD_TODO_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }

    static delTodo(action$){
        return action$.ofType(todoAction.DEL_TODO_PRO).switchMap(({payload})=>{
            return ajax.delete(`http://localhost:5000/api/post/${payload}`).map(res=>{
                return{
                    type:todoAction.DEL_TODO_SUC,
                    payload:payload
                }
            })
           
            })
       
    }
    
    
}

