import adReducer from './reducer/adReducer';
import postReducer from './reducer/postReducer';
import chatReducer from './reducer/chatReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {userEpic} from './epic/userEpic';
import {chatEpic} from './epic/chatEpic';
import {adEpic} from './epic/adEpic';


const rootReducer = combineReducers({
    adReducer,
    postReducer,
    chatReducer
})

const rootEpic = combineEpics(
    userEpic.createUser,
    userEpic.getUser,
    userEpic.checkUser,
    adEpic.adPosts,
    adEpic.getPost,
    adEpic.adCategory,
    adEpic.getCategory,
    adEpic.getUserAds,
    adEpic.saveAds,
    adEpic.getSaveAds,
    adEpic.searchAds,
    chatEpic.sendMessage,
    chatEpic.getMessage
)

const epicMiddleware = createEpicMiddleware(rootEpic)


const connectStoreMiddleware = applyMiddleware(epicMiddleware)

export let store = createStore(rootReducer, connectStoreMiddleware)


