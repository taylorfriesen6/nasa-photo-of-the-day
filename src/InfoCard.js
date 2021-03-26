import React from "react";

function InfoCard({data}) {
    return (
        <div className="InfoCard">
            <h2>{data.title}</h2>
            <img src={data.url} alt={data.title} />
            <p>{data.copyright}, {data.date}</p>
            <p>{data.explanation}</p>
        </div>
    )
}

export default InfoCard;