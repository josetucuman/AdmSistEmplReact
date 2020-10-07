import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/v1.0/users'

class UserService{
    getUsers (){
        return axios.get(USERS_REST_API_URL)
    }

    crearUsuario(user){
        return axios.post(USERS_REST_API_URL, user)
    }

    getUserById(userId){
        return axios.get(USERS_REST_API_URL + '/'+userId)
    }

    actualizarUsuario(user, userId){
        return axios.put(USERS_REST_API_URL + '/' + userId, user)
    }

    borrarUsuario(userId){
        return axios.delete(USERS_REST_API_URL + '/' + userId)
    }
}

export default new UserService()