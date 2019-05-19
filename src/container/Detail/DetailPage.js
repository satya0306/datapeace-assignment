import React, { Component } from 'react';
import { withRouter } from "react-router";

class DetailPage extends Component {
    state={
        candidate: this.props.location.state.candidate
    }

        render(){
            return(
                <div>
                    <h3>{this.state.candidate.first_name} {this.state.candidate.last_name}</h3>
                    <table>
                        <tr>
                            <th>Company Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>ZIP</th>
                            <th>Email</th>
                            <th>Web</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>{this.state.candidate.company_name}</td>
                            <td>{this.state.candidate.city}</td>
                            <td>{this.state.candidate.state}</td>
                            <td>{this.state.candidate.zip}</td>
                            <td>{this.state.candidate.email}</td>
                            <td>{this.state.candidate.web}</td>
                            <td>{this.state.candidate.age}</td>
                        </tr>
                    </table>
                </div>
            )
    }    
}

export default withRouter(DetailPage);