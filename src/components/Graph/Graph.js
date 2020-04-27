import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
} from "recharts";
import { GraphContainer } from "./Graph.styles";

const Graph = ({ data1, name1, data2, name2 }) => {
  const scoreAverage1 =
    data1.map((data) => data.score).reduce((a, score) => a + score) /
    data1.length;
  const scoreAverage2 =
    data2.map((data) => data.score).reduce((a, score) => a + score) /
    data2.length;

  return (
    <GraphContainer>
      <h1>Compare currencies</h1>
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
          stroke="#B868D9"
        />
        <YAxis
          type="number"
          dataKey="price"
          name="Price"
          unit="USD"
          yAxisId="right"
          orientation="right"
          stroke="#6ac6ef"
        />
        <ZAxis
          type="number"
          dataKey="ratio"
          name="Low/High Ratio"
          range={[10, 200]}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <ReferenceLine
          x={scoreAverage1}
          yAxisId="left"
          stroke="#B868D9"
          strokeDasharray="3 3"
        />
        <ReferenceLine
          x={scoreAverage2}
          yAxisId="right"
          stroke="#6ac6ef"
          strokeDasharray="3 3"
        />
        {/* <ReferenceLine x={10} stroke="red" /> */}
        <Scatter yAxisId="left" name={name1} data={data1} fill="#da81ff" />
        <Scatter yAxisId="right" name={name2} data={data2} fill="#6ac6ef" />
        <Legend />
      </ScatterChart>
    </GraphContainer>
  );
};

export default React.memo(Graph);
