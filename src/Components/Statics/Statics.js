import { useLoaderData } from "react-router-dom";
import "./Statics.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statics = () => {
  // load data from api
  let Apidata = useLoaderData();
  const mainData = Apidata.data;
  console.log(mainData);
  return (
    <div className="chart-main">
   
        <LineChart
          width={500}
          height={300}
          data={mainData}
          className="LineChart-main"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
    </div>
  );
};

export default Statics;
