export default class adAction{

    static ADD_POST_PRO = 'ADD_POST_PRO';
    static ADD_POST_SUC = 'ADD_POST_SUC';

    static GET_POST_PRO = 'GET_POST_PRO';
    static GET_POST_SUC = 'GET_POST_SUC';

    static ADD_CATEGORY_PRO = 'ADD_CATEGORY_PRO';
    static ADD_CATEGORY_SUC = 'ADD_CATEGORY_SUC';

    static GET_CATEGORY_PRO = 'GET_CATEGORY_PRO';
    static GET_CATEGORY_SUC = 'GET_CATEGORY_SUC';

    static GET_USER_POST_PRO = 'GET_USER_POST_PRO';
    static GET_USER_POST_SUC = 'GET_USER_POST_SUC';

    static SAVE_ADS_PRO = 'SAVE_ADS_PRO';
    static SAVE_ADS_SUC = 'SAVE_ADS_SUC';

    static GET_SAVEADS_PRO = 'GET_SAVEADS_PRO';
    static GET_SAVEADS_SUC = 'GET_SAVEADS_SUC';

    static GET_MESSAGE_PRO = 'GET_MESSAGE_PRO';
    static GET_MESSAGE_SUC = 'GET_MESSAGE_SUC';

    static DEL_USER_POST_PRO = 'DEL_USER_POST_PRO';
    static DEL_USER_POST_SUC = 'DEL_USER_POST_SUC';

    static DEL_SAVEADS_PRO = 'DEL_SAVEADS_PRO';
    static DEL_SAVEADS_SUC = 'DEL_SAVEADS_SUC';

    static SEARCH_ADS_PRO = 'SEARCH_ADS_PRO';
    static SEARCH_ADS_SUC = 'SEARCH_ADS_SUC';

    static addPost(payload){
        return{
            type:adAction.ADD_POST_PRO,
            payload:payload
        }
    }

    static addCategory(payload){
        return{
            type:adAction.ADD_CATEGORY_PRO,
            payload:payload
        }
    }

    static getAds(){
        return{
            type:adAction.GET_POST_PRO
        }
    }

    static getCategory(){
        return{
            type:adAction.GET_CATEGORY_PRO
        }
    }

    static getUserPost(userId){
        return{
            type:adAction.GET_USER_POST_PRO,
            payload:userId
        }
    }

    static deleteUserPost(payload){
        return{
            type:adAction.DEL_USER_POST_PRO,
            payload:payload
        }
    }

    static saveAds(payload){
        return{
            type:adAction.SAVE_ADS_PRO,
            payload:payload
        }
    }

    static getSaveAds(userId){
        return{
            type:adAction.GET_SAVEADS_PRO,
            payload:userId
        }
    }

    static deleteSaveAds(payload){
        return{
            type:adAction.DEL_SAVEADS_PRO,
            payload:payload
        }
    }

    static getMessage(payload){
        return{
            type:adAction.GET_MESSAGE_PRO,
            payload:payload
        }
    }

    static searchAds(title){
        return{
            type:adAction.SEARCH_ADS_PRO,
            payload:title
        }
    }
}