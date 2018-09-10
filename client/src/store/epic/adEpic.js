import adAction from '../action/adAction';
import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import axios from 'axios';
import firebase from '../firebase/config';
export class adEpic{


    static getPost(action$){
        return action$.ofType(adAction.GET_POST_PRO).mergeMap(()=>{
            return ajax.get('/ads').map(res=>{
                return{
                    type:adAction.GET_POST_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }

   /* static messaging(payload){
      const messaging = firebase.messaging()
      messaging.setBackgroundMessageHandler((payload)=>{
        const title = 'hello world';
        const options = {
            body:payload
        };
        return self.showNotification(title, options)
      })
    }
    */


    static adPosts(action$){
        return action$.ofType(adAction.ADD_POST_PRO).mergeMap(({payload})=>{
           
            return ajax.post('/ads',payload).map(res=>{
                return{
                    type:adAction.ADD_POST_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }


  static adCategory(action$){
        return action$.ofType(adAction.ADD_CATEGORY_PRO).mergeMap(({payload})=>{
            return ajax.post('/category', payload).map(res=>{
                return{
                    type:adAction.ADD_CATEGORY_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }




    static getUserAds(action$){
        return action$.ofType(adAction.GET_USER_POST_PRO).mergeMap(({payload})=>{
            return ajax.get(`/ads/find/${payload}`).map(res=>{
                return{
                    type:adAction.GET_USER_POST_SUC,
                    payload:res.response
                }

               
            })
           
            })
       
    }

    static getCategory(action$){
        return action$.ofType(adAction.GET_CATEGORY_PRO).mergeMap(()=>{
            return ajax.get('/ads/category').map(res=>{
                return{
                    type:adAction.GET_CATEGORY_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }

    static saveAds(action$){
        return action$.ofType(adAction.SAVE_ADS_PRO).mergeMap(({payload})=>{
            return ajax.post('/ads/saveAds', payload).map(res=>{
                return{
                    type:adAction.SAVE_ADS_SUC,
                    payload:res.response
                }
            })
           
            })
       
    }


    static getSaveAds(action$){
        return action$.ofType(adAction.GET_SAVEADS_PRO).mergeMap(({payload})=>{
            return ajax.get(`/ads/saveAds/${payload}`).map(res=>{
                return{
                    type:adAction.GET_SAVEADS_SUC,
                    payload:res.response
                }

               
            })
           
            })
       
    }


    static searchAds(action$){
        return action$.ofType(adAction.SEARCH_ADS_PRO).mergeMap(({payload})=>{
            return ajax.get(`/ads/search/${payload}`).map(res=>{
                return{
                    type:adAction.SEARCH_ADS_SUC,
                    payload:res.response
                }

               
            })
           
            })
       
    }
}