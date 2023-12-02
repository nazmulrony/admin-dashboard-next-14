"use client";
import { chartData as data } from "@/dummyData";

import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

export default function Chart() {
    return (
        <div className=" h-[450px] bg-bgSoft p-5 rounded-lg ">
            <h2 className="mb-5 font-extralight text-textSoft">Weekly Recap</h2>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                        contentStyle={{ background: "#151c2c", border: "none" }}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="visit"
                        stroke="#8884d8"
                        strokeDasharray="5 5"
                    />
                    <Line
                        type="monotone"
                        dataKey="click"
                        stroke="#82ca9d"
                        strokeDasharray="3 4 5 2"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
