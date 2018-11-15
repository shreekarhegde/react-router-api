import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Users extends React.Component{
    constructor(){
        super();;
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({users: response.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`} key={user.id}> 
                        {user.name}
                    </Link>
                </li>))}
            </div>
        )
    }
}

export default Users;