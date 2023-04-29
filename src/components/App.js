import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,//variable needed to be changed
            posi : 0,
            ballPosition: { left: "px" }
        };
        this.renderChoice = this.renderChoice.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
	this.handleListener=this.handleListener.bind(this)
	 this.move=this.move.bind(this)
    };
    //call back function
    buttonClickHandler() {
        this.setState({...this.state,renderBall: true})
        this.renderChoice()
   }
    renderChoice() {
		if(this.state.renderBall){return <div className="ball" style={this.state.ballPosition}></div>}
		 else   return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
    }

    //bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown",this.handleListener);
        return () => document.removeEventListener("keydown",this.handleListener);
    }
    handleListener(event){
   
        switch(event.keyCode){
            
            case 39 :
                this.move(5);

            break;
          
        };
    }
    move(l){
        this.setState({
            ...this.state, posi : this.state.posi+5,
            ballPosition: { left:  this.state.posi+5+"px"}
        })
    }

    render() {
        return (
            <div className="playground">
                {this.renderChoice()}
            </div>
        )
    }
}


export default App;
