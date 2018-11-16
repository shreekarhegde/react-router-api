import React from 'react';
import axios from 'axios';
import TableForUser from './tableForUser';
import TableForTask from './tableForTask';


class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDetails: {},
            userTasks: [],
            newUserTasks: []        
        }
        this.handleChange = this.handleChange.bind(this);
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
          this.setState({
            newUserTasks: this.state.userTasks
        })
      })
    }
    
   
    handleChange(e) {
        e.persist();
        let selectedValue = e.target.value;
        this.setState({
            newUserTasks: this.state.userTasks.filter(task => task.completed.toString() === selectedValue)
        })
    }

    render(){
       
        return (
            <div>
                    { <TableForUser userDetail={this.state.userDetails}/> }
                                                <br/><div><table border='1'>
                                                                <thead>
                                                                    <tr>
                                                                    <th>
                                                                        task
                                                                    </th>
                                                                    <th>
                                                                        <span>completed</span> 
                                                                        <select onChange={this.handleChange}>
                                                                            select
                                                                            <option value="true">
                                                                                true
                                                                            </option>
                                                                            <option value="false">
                                                                                false
                                                                            </option>
                                                                        </select> 
                                                                    </th>
                                                                    </tr> 
                                                                </thead>
                                                                {this.state.newUserTasks.map((task, index) => (
                                                                <TableForTask tableContent={task} key={index} />))}
                                                        </table>
                                                    </div>
            </div>
        )
    }
}

export default Details;