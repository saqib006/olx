export default class userAction{
    static ADD_USER_PRO = 'ADD_USER_PRO';
    static ADD_USER_SUC = 'ADD_USER_SUC';

    static GET_USER_PRO = 'GET_USER_PRO';
    static GET_USER_SUC = 'GET_USER_SUC';

    static CHECK_USER_PRO = 'CHECK_USER_PRO';
    static CHECK_USER_SUC = 'CHECK_USER_SUC';

    static SIGNOUT_PRO = 'SIGNOUT_PRO';
    static SIGNOUT_SUC = 'SIGNOUT_SUC';

    static addUser(payload){
        return{
            type:userAction.ADD_USER_PRO,
            payload:payload
        }
    }

    static getUser(payload){
        return{
            type:userAction.GET_USER_PRO,
            payload:payload
        }
    }

    static checkUser(token){
        return{
            type:userAction.CHECK_USER_PRO,
            payload:token
        }
    }

    static signout(){
        return{
            type:userAction.SIGNOUT_PRO
        }
    }
}

