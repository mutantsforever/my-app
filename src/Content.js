import React, { Component } from 'react';
import { TableRow } from 'material-ui';

class content extends Component {
    constructor(){
    super();
        this.state = {
            data : 
                [
                    {
                        "id":1,
                        "name":"Rohit",
                        "gender": "M"
                    },
                    {
                        "id":2,
                        "name":"Sneha",
                        "gender": "F"
                    },
                    {
                        "id":3,
                        "name":"Panda",
                        "gender": "F"
                    }
                ]
        }
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        {this.state.data.map((person, i) => <TableRow key = {i} 
                        data = {person}/>)}
                    </tr>
                </table>
            </div>
        );
    }

    render(){
        return(
            <div>
            {this.props.data.id}
            {this.props.data.name}
            {this.props.data.gender}
            </div>
        );
    }
}

export default content;