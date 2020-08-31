import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService/JeopardyService";
import Display from "../stateless-display/Stateless-Display"


class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {

            data: [],
            score: 0,
            formData: {
                answer: ""
            }

        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
        
    }
    //when the component mounts, get a the first question
    componentDidMount() {

        this.getNewQuestion();
    }
    getNewScore = (event) =>  {
        event.preventDefault()
        let score = this.state.score
        console.log(this.state.data.answer)
        console.log(this.state.formData.answer)
        if(this.state.data.answer===this.state.formData.answer){
            this.setState({
                score: score += this.state.data.value
            })
           
            

        }
        else{
            this.setState({
                score: score -= this.state.data.value
            })

        }
        this.getNewQuestion()
       
        

    }
    handleChange = (event) => {
        const formData = { ...this.state.formData }
        formData[event.target.name] = event.target.value

        this.setState({
            
            formData: {
                answer: event.target.value
            }

        })
        
    }
    //display the results on the screen


    render() {
        let category = "loading";
        
        return (
            

            <div>
                 <Display 
                 score = {this.state.score}
                 question = {this.state.data.question}
                 value = {this.state.data.value}
                 category = {this.state.data.category}
                 />
                

                <form onSubmit={this.getNewScore}>

                    <label htmlFor="">Response</label>
                    <input type="text"
                        name="Response"
                        value={this.props.Response}
                        onChange={this.handleChange}

                    />
                    <button type ='submit'  > Submit </button>

                </form>
            </div>
        
        );
    
    }
}



export default Jeopardy;