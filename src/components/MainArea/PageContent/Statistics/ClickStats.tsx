import React from 'react'
import AreaLinearChart from '../_common/AreaChart'
import { ArrowDown, ArrowUp } from 'lucide-react'

const clickStatsData = [
  { title: "Profile visits", visits: "22.1k", increase: true },
  { title: "Link clicks", visits: "1.7k", increase: false },
  { title: "EmailButton", visits: "596", increase: true },
]


const ClickStats = () => {
  return (
    <div className="bg-surface rounded-2xl flex-1 flex flex-col  p-4 shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
      {clickStatsData.map(item => {
        return (
          <div className='flex justify-between gap-4 items-center'>

            <span className='w-20 shrink-0'>{item.title}</span>
            <div className="min-w-0 flex-1">
              <AreaLinearChart increase={item.increase}
                style={{
                  maxHeight: '37px',
                }}
              />
            </div>

            <div className='w-16 flex items-center gap-1 shrink-0'>
              <span className='font-bold'>{item.visits}</span>
              {item.increase ? (
                <ArrowUp className='w-4 h-4 text-green-400' />) : (
                <ArrowDown className='w-4 h-4 text-red-400' />
              )}
            </div>
          </div>

        )
      })}

    </div>
  )
}

export default ClickStats
