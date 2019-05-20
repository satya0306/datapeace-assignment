import React, { Component } from 'react';
import { withRouter } from "react-router";
// import TableContent from '../../componets/TableContent/TableContent';
import axios from 'axios';
import './TableViewPage.css';
import Search from '../Search/Search';
// import Footer from '../../componets/Footer/Footer';
import Pagination from '../Pagination/Pagination';
// import Pagination from '../Pagination/Pagination';

class TableViewPage extends Component {
    state = {
        candidates:[],
        currentPage: 1,
        pagPerPage: 20
    }
    componentWillMount() {
        axios.get('https://demo9197058.mockable.io/users')
            .then(response =>{
                let employe = response.data;
                this.setState({candidates:employe});
            })
    }
    handleClick=(event)=> {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        let tableContent = null;
        let pagination = null;

        if(this.state.candidates){
            // tableContent = (<TableContent candidates={this.state.candidates}/>);
            pagination = (<Pagination candidates={this.state.candidates}
                                      currentPage = {this.state.currentPage} 
                                      pagPerPage = {this.state.pagPerPage}
                                      handleClick = {this.handleClick}/>);
        }
        return (
            <div className='TableView'>
                <Search candidates={this.state.candidates}/>
                {tableContent}
                {pagination}
            </div>
        );
    }
}

export default withRouter(TableViewPage);