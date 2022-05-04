import React from "react";


// custom component 
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

// okta utils 
import {CreateOktaUser} from '../../OktaUtils/OktaUtils'


// do we need state here? probably, eh? 
export default class SignUp extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }


    handleChange = event =>{
        const {name, value} = event.target; 
        this.setState( { [name]: value } );
    };

    handleSubmit = event => {
        event.preventDefault()
        //console.log("register form submitted")
        // create a new user in Okta ...
        CreateOktaUser({
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password,
        })
    }


    render(){
        return(
        <div>
        
        <h2>I don't have an account</h2>

        <form onSubmit={this.handleSubmit}> 
            <FormInput autoComplete ="first name" label="First Name" handleChange={this.handleChange} name = "first_name" value={this.state.first_name} required />
            <FormInput autoComplete ="last name" label="Last Name" handleChange={this.handleChange} name = "last_name" value={this.state.last_name} required />
            <FormInput autoComplete ="email" label="email" handleChange={this.handleChange} name = "email" value={this.state.email} required />
            <FormInput autoComplete ="password" label="password" handleChange={this.handleChange} name = "password" value={this.state.password} required />

            <CustomButton type="submit" value="Submit Form">Register</CustomButton>
        </form>
        </div>
        )

    }

}
