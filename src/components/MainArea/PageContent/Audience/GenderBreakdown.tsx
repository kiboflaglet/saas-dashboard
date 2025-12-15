
import React from 'react'
import AreaLinearChart from '../_common/AreaChart'
import { MoreHorizontal } from 'lucide-react'
import { Pie, PieChart } from 'recharts'

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const GenderBreakdown = () => {
    return (
        <div className="bg-surface relative rounded-2xl w-full flex flex-col h-full  p-4 shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
            <div
                className="flex w-full flex-col h-full"
            >
                <div
                    className=" outline-none  flex flex-col gap-1 overflow-y-auto"
                >
                    <div className="flex justify-between items-center">
                        <div className="text-lg ">Gender breakdown</div>
                        <MoreHorizontal className='w-5 h-5' />
                    </div>

                </div>
            </div>
            <div className="h-full">

                <PieChart
                    width={192}
                    height={192}
                >
                    <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        fill="#82ca9d"
                        isAnimationActive
                    />
                </PieChart>
            </div>

            <div className="absolute left-1/2 top-2/7 p-4 w-full z-10">
                <div
                    className="flex w-full flex-col h-full"
                >
                    <div
                        className=" outline-none  flex flex-col gap-1 overflow-y-auto"
                    >
                        {[
                            { name: "Female", part: "61%" },
                            { name: "Male", part: "31%" },
                            { name: "Other", part: "8%" }
                        ].map(item => (
                            <div className="flex items-center ">
                                <span className="text-sm max-w-20 flex-1">{item.name}</span>
                                <span className="text-lg font-bold  ">{item.part}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default GenderBreakdown
