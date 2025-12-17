import { ArrowDown, ArrowUp } from 'lucide-react'
import { numberFormatter } from '../../../../common/utilities/formatters'
import { emailButtonData, linkClicksData, profileVisitsData } from '../../_common/data'
import AreaLinearChart from '../../_common/AreaChart'

const clickStatsData = [
  { title: "Profile visits", visits: "22.1k", data: profileVisitsData },
  { title: "Link clicks", visits: "1.7k", data: linkClicksData },
  { title: "EmailButton", visits: "596", data: emailButtonData },
]


const ClickStats = () => {
  return (
    <div className="bg-surface rounded-2xl flex-1 flex flex-col h-auto  p-4 shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
      {clickStatsData.map(item => {
        return (
          <div className='flex justify-between gap-4 items-center'>

            <span className='w-20 shrink-0'>{item.title}</span>
            <div className="min-w-0 flex-1">
              <AreaLinearChart
                data={item.data.series}
                increase={item.data.summary.increase}
                style={{
                  maxHeight: 'auto',
                  height: "50px"
                }}
              />
            </div>

            <div className='w-16 flex items-center gap-1 shrink-0'>
              <span className='font-bold'>{numberFormatter(item.data.summary.current)}</span>
              {item.data.summary.increase ? (
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
