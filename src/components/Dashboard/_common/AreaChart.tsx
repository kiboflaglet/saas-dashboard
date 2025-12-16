import { useId, type HTMLAttributes } from "react"
import { Area, AreaChart, Tooltip, XAxis, YAxis, type TooltipProps } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import type { TooltipPayload } from "recharts/types/state/tooltipSlice"
import colors from 'tailwindcss/colors'
import { numberFormatter } from "../../../common/utilities/formatters"
import type { SeriesPoint } from "./types"

type AreaLinearChart = {
    increase: boolean
    data?: SeriesPoint[]
    labelRow?: boolean
} & HTMLAttributes<HTMLDivElement>

const AreaLinearChart = ({ style, increase, data, labelRow }: AreaLinearChart) => {

    const gradientId = useId()

    const stroke = increase ? colors.green[500] : colors.red[500]
    const fill = increase ? colors.green[400] : colors.red[400]

    return (
        <AreaChart
            style={{
                width: '100%',
                maxWidth: '700px',
                maxHeight: '37px',
                aspectRatio: 1.618,
                ...style
            }}
            responsive
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
            <defs>

                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={fill} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={fill} stopOpacity={0} />
                </linearGradient>
            </defs>

            <XAxis
                dataKey="value"
                hide
            />

            <YAxis hide />

            <Tooltip
                content={<CustomTooltip labelRow={labelRow} />}
                cursor={<CustomCursor color={fill} />}
            />

            <Area
                type="monotone"
                dataKey="value"
                stroke={stroke}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                isAnimationActive={true}
            />

        </AreaChart>
    )

}

export default AreaLinearChart

type CursorProps = {
    points?: { x: number; y: number }[];
    height?: number;
    y?: number;
    color: string;
};

const CustomCursor = ({ points, color, height = 0, y = 0 }: CursorProps) => {
    if (!points || points.length === 0) return null;

    const activePoint = points[0];
    const x = activePoint.x;

    const activeY = activePoint.y;   // active dot position
    const bottomY = y + height;      // bottom of chart

    // Safety: if something weird happens, don’t draw
    if (bottomY <= activeY) return null;

    return (
        <line
            x1={x}
            x2={x}
            y1={activeY}      // START at active dot
            y2={bottomY}      // END at bottom only
            stroke={color}
            strokeWidth={1}
            strokeDasharray="8 8"
            strokeLinecap="round"
        />
    );
};


type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
    payload?: TooltipPayload
    labelRow?: boolean

}

const CustomTooltip = ({ active, payload, labelRow }: CustomTooltipProps) => {
    if (!active || !payload?.length) return null;

    const value = payload[0].value as number;
    const label = payload[0].payload?.label as string;


    return (
        <div className="rounded-[7.55px] bg-surface p-1.25 text-center">
            <div className="opacity-50 text-xs">
                {labelRow ? label : new Date(label).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                })}
            </div>

            <div className="text-lg font-bold">
                {numberFormatter(value)}
            </div>
        </div>
    );
};