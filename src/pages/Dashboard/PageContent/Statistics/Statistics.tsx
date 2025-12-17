
import React from 'react';
import { cn } from '../../../../common/utilities/cn';
import ClickStats from './ClickStats';
import NewFollowers from './NewFollowers';
import PostShares from './PostShares';
import Reach from './Reach';

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
            <div className='flex gap-6 items-stretch mt-6 '>
                <Reach />

                <div className="w-full flex flex-col gap-4 h-80">

                    <div className='flex gap-4 justify-between items-center'>
                        <PostShares />
                        <NewFollowers />
                    </div>
                    <ClickStats />
                </div>
            </div>
        </div>
    )
}

export default Statistics