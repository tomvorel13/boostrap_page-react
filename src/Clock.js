import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);


    }

    render(){
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();

        return(
            <div className="dateTime">{datetime}</div>
        ) 
    }
}

export default Clock;