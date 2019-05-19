import React, { Component } from 'react';
import { withRouter } from "react-router";
import TableContent from '../../componets/TableContent/TableContent';
import axios from 'axios';
import './TableViewPage.css';
import Search from '../../componets/Search/Search';
import Footer from '../../componets/Footer/Footer';
// import Pagination from '../Pagination/Pagination';

class TableViewPage extends Component {
    state={
        candidates:[]
    }
    componentWillMount() {
        axios.get('https://demo9197058.mockable.io/users')
            .then(response =>{
                let employe = response.data.splice(0,5);
                this.setState({candidates:employe});
            })
    }
    
    render() {
        return (
            <div className='TableView'>
                <Search/>
                <TableContent 
                    candidates={this.state.candidates}/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(TableViewPage);