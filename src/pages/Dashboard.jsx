import style from "../styles/styles.module.scss";
import BarChart from "../components/BarChart";
import { sampleData as sample } from "../data/sampleData";

const Dashboard = () => {
  //for every render it generates the random number
  //which is used for random data in barchart
  function randomIntFun() {
    return Math.floor(Math.random() * (sample.length - 0 + 1) + 0);
  }
  const randomInt = randomIntFun();

  return (
    <div className={style.dash_container}>
      <BarChart data={sample[randomInt]} />
    </div>
  );
};

export default Dashboard;
