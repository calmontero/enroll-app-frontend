import React from "react";
import Typography from '@material-ui/core/Typography';
import "./Home.css";
import PieCharts from "../PieCharts/PieCharts";

function Home() {
    return (
        <div className="home-container">
        <Typography variant="h2" component="h2" gutterBottom>
          Montero School Technology
        </Typography>
        <span className="font-link">
          Learn programming with free online courses from real college. Pick up essential coding skills needed for frontend and/or backend web development, machine learning, IOS, Android, and much more.
        </span>

        <PieCharts />
      </div>
    );
}

export default Home;