import React from 'react'
import { cn } from '../../../common/utilities/cn'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { Tabs } from 'radix-ui';
import { MoreHorizontal } from 'lucide-react';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const chartTabs: { name: string, key: string }[] = [
    { name: "Reach", key: "reach" },
    { name: "Impressions", key: "impression" },
    { name: "New followers", key: "new_followers" },
]


const Statistics = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("", className)}>
            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <span className='text-lg font-bold'>Statistics</span>
                    <span>See how your social media channels are growing and measure your success.</span>
                </div>
                <span>This month </span>
            </div>
            <div className='flex gap-6 items-stretch mt-6'>
                <div className="w-full h-80 bg-surface rounded-2xl flex items-center justify-center relative">
                    <AreaChart
                        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={data}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                        <defs>

                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#82ca9d"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                            isAnimationActive={true}
                        />

                    </AreaChart>
                    <div className="absolute top-0 px-4  w-full z-10">
                        <Tabs.Root
                            className="flex w-full flex-col h-full"
                            defaultValue={chartTabs[0].key}
                        >
                            <Tabs.List
                                className="flex  items-center"
                                aria-label="Activity Feed"
                            >
                                {chartTabs.map(item => (

                                    <Tabs.Trigger
                                        className="flex h-10 text-xs  flex-1 cursor-default select-none items-center justify-center  data-[state=active]:shadow-[inset_0_-0.5px_0_0] [&:not([data-state=active])]:text-gray-400 "
                                        value={item.key}
                                    >
                                        {item.name}
                                    </Tabs.Trigger>
                                ))}
                                <MoreHorizontal className='ml-6' />


                            </Tabs.List>
                            <Tabs.Content
                                className=" outline-none mt-6 flex flex-col gap-1 overflow-y-auto"
                                value={chartTabs[0].key}
                            >

                                <div className="text-7xl font-bold ">1.05m</div>
                                <div className="text-green-500 text-lg">+8%</div>

                            </Tabs.Content>
                        </Tabs.Root>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4 h-80">

                    <div className='flex gap-4 justify-between items-center'>
                        <div className='bg-surface rounded-2xl h-40 w-full flex items-center justify-center'>2</div>
                        <div className='bg-surface rounded-2xl h-40 w-full flex items-center justify-center'>3</div>
                    </div>
                    <div className="bg-surface rounded-2xl flex-1 flex items-center justify-center">4</div>


                </div>
            </div>
        </div>
    )
}

export default Statistics
