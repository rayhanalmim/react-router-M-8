import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Component/Home";
import ShowDetails from "../Component/ShowDetails";
import ErrorPage from "../Component/ErrorPage";
import AppliedJobs from "../Component/AppliedJobs";

const MyCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/details/:id',
                loader: () => fetch('../Jobs.json'),
                element: <ShowDetails></ShowDetails>, 
                
            },
            {
                path:'/applied-jobs',
                loader: () => fetch('../Jobs.json'),
                element: <AppliedJobs></AppliedJobs>
            }
        ]
    }
])

export default MyCreateRoute;