import React from 'react';



const LogIn =({handleLoginFormChange, handleLoginFormSubmit, name, email, password}) => {
console.log(handleLoginFormChange, handleLoginFormSubmit, name, email, password)
    
        return(
           
            <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                  
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
                        className="w-full text-center py-3 rounded h-10 px-5 m-2 duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700 text-purple-100"
                    >Log In</button>
                    
                    </form>
                 

             
                </div>

            </div>

           
        </div>
          
        )
    }


export default LogIn 