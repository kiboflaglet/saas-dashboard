import { MoreHorizontal } from 'lucide-react'
import { cn } from '../../../../common/utilities/cn'
import AreaLinearChart from '../../_common/AreaChart'
import { postSharesData } from '../../_common/dashboardData'

const PostShares = () => {
    return (
        <div className='bg-surface relative rounded-2xl h-auto w-full flex items-center justify-center shadow-[0_2px_40px_rgba(0,0,0,0.1)]'>
            <AreaLinearChart
                increase={postSharesData.summary.increase}
                data={postSharesData.series}
                style={{
                    maxHeight: 'auto',
                    height: "100%"
                }}
            />
            <div className="absolute top-0 p-4 w-full z-10">
                <div
                    className="flex w-full flex-col h-full"
                >
                    <div
                        className=" outline-none  flex flex-col gap-1 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center">
                            <div className="text-xs ">Post shares</div>
                            <MoreHorizontal className='w-5 h-5' />
                        </div>
                        <div className="text-4xl font-bold mt-1 ">{postSharesData.summary.current}</div>
                        <div className={cn("text-xs",
                            postSharesData.summary.increase ? "text-green-500" : "text-red-500"
                        )}>{postSharesData.summary.increase ? "+" : "-"}{postSharesData.summary.changePercent}%</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostShares
