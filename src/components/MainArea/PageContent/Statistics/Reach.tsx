import React from 'react'
import { Tabs } from 'radix-ui';
import AreaLinearChart from '../_common/AreaChart';
import { MoreHorizontal } from 'lucide-react';

const chartTabs: { name: string, key: string }[] = [
    { name: "Reach", key: "reach" },
    { name: "Impressions", key: "impression" },
    { name: "New followers", key: "new_followers" },
]

const Reach = () => {
    return (
        <div className="w-full h-auto  bg-surface rounded-2xl flex items-center justify-center relative shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
            <AreaLinearChart
                increase={true}
                style={{
                    maxHeight: 'auto',
                    height: "100%"
                }}
            />
            <div className="absolute top-0 px-4 py-2 w-full z-10">
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
    )
}

export default Reach
