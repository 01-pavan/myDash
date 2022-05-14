import DStyle from "../styles/DashboardStyles.module.scss";
import * as d3 from "d3";
import BarChart from "../components/BarChart";
import { sampleData as sample, employees } from "../data/sampleData";
import { useEffect } from "react";

const Dashboard = () => {
  function randomIntFun() {
    return Math.floor(Math.random() * (1 - 0 + 1) + 0);
  }
  const randomInt = randomIntFun();

  return (
    <div className={DStyle.container}>
      <BarChart data={sample[randomInt]} />
    </div>
  );
};

export default Dashboard;
