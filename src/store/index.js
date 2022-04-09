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
            url: "https://todo.theappis.fun/todo",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then((response) => {
                if (response.status === 200) {
                    var data = response.data.data;
                    if (data.complete == true) {
                        context.commit('ADDTRUE', data)
                    } else if (data.complete == false) {
                        context.commit('ADDFALSE', data)
                    }
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
            url: "https://todo.theappis.fun/todo/" + id,
            headers: {},
        };
        axios(config)
            .then((response) => {
                if (response.data.msg === 'OK') {
                    if (value.complete == true) {
                        context.commit('DELETETRUETODO', id)
                    } else if (value.complete == false) {
                        context.commit('DELETEFALSETODO', id)
                    }
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
            url: 'https://todo.theappis.fun/todo/' + id,
            headers: {
                'Content-Type': 'application/json'
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
        var axios = require('axios');
        var data = JSON.stringify({
            "todo_ids": idArry,
            "complete": true
        });

        var config = {
            method: 'patch',
            url: 'https://todo.theappis.fun/todos',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response => {
                if (response.data.msg === 'OK') {
                    context.commit('SUREDONE', idArry)
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    getId(context, id) {
        var axios = require('axios');
        var data = JSON.stringify({
            "complete": true
        });

        var config = {
            method: 'patch',
            url: 'https://todo.theappis.fun/todo/' + id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                if (response.data.msg === 'OK') {
                    context.commit('GETIDD', id)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    deleteAllDone(context, todos) {
        var axios = require('axios');

        var config = {
            method: 'delete',
            url: 'https://todo.theappis.fun/todo/all',
            headers: {}
        };

        axios(config)
            .then((response) => {
                if (response.data.msg === 'OK') context.commit('DELETEALLDONE', todos)
            })
            .catch(function (error) {
                console.log(error);
            });
    },
}
const mutations = {
    ADDTRUE(state, value) {
        state.trueObj.unshift(value);
        state.obj.unshift(value);
    },
    ADDFALSE(state, value) {
        state.falseObj.unshift(value);
        state.obj.unshift(value);
    },
    DELETETRUETODO(state, id) {
        state.trueObj = state.trueObj.filter(todo => todo.id !== id)
        state.obj = state.obj.filter(todo => todo.id !== id)
    },
    DELETEFALSETODO(state, id) {
        state.falseObj = state.falseObj.filter(todo => todo.id !== id)
        state.obj = state.obj.filter(todo => todo.id !== id)
    },
    UPDATETODO(state, value) {
        state.falseObj.forEach((todo) => {
            if (todo.id === value.id) todo.title = value.title
        })
        state.obj.forEach((todo) => {
            if (todo.id === value.id) todo.title = value.title
        })
    },
    GETIDD(state, id) {
        var newTrueList = [];
        newTrueList = state.falseObj.filter(todo => todo.id == id)
        state.trueObj = state.trueObj.concat(newTrueList[0])
        state.falseObj = state.falseObj.filter(todo => todo.id !== id)
    },
    GETID(state, id) {
        state.falseObj.forEach((todo) => {
            if (todo.id === id) todo.complete = !todo.complete
        })
        state.obj.forEach((todo) => {
            if (todo.id === id) todo.complete = !todo.complete
        })
    },
    SUREDONE(state, idArry) {
        var newTrueList = [];
        for (let i = 0; i < idArry.length; i++) {
            newTrueList[i] = state.falseObj.filter(todo => todo.id == idArry[i])
            state.trueObj = state.trueObj.concat(newTrueList[i])
            state.falseObj = state.falseObj.filter(todo => todo.id !== idArry[i])
        }
    },
    DELETEALLDONE(state, todos) {
        state.trueObj = todos.filter(todo => todo.complete == false)
        state.obj = state.obj.filter(todo => todo.complete == false)
    }
}
const state = {
    obj: [],
    trueObj: [],
    falseObj: []
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})

