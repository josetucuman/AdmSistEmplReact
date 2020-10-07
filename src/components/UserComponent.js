import React, { Component } from 'react'
import UserService from '../service/UserService'

export default class UserComponent extends Component {

    constructor(props){
        super (props)
        this.state = {
            users: []
        }
        this.borrarUsuario = this.borrarUsuario.bind(this)
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({
                users: response.data
            })
        })
    }
    
    borrarUsuario(userId){
        UserService.borrarUsuario(userId).then((response) => {
            this.setState({users : this.state.users.filter(user => user.id !== userId)})
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Lista de Usuarios</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id Usuario</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Id Mail</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user =>
                                    <tr key = {user.id}>
                                        <td> {user.id}</td>   
                                        <td> {user.firstName}</td>   
                                        <td> {user.lastName}</td>   
                                        <td> {user.email}</td>  
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
