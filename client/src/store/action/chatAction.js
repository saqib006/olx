export default class chatAction{
    static SEND_MSG_PRO = 'SEND_MSG_PRO';
    static SEND_MSG_SUC = 'SEND_MSG_SUC';

    static GET_MSG_PRO = 'GET_MSG_PRO';
    static GET_MSG_SUC = 'GET_MSG_SUC';


    static sendMsg(payload){
        return{
            type:chatAction.SEND_MSG_PRO,
            payload:payload
        }
    }

    static getMsg(userId){
        return{
            type:chatAction.GET_MSG_PRO,
            payload:userId
        }
    }
}