//import axios from "axios"

const state = {
    todos: [
        {
            id: 1,
            title: "Todo 1"
        },
        {
            id: 2,
            title: "Todo 2"
        }
    ],
    // example: [
    //     {
    //         id: 3,
    //         title: "Todo 3"
    //     },
    //     {
    //         id: 4,
    //         title: "Todo 4"
    //     }
    // ]
};

const getters = {
    // allExample: function (state) {
    //     return state.allExample
    // },
    allTodos: function (state) {
        return state.todos
    }

};

const mutations = {};

export default {
    state,
    getters,
    mutations
}
