import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Page from './Page';
import './index.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage: 'home'
        }
    }

    handleChange(page){
        this.setState({currentPage: page}); 
    }

    static defaultProps = {
            brand: 'ReactStrap',
            heading: 'Waddup, world?',
            text: 'This is just a short sentence that has to be here, so that it does not look empty.'
    }

    render(){
        var jumbotron;
        if(this.state.currentPage == 'home'){
            jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text} />
        } else {
            jumbotron = '';
        }
        return (
            <div>
                <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange.bind(this)} />              
                {jumbotron}
                <Page currentPage={this.state.currentPage} />
            </div>
        )
    }
}

export default App;