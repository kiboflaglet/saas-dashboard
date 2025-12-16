import { MoreHorizontal } from 'lucide-react';
import { Tabs } from 'radix-ui';
import { useState } from 'react';
import { cn } from '../../../../common/utilities/cn';
import { numberFormatter } from '../../../../common/utilities/formatters';
import AreaLinearChart from '../../_common/AreaChart';
import { impressionsData, newFollowersData, reachData } from '../../_common/dashboardData';

const chartTabs: { name: string, key: string }[] = [
    { name: "Reach", key: "reach" },
    { name: "Impressions", key: "impressions" },
    { name: "New followers", key: "new_followers" },
]

const Reach = () => {
    const [currentTab, setCurrentTab] = useState(chartTabs[0].key)
    const [currentData, setCurrentData] = useState<(typeof reachData)>(reachData)
    return (
        <div className="w-full h-auto  bg-surface rounded-2xl flex items-center justify-center relative shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
            <AreaLinearChart
                data={currentData.series}
                increase={currentData.summary.increase}
                style={{
                    maxHeight: 'auto',
                    height: "100%"
                }}
            />
            <div className="absolute top-0 px-4 py-2 w-full z-10">
                <Tabs.Root
                    className="flex w-full flex-col h-full"
                    defaultValue={currentTab}
                    onValueChange={(item) => {
                        switch (item) {
                            case "reach":
                                setCurrentTab(item)
                                setCurrentData(reachData)
                                break;
                            case "impressions":
                                setCurrentTab(item)
                                setCurrentData(impressionsData)
                                break;
                            case "new_followers":
                                setCurrentTab(item)
                                setCurrentData(newFollowersData)
                                break;
                            default:
                                break;
                        }
                    }}
                >
                    <Tabs.List
                        className="flex  items-center"
                        aria-label="Activity Feed"
                    >
                        {chartTabs.map(item => (

                            <Tabs.Trigger
                                className="flex h-10 text-xs   flex-1 cursor-default select-none items-center justify-center  data-[state=active]:shadow-[inset_0_-0.5px_0_0] [&:not([data-state=active])]:text-gray-400 "
                                value={item.key}
                            >
                                <span className='dark:text-shadow-[0_0px_3px_rgba(0,0,0,1)]'>{item.name}</span>
                            </Tabs.Trigger>
                        ))}
                        <MoreHorizontal className='ml-6' />


                    </Tabs.List>
                    {chartTabs.map(item => (

                        <Tabs.Content
                            className=" outline-none mt-6 flex flex-col gap-1 overflow-y-auto"
                            value={item.key}
                        >

                            <div className="text-7xl font-bold ">{numberFormatter(currentData.summary.current)}</div>
                            <div className={cn("text-lg",
                                currentData.summary.increase ? "text-green-500" : "text-red-500"
                            )}>{currentData.summary.increase ? "+" : "-"}{currentData.summary.changePercent}%</div>

                        </Tabs.Content>
                    ))}

                </Tabs.Root>
            </div>
        </div>
    )
}

export default Reach
