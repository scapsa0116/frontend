import React from 'react';



const LogIn =({handleLoginFormChange, handleLoginFormSubmit, name, email, password}) => {

    


    
        return(
           
            <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log In</h1>

                 <form onSubmit={handleLoginFormSubmit}>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        onChange={handleLoginFormChange}
                        value={name}
                        placeholder="name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={handleLoginFormChange}
                        value={email}
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={handleLoginFormChange}
                        value={password}
                        placeholder="Password" />
                    

                    <button
                        type="submit"
                        value="Login"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    </form>
                </div>

            </div>
        </div>
          
        )
    }


export default LogIn 