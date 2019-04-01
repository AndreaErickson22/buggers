import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

var _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Andreas',
  timeout: 3000,

})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: [],


  },
  mutations: {
    setActiveBug(state, data) {
      state.activeBug = data
    },
    setBugs(state, data) {
      state.bugs = data
    },
    setNotes(state, data) {
      state.notes = data
    }
  },
  actions: {

    addBug({ commit, dispatch }, payload) {
      _sandboxApi.post('bugs', payload)
        .then(res => {
          console.log(res)
          dispatch('initialize')
        }
        )
    },

    initialize({ commit }) {
      _sandboxApi.get('bugs')
        .then(res => {
          console.log(res.data)
          commit('setBugs', res.data.results)
        })
    },
    addNote({ commit, dispatch }, payload) {
      _sandboxApi.post('bugs/' + payload.bug + '/notes', payload)
        .then(res => {
          console.log(res)
          dispatch('getNotes', payload.bug)
        }
        )
    },

    initializeNote({ commit }, id) {
      _sandboxApi.get('bugs/' + id + '/notes')
        .then(res => {
          console.log(res.data)
          commit('setNotes', res.data.results)
        })
    },
    getNotes({ commit }, id) {
      _sandboxApi.get('bugs/' + id + '/notes')
        .then(res => {
          commit('setNotes', res.data.results)
        })
    },
    getAllNotesOnRefresh({ commit, dispatch }, id) {
      _sandboxApi.get(`${id}/notes`)
        .then(res => {
          commit('addNote', res.data.results)
        })
    },

    setActiveBug({ commit, dispatch }, payload) {
      commit('setActiveBug', payload)
    },

    getActiveBug({ commit, dispatch }, payload) {
      _sandboxApi.get('bugs/' + payload)
        .then(res => {
          commit('setActiveBug', res.data.results)
        })
    },
    editBug({ commit, dispatch }, payload) {
      _sandboxApi.delete('bugs/' + payload._id, payload)
        .then(res => {
          dispatch('getBugs')
        })

    },
    closeBug({ commit, dispatch }, payload) {
      _sandboxApi.delete('bugs/' + payload)
        .then(res => {
          dispatch('initialize')
        })
    },

    deleteNote({ commit, dispatch }, payload) {
      let id = this.state.activeBug._id
      _sandboxApi.delete(`${id}/notes/${payload}`)
        .then(res => {
          dispatch('getNotes')
        })
    }

  }
})
