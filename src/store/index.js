import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    add(context, value) {
        if (value.complete == "true") {
            value.complete = true;
        }
        if (value.complete == "false") {
            value.complete = false;
        }
        var axios = require("axios");
        var data = JSON.stringify({
            title: value.title,
            complete: value.complete,
        });

        var config = {
            method: "post",
            url: "https://todo.theappis.fun/api/todo",
            headers: {
                "Content-Type": "application/json",
                'Token': window.sessionStorage.getItem('token'),
            },
            data: data,
        };

        axios(config)
            .then((response) => {
                if (response.status === 200) {
                    var data = response.data.data;
                    context.commit('ADD', data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    deleteTodo(context, value) {
        var id = value.id
        var axios = require("axios");
        var config = {
            method: "delete",
            url: "https://todo.theappis.fun/api/todo/" + id,
            headers: {
                'Token': window.sessionStorage.getItem('token'),
            },
        };
        axios(config)
            .then((response) => {
                if (response.data.msg === 'OK') {
                    context.commit('DELETETODO', id)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    updetaTodo(context, value) {
        var title = value.title;
        var id = value.id;
        var axios = require('axios');
        var data = JSON.stringify({
            "title": title,
        });
        var config = {
            method: 'patch',
            url: 'https://todo.theappis.fun/api/todo/' + id,
            headers: {
                'Content-Type': 'application/json',
                'Token': window.sessionStorage.getItem('token'),
            },
            data: data
        };

        axios(config)
            .then((response) => {
                if (response.data.msg === 'OK') {
                    context.commit('UPDATETODO', value)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    sureDone(context, idArry) {
        console.log("@", idArry)

        var axios = require('axios');
        var data = JSON.stringify({
            "todo_ids": idArry,
            "complete": true
        });

        var config = {
            method: 'patch',
            url: 'https://todo.theappis.fun/api/todos',
            headers: {
                'Content-Type': 'application/json',
                'Token': window.sessionStorage.getItem('token'),
            },
            data: data
        };

        axios(config)
            .then(response => {
                if (response.data.msg === 'OK') {
                    context.commit('SUREDONE')
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    deleteAllDone(context, idArry) {
        var axios = require('axios');
        var data = JSON.stringify({
            "todo_ids": idArry
        });

        var config = {
            method: 'delete',
            url: 'https://todo.theappis.fun/api/todos',
            headers: {
                'Content-Type': 'application/json',
                'Token': window.sessionStorage.getItem('token'),
            },
            data: data
        };

        axios(config)
            .then((response) => {
                if (response.data.status == 200) {
                    context.commit('DELETEALLDONE')
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    },
}
const mutations = {
    ADD(state, value) {
        state.obj.unshift(value);
        state.falseObj.unshift(value);
    },

    DELETETODO(state, id) {
        state.obj = state.obj.filter(todo => todo.id !== id)
        state.falseObj = state.falseObj.filter(todo => todo.id !== id)
    },

    UPDATETODO(state, value) {
        state.falseObj.forEach((todo) => {
            if (todo.id === value.id) todo.title = value.title
        })
        state.obj.forEach((todo) => {
            if (todo.id === value.id) todo.title = value.title
        })
    },
    SUREDONE(state) {
        state.falseObj = state.falseObj.filter(todo => todo.complete == false)
    },
    GETID(state, id) {
        state.falseObj.forEach((todo) => {
            if (todo.id === id) todo.complete = !todo.complete
        })
        state.obj.forEach((todo) => {
            if (todo.id === id) todo.complete = !todo.complete
        })
    },
    DELETEALLDONE(state) {
        state.obj = state.obj.filter(todo => todo.complete == false)
    }
}
const state = {
    userName: '',
    obj: [],
    falseObj: []
}
const getters = {
    trueObj(state) {
        return state.obj.filter((todo) => todo.complete == true)
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

