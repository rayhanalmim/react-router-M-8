import { Link, useLoaderData } from "react-router-dom";
import { getItemFromLocal } from "../LocalServer/LocalServer";
import { useEffect, useState } from "react";


const AppliedJobs = () => {
    const allJobsData = useLoaderData();
    const [jobsFromLS, setJobsFromLS] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    console.log(allJobsData);

    const handleFilter = (filter) =>{
        if(filter === 'all'){
            setDisplayJobs(jobsFromLS);
        }
        else if(filter === 'remote'){
            const remoteJobs = jobsFromLS.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = jobsFromLS.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const appliedId = getItemFromLocal();
        if (allJobsData.length) {
            const appliedJobsData = allJobsData.filter(data => appliedId.includes(data.id))
            setJobsFromLS(appliedJobsData);
            setDisplayJobs(appliedJobsData);
        }
    }, [allJobsData])
    console.log(jobsFromLS);

    return (
        <div>
            <h3 className="pt-5">applied jobs section: {jobsFromLS.length}</h3>
            <div className="flex justify-between">
                <div>
                    {
                        displayJobs.map((job) => <li key={job.id}>{job.job_title} - {job.remote_or_onsite}</li>)
                    }
                </div>

                <details className="dropdown mb-32">
                    <summary className="m-1 mr-10 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('all')}><a>All</a></li>
                        <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>

            </div>

        </div>
    );
};

export default AppliedJobs;