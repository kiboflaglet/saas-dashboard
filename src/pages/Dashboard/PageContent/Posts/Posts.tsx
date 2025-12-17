import { Bookmark, Heart, MessageCircle, MoreHorizontal } from 'lucide-react'
import { Tabs } from 'radix-ui'
import { type HTMLAttributes } from 'react'
import { cn } from '../../../../common/utilities/cn'
import { posts } from '../../_common/data'
import { format } from 'date-fns'

const chartTabs: { name: string, key: string }[] = [
    { name: "Latest posts", key: "latest_posts" },
    { name: "Scheduled posts", key: "scheduled_posts" },
]

const Posts = ({ className }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn(className)}>

            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <span className='text-lg font-bold'>Posts</span>
                    <span>Overview of your published and scheduled posts</span>
                </div>
            </div>

            <div className={cn("w-full h-120 bg-surface rounded-2xl flex items-center justify-center px-4 pt-2 mt-4 shadow-[0_2px_40px_rgba(0,0,0,0.1)] ")} >



                <Tabs.Root
                    className="flex w-full flex-col h-full "
                    defaultValue={chartTabs[0].key}
                >
                    <Tabs.List
                        className="flex  items-center "
                        aria-label="Activity Feed"
                    >
                        {chartTabs.map(item => (

                            <Tabs.Trigger
                                className="flex h-10 text-xs  flex-1 cursor-default select-none items-center justify-center  data-[state=active]:shadow-[inset_0_-0.5px_0_0] [&:not([data-state=active])]:text-gray-400 "
                                value={item.key}
                            >
                                {item.name}
                            </Tabs.Trigger>
                        ))}
                        <MoreHorizontal className='ml-6' />


                    </Tabs.List>
                    <Tabs.Content
                        className=" outline-none mt-6 flex flex-col  gap-6 overflow-y-auto"
                        value={chartTabs[0].key}
                    >
                        {posts.map(item => (
                            <div className="flex justify-start gap-4">
                                <div className='flex items-center'>
                                    <span className="[writing-mode:vertical-rl] rotate-180 text-xs">
                                        {format(new Date(item.createdAt), "MMMM d")}
                                    </span>
                                    <div className="rounded-3xl w-25 h-25 ml-2 bg-green-400"></div>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-lg'>@{item.username}</span>
                                    <p>{item.body.slice(0, 60)}...</p>
                                    <div className="flex items-center gap-6">
                                        <div className='flex items-center gap-1'> <Heart className='w-4 h-4' />{item.likes} </div>
                                        <div className='flex items-center gap-1'> <MessageCircle className='w-4 h-4' />{item.comments} </div>
                                        <div className='flex items-center gap-1'> <Bookmark className='w-4 h-4' />{item.saves} </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Tabs.Content>
                </Tabs.Root>
            </div >
        </div>

    )
}

export default Posts
