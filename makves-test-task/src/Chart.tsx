import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = function Chart() {
  function getZScore(
    arr: typeof data,
    dataKey: Extract<keyof (typeof data)[number], "uv" | "pv">
  ) {
    const len = arr.length;
    const mean =
      arr.reduce((mean, obj) => {
        return (mean += obj[dataKey]);
      }, 0) / len;
    const dev =
      arr.reduce((dev, obj) => {
        return (dev += Math.pow(obj[dataKey] - mean, 2));
      }, 0) /
      (len - 1);
    const sd = Math.sqrt(dev);
    const res = data.reduce((acc, cur) => {
      const zs = (cur[dataKey] - mean) / sd;
      return acc.concat(zs);
    }, [] as number[]);
    return res;
  }

  const zscorePV = getZScore(data, "pv");
  const zscoreUV = getZScore(data, "uv");
  type MyData = (typeof data)[number] & { zscorePV: number; zscoreUV: number };

  const updatedData: MyData[] = data.map((data, i) => {
    return {
      ...data,
      zscorePV: zscorePV[i] > 1 ? data.pv : 0,
      zscoreUV: zscoreUV[i] > 1 ? data.uv : 0,
    };
  });
  const gradientOffset = (dataKey: "uv" | "pv") => {
    const dataMax = Math.max(...data.map((i) => i[dataKey]));
    const dataMin = Math.min(...data.map((i) => i[dataKey]));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };
  const offPV = gradientOffset("pv");

  return (
    <>
      <h2 style={{ margin: "0 0 20px" }}>
        The z-scores were calculated for pv property only.
      </h2>
      <ResponsiveContainer
        width={700}
        height="30%"
        minHeight={"40vh"}
        minWidth={"320px"}
        maxHeight={500}
      >
        <ComposedChart
          width={500}
          height={300}
          data={updatedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="splitColorPV" x1="0" y1="0" x2="0" y2="1">
              <stop offset={offPV} stopColor="red" stopOpacity={1} />
              <stop offset={offPV} stopColor="green" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Area
            type="monotone"
            dataKey="zscorePV"
            stroke="red"
            fill="url(#splitColorPV)"
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
