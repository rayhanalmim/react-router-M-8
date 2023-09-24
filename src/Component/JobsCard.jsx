import { useEffect, useState } from "react";
import ShowCard from "./showCard";

const JobsCard = () => {
    const [cardData, setCardData] = useState([]);
    const [showCardQuantity, setShowCardQuantity] = useState(4);
    useEffect(() => {
        fetch('Jobs.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, []);

    const handleClick = (data) => {
        setShowCardQuantity(data.length)
    }

    return (
        <div>
            <div className="grid grid-cols-2 justify-between py-6 gap-x-10 gap-4">
                {
                    cardData.slice(0, showCardQuantity).map(data => <ShowCard key={data.id} data={data}></ShowCard>)
                }
            </div>
            <div className={showCardQuantity === cardData.length ? "hidden" : "flex justify-center py-4"}>
                <button onClick={() => handleClick(cardData)} className="btn btn-active btn-neutral">Show All</button>
            </div>
        </div>
    );
};

export default JobsCard;