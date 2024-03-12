import { createStore } from "vuex";

const store = createStore({
    namespaced:true,
    state(){
        return{
            count:0,
            countOfAccounts:0
        }
    },
    mutations:{
        increase(state){
            state.count++
        },
        increaseAccounts(state){
            state.countOfAccounts++
        }
    }
})

export default store;