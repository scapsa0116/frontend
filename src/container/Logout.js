import React from 'react';



const Logout =({ logout }) => {

    
        return(
           
            <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Are You Sure?</h1>

                 <form onSubmit={logout}>
                    <button
                        type="submit"
                        value="Logout"
                        className="w-full text-center py-3 inline-block bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded"
                    >Logout</button>
                    </form>
                </div>

            </div>
        </div>
          
        )
    }


export default Logout 