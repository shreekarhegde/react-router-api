import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Table = (props) => (
    <table border="1">
    <thead>

    </thead>
    <tbody>
    <tr>
        <th>id</th>
        <td>{props.userDetail.id}</td>
    </tr>

    <tr>
        <th>Name</th>
        <td>{props.userDetail.name}</td>
    </tr>
        
    <tr>
      <th>Email</th>
      <td>{props.userDetail.email}</td>
    </tr>

    {/* <tr>
      <th>Address</th>
      <td>{props.userDetail.address.street}</td>
    </tr> */}

    {/* <tr>
      <th>Geo</th>
      <td>{props.userDetail.geo.lat}</td>
    </tr> */}

    <tr>
      <th>Phone</th>
      <td>{props.userDetail.phone}</td>
    </tr>
    
    <tr>
      <th>Website</th>
      <td>{props.userDetail.website}</td>
    </tr>
    </tbody>
    
</table>
)

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDetails: {},
            userTasks: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`).then((response) => {
            this.setState({
                userDetails: response.data
            })
        })
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${this.props.match.params.id}`).then((response) => {
          this.setState({
              userTasks: response.data
          })
      })
    }

    render(){
        return (
            <div>
                    { <Table userDetail={this.state.userDetails} /> }
                    <h3><span>task</span> <span>completed</span></h3>   
                    {this.state.userTasks.map(task =><div key={task.id}> <span key={task.id}>{task.title} </span><span>{ task.completed.toString()}</span></div> )}<br/>
                    <Link to={"/users"}>back</Link>
            </div>
        )
    }
}

export default Details;