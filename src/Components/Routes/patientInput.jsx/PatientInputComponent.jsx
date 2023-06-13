import React, { Component } from 'react'
import axios from 'axios';

class PatientInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          age: '',
        //   sex:'',
        //   medicalhistory:''
        };
      }
      NameChangeHandler = event =>{
        this.setState ({
            name :event.target.value
        })
      }
      AgeChangeHandler = event =>{
        this.setState ({
            age:event.target.value
        })
      }
      formSubmitEventHandler = event =>{
        event.preventDefault()
        alert (`${this.state.NameOfStudent} ${this.state.AgeOfStudent}`)
             event.preventDefault();
            console.log(this.state)
            {
              axios
              .post('http:localhost:3500/api/v1/patient',this.state)
              .then(response => {
                  console.log(response)
              })
              .catch(error => {
                     console.log(error)
                    })
          }
        
      }
  render() {
    const {name, age} = this.state
    return (
        <form onSubmit={this.handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-4">
          <span className="text-black">Name:</span>
          <input
            type="text"
            value={name}
            onChange={this.NameChangeHandler}
            name="name"
            className="mt-1 block w-full border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block mb-4">
          <span className="text-black">Age:</span>
          <input
            value={age} onChange={this.AgeChangeHandler}
            className="mt-1 block w-full border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    )
  }
}

export default PatientInputComponent