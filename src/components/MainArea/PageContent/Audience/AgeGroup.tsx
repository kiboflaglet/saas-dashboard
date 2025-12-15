import { MoreHorizontal } from 'lucide-react'
import AreaLinearChart from '../_common/AreaChart'

const AgeGroup = () => {
    return (
        <div className='bg-surface relative h-auto rounded-2xl w-full flex items-center justify-center shadow-[0_2px_40px_rgba(0,0,0,0.1)]'>
            <AreaLinearChart
                increase={true}
                style={{
                    maxHeight: 'auto',
                    height: "20vh"
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
                            <div className="text-lg ">Age group</div>
                            <MoreHorizontal className='w-5 h-5' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgeGroup
