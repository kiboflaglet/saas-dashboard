import React from 'react'
import AreaLinearChart from '../_common/AreaChart'
import { MoreHorizontal } from 'lucide-react'

const NewFollowers = () => {
  return (
    <div className='bg-surface relative rounded-2xl h-40 w-full flex items-center justify-center shadow-[0_2px_40px_rgba(0,0,0,0.1)]'>
      <AreaLinearChart
        increase={true}
        style={{
          maxHeight: '70vh'
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
              <div className="text-xs ">New followers</div>
              <MoreHorizontal className='w-5 h-5' />
            </div>
            <div className="text-4xl font-bold mt-1 ">2.6k</div>
            <div className="text-green-500 text-xs">+8%</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFollowers
