import { type HTMLAttributes } from 'react'
import { cn } from '../../../../common/utilities/cn'
import AgeGroup from './AgeGroup'
import GenderBreakdown from './GenderBreakdown'


const Audience = ({ className }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(className)}>

            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <span className='text-lg font-bold'>Audience</span>
                    <span>See how your audience breaks down.</span>
                </div>
            </div>
            <div className="flex flex-col mt-4 gap-4">
                <AgeGroup />
                <GenderBreakdown />
            </div>

        </div>

    )
}

export default Audience
