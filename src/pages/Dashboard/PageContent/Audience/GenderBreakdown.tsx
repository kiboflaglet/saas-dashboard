
import { MoreHorizontal } from 'lucide-react';
import { Cell, Pie, PieChart, Tooltip, type TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { TooltipPayload } from 'recharts/types/state/tooltipSlice';
import { numberFormatter } from '../../../../common/utilities/formatters';
import { genderBreakdownData } from '../../_common/data';


const COLORS = [
    "#52D1DC", // slate-800
    "#FF312E", // slate-700
    "#FAB2EA", // slate-600
]
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
                    <Tooltip content={<CustomTooltip />} />
                    <Pie
                        data={genderBreakdownData.series}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        isAnimationActive
                        cornerRadius={10}
                        paddingAngle={5}
                        stroke='none'
                    >
                        {genderBreakdownData.series.map((_, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

            <div className="absolute left-1/2 top-2/7 p-4 w-full z-10">
                <div
                    className="flex w-full flex-col h-full"
                >
                    <div
                        className=" outline-none  flex flex-col gap-1 overflow-y-auto"
                    >
                        {genderBreakdownData.series.map(item => (
                            <div className="flex items-center ">
                                <span className="text-sm max-w-20 flex-1">{item.label}</span>
                                <span className="text-lg font-bold  ">{item.value}%</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default GenderBreakdown

type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
    payload?: TooltipPayload
}


const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (!active || !payload?.length) return null
    const value = payload[0].value as number
    const label = payload[0].payload.label as string
    return (
        <div className="rounded-[7.55px] bg-surface p-1.25 text-center">
            <div className="opacity-50 text-xs">
                {label}

            </div>

            <div className="text-lg font-bold">
                {numberFormatter(value)}
            </div>
        </div>
    )

}