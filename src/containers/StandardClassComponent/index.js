import React, { Component } from 'react';

export default class StandardClassComponent extends Component
{

    constructor(){
        super();
        this.state = {
            name: ""
        };
        this.setName.bind(this);
    }

    componentWillUpdate(){
        document.title = this.state.name;
    }

    setName(name){
        this.setState({
            name: name
        });
    }

    render(){
        return (
            <>
              <h1>
                this is a standard class component using setState and other stuff
              </h1>              
              <p>
                  Give me your name <input type="text" onChange={(e) => this.setName(e.target.value) }></input>
              </p>
              <p>
                  Hello {this.state.name}!
              </p>

            </>
        )
    }
}
