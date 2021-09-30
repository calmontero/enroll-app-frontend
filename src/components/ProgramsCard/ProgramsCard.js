import React from "react";
import './ProgramsCard.css';
import { Link } from 'react-router-dom';

function ProgramsCard({ programs }) {
    const {id, name, summary, hours, image} = programs;

    return (
        <div className= "program-card">
            
            <img
                className="program-img"
                src={image}
                alt={name}
                onError={(event) => event.target.style.display = 'none'}
                style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
            />
            <h2>
                <Link to={`/programs/${id}`}>{name}</Link>
            </h2>
            <h3>Summary: {summary}</h3>
        </div>
    )
}

export default ProgramsCard;