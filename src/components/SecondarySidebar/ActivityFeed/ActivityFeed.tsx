import { Circle, Dot, Mountain } from "lucide-react"
import { Tabs } from "radix-ui"

const tabs: { name: string, key: string }[] = [
  { name: "Activity feed", key: "activity_feed" },
  { name: "Mentions", key: "mentions" },
]

type ActivityType = {
  userName: string;
  time: string;
  isActive: boolean;
  message?: string
}

const activityData: ActivityType[] = [
  {
    userName: "DercoMani",
    time: "2 mins ago",
    isActive: false,
    message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
  },
  {
    userName: "MiaMore",
    time: "9 mins ago",
    isActive: true,
    message: 'Started following you'
  },
  {
    userName: "RinaMenol",
    time: "11 mins ago",
    isActive: false,
    message: 'Started following you'
  },
  {
    userName: "IngaV",
    time: "23 mins ago",
    isActive: false,
    message: 'Started following you'
  },
  {
    userName: "DercoMani",
    time: "2 mins ago",
    isActive: false,
    message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
  },
  {
    userName: "HouseHoleJohn",
    time: "49 mins ago",
    isActive: true,
    message: 'Started following you'
  },
  {
    userName: "RinaMenol",
    time: "1h ago",
    isActive: false,
    message: 'Commented “ What airline do you always fly with? I’m a Delta man myself but you ...”'
  },
  {
    userName: "DercoMani",
    time: "2 mins ago",
    isActive: false,
    message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
  },
  {
    userName: "MiaMore",
    time: "9 mins ago",
    isActive: true,
    message: 'Started following you'
  },
  {
    userName: "RinaMenol",
    time: "11 mins ago",
    isActive: false,
    message: 'Started following you'
  },
  {
    userName: "IngaV",
    time: "23 mins ago",
    isActive: false,
    message: 'Started following you'
  },
  {
    userName: "DercoMani",
    time: "2 mins ago",
    isActive: false,
    message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
  },
  {
    userName: "HouseHoleJohn",
    time: "49 mins ago",
    isActive: true,
    message: 'Started following you'
  },
  {
    userName: "RinaMenol",
    time: "1h ago",
    isActive: false,
    message: 'Commented “ What airline do you always fly with? I’m a Delta man myself but you ...”'
  },
]

const ActivityFeed = () => {
  return (
    <div className="p-4 py-0 rounded-2xl bg-surface h-[calc(100vh-var(--padding-layout)*2-80px)] mt-6 flex flex-col shadow-[0_2px_40px_rgba(0,0,0,0.1)]">

      <Tabs.Root
        className="flex w-full flex-col h-full"
        defaultValue={tabs[0].key}
      >
        <Tabs.List
          className="flex shrink-0 "
          aria-label="Activity Feed"
        >
          {tabs.map(item => (

            <Tabs.Trigger
              className="flex h-10 text-xs  flex-1 cursor-default select-none items-center justify-center px-5 data-[state=active]:shadow-[inset_0_-0.5px_0_0] [&:not([data-state=active])]:text-gray-400 "
              value={item.key}
            >
              {item.name}
            </Tabs.Trigger>
          ))}

        </Tabs.List>
        <Tabs.Content
          className=" outline-none mt-6 flex flex-col gap-4 overflow-y-auto"
          value={tabs[0].key}
        >
          {activityData.map(item => (
            <ActivityItem
              userName={item.userName}
              time={item.time}
              isActive={item.isActive}
              message={item.message}
            />
          ))}


        </Tabs.Content>
      </Tabs.Root>

    </div>
  )
}

export default ActivityFeed

const ActivityItem = ({
  isActive = false,
  userName,
  time,
  message = ""
}: ActivityType) => {
  return (
    <div className="p-2 bg-surface flex items-start gap-2.5 rounded-lg   justify-start cursor-pointer">

      <div className="relative w-8.25 h-8.25 shrink-0 bg-red-400 rounded-lg flex items-center justify-center text-surface">
        <Mountain />

        {isActive && (<div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400" />)}
      </div>

      <div className="flex flex-col ">
        <span className='text-xs'><span className="font-bold text-sm">@{userName}</span> {time}</span>
        <span className="text-gray-500">{message}</span>
      </div>

    </div>

  )
}