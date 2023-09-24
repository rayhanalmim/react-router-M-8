import { useLoaderData, useParams } from "react-router-dom";
import { setItemToLS } from "../LocalServer/LocalServer";

const ShowDetails = () => {
    const datas = useLoaderData();
    const currentId = useParams();
    const idInt = parseInt(currentId.id);
    const currentData = datas.find(data => data.id === idInt);
    console.log(currentData);
    return (
        <div className="flex">
            <div className="w-4/6 bg-slate-200 h-3">

            </div>
            <div className="flex-1 bg-slate-300">
            <button onClick={() => setItemToLS(idInt)} className="btn btn-outline">Apply Now</button>
            </div>
        </div>
    );
};

export default ShowDetails;