import React from "react";
import './ProgramsCard.css';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ImClock, ImSphere } from "react-icons/im";
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function ProgramsCard({ programs }) {
    const {id, name, summary, duration, rating, image_url} = programs;

    return (
        <div className= "program-card">
            <div className="flex-child magenta" key={id} >
                <img
                    className="program-img"
                    src={image_url}
                    alt={name}
                    onError={(event) => event.target.style.display = 'none'}
                    style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
                />
            </div>
            <div className="flex-child1 green">
                <Typography variant="h4" color="primary" >
                        {name}
                </Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={rating} readOnly />
                </Box>
                <Typography variant="h5">
                    {summary}
                </Typography>
                <br/>
                <h5><ImClock /> Approx. {duration} to complete</h5>
                <h5><ImSphere /> 100% online</h5>
                <Link to={`/programs/${id}`}>
                    <Button type="submit"variant="outlined" color="primary">Enroll</Button>
                </Link>
            </div>
        </div>
    )
}

export default ProgramsCard;