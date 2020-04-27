import React from "react";
import moment from "moment";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { GraphContainer } from "./Graph.styles";

const Graph = ({ data1, name1, data2, name2 }) => {
  return (
    <GraphContainer>
      <h1>Graph</h1>
      <ScatterChart
        width={700}
        height={500}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          domain={["auto", "auto"]}
          dataKey="score"
          name="Google Trend Score"
        />
        <YAxis
          type="number"
          dataKey="price"
          name="Price"
          unit="USD"
          yAxisId="left"
          stroke="#8884d8"
        />
        <YAxis
          type="number"
          dataKey="price"
          name="Price"
          unit="USD"
          yAxisId="right"
          orientation="right"
          stroke="#82ca9d"
        />
        <ZAxis type="number" dataKey="ratio" name="Ratio" range={[10, 200]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter yAxisId="left" name={name1} data={data1} fill="#8884d8" />
        <Scatter yAxisId="right" name={name2} data={data2} fill="#82ca9d" />
      </ScatterChart>
    </GraphContainer>
  );
};

export default React.memo(Graph);
