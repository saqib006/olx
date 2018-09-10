export default class todoAction {
    static ADD_TODO_PRO = 'ADD_TODO_PRO';
    static ADD_TODO_SUC = 'ADD_TODO_SUC';

    static DEL_TODO_PRO = 'DEL_TODO_PRO';
    static DEL_TODO_SUC = 'DEL_TODO_SUC';
    
    static GET_TODO_PRO = 'GET_TODO_PRO';
    static GET_TODO_SUC = 'GET_TODO_SUC';
    static GET_TODO_REJ = 'GET_TODO_REJ';


    static UPDATE_TODO_PRO = 'UPDATE_TODO_PRO';
    static UPDATE_TODO_SUC = 'UPDATE_TODO_SUC';


    static addTodo(payload){
        return{
            type:todoAction.ADD_TODO_PRO,
            payload:payload
        }
    }

    static delTodo(id){
        return{
            type:todoAction.DEL_TODO_PRO,
            payload:id
        }
    }

    static updateTodo(id,text){
        return{
            type:todoAction.UPDATE_TODO_PRO,
            payload:{id:id, text:text}
        }
    }
    static getTodo(){
        return{
            type:todoAction.GET_TODO_PRO
        }
    }
}