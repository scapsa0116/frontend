import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/newUser'

class SignUp extends React.Component{



    // state = {
    //     name: "",
    //     email: "",
    //     password: "",
    //     errors: {}
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData()
        formData.append('user[name]', form.name.value)
        formData.append('user[email]', form.email.value)
        formData.append('user[password]', form.password.value)

    
    
        this.props.dispatchCreateUser(formData)
        .then(userJson => {
            this.props.history.push('/')
          })
          .catch(errors => {
            this.setState({
              errors
            })
          })
        
        
       
    }
    




    render(){
        return (

            <form  onSubmit={this.handleSubmit} className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to 
                        the <a className="no-underline border-b border-grey-dark text-grey-dark text-blue-500 hover:text-red-500" href="../terms/">
                         Terms of Service and  Privacy Policy
                        </a>  
                        
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue  text-blue-600 md:text-green-600" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </form>
        )

    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUser: (formData) => dispatch(createUser(formData))
    }
  }

export default connect(null, mapDispatchToProps)(SignUp)
