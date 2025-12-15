import { useId, type HTMLAttributes } from "react"
import { Area, AreaChart, Tooltip } from "recharts"
import colors from 'tailwindcss/colors'
import { data } from "./data"

type AreaLinearChart = {
    increase: boolean
} & HTMLAttributes<HTMLDivElement>

const AreaLinearChart = ({ style, increase }: AreaLinearChart) => {

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

            <Tooltip />
            <Area
                type="monotone"
                dataKey="uv"
                stroke={stroke}
                fillOpacity={1}
                fill={`url(#${gradientId})`}
                isAnimationActive={true}
            />

        </AreaChart>
    )

}

export default AreaLinearChart