import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './Components/About';
// import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import Shimmer from './Components/Shimmer';
import UserContext from './Components/UserContext';


const About=lazy(()=>import("./Components/About"))
const Contact=lazy(()=>import("./Components/Contact"))

const AppLayout=()=>{
    const [userName,setUserName]=useState()

    useEffect(()=>{
        const data={
            name:"febin Skariya"
        }
        setUserName(data.name)
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    )
}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense> 
            },
            {
                path:"/contact",
                element:<Suspense fallback={<Shimmer/>}><Contact/></Suspense> 
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
