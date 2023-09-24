import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const ShowCard = ({ data }) => {

    // , remote_or_onsite, company_name, job_type, salary, location
    const {id, logo, job_title} = data;

    return (
        <div className="border-2 p-4 border-r-1 bg-base-100 space-y-3">
            <figure><img className='h-[50px] w-[140px] object-fill' src={logo}/></figure>
            <div className="">
                <h2 className="card-title">{job_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="pt-3">
                    <Link to={`/details/${id}`}><button className="btn btn-outline btn-success">View details</button></Link>
                </div>
            </div>
        </div>
    );
};
ShowCard.propTypes = {
    data: PropTypes.object,
};
export default ShowCard;