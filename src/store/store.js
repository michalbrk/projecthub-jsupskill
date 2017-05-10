import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state: {
        counter: 0
    },
    getters: {
        counter (state) {
            return state.counter
        }
    },
    mutations: {
        increment(state, data) {
            state.counter += data.payload = data.dec
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {
        increment(context, data) {
            setTimeout(() => {
                context.commit('increment', data)
            }, 1000)
        },
        decrement(state) {
    
        }
    }
})