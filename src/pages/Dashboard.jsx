import DStyle from "../styles/DashboardStyles.module.scss";

import BarChart from "../components/BarChart";
import { sampleData as sample } from "../data/sampleData";

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
