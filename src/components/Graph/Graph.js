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

const Graph = ({ data1, dataName1, data2, dataName2 }) => {
  return (
    <GraphContainer>
      <h1>Graph</h1>
      {/* <ScatterChart
        width={500}
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
          dataKey="date"
          name="date"
          tickFormatter={(unixTime) => moment(unixTime).format("MMM YY")}
        />
        <YAxis type="number" dataKey="price" name="price" unit="$" />
        <ZAxis type="number" dataKey="score" name="score" range={[10, 400]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="A school" data={xrp} fill="#555555" shape="circle" />
      </ScatterChart> */}

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
        <Scatter yAxisId="left" name={dataName1} data={data1} fill="#8884d8" />
        <Scatter yAxisId="right" name={dataName2} data={data2} fill="#82ca9d" />
      </ScatterChart>
    </GraphContainer>
  );
};

export default React.memo(Graph);
