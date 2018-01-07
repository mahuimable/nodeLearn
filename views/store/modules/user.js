const state = {
    id: '',
    name: '',
    password: '',
    gender: '',
    avator: '',
    bio: ''
}

const mutations = {
    initUser(state, register) {
        state.id = register.id
        state.name = register.name
        state.password = register.password
        state.gender = register.gender
        state.avator = register.avator
        state.bio = register.bio
    }
}

export default {
    namespaced: true,
    state,
    mutations
}