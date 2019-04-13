import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Homepage.css';

class Homepage extends Component {
    handleAddClick = () => {
        console.log("redirecting");
        // return <Redirect to="SearchDrug"/>;
        return <Redirect to="/SearchPage" />
    };

    render() {
        return (
        <div>
                <button onClick={this.handleAddClick}> Add </button>
                <br/>
                <button> Past submission </button>
                <button> Past submission </button>                
                <button> Past submission </button>
        </div>
        );
    }
}

export default Homepage;
