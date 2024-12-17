import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

  const error = useRouteError();

  const navigate = useNavigate();

  const handleGoBack = ()=>{
    navigate(-1)
  }

  if (error.status === 404) {
    return (



      < div className="grid h-screen place-content-center bg-white px-4 " >
        <div className="text-center mb-8 ">
          <img src="src/components/images/error.jpg" alt="Error Logo" srcset="" className="h-64" />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
        </div>

       <div>
       <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <NavLink to="/">Return Home</NavLink>
          </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 " onClick={handleGoBack}>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           Return Back
          </span>
        </button>

        
       </div>

      </div >

    )
  }

}
