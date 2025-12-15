import { Calendar, ChartLine, Dot, LayoutDashboard, LogOut, MessageCircle, Wallet } from "lucide-react";
import { cn } from "../../common/utilities/cn";
import type { HTMLAttributes } from "react";

type MenuItem = {
    title: string
    icon: React.ElementType
    pathName: string
}

const menuList: MenuItem[] = [
    { title: "Dashboard", icon: LayoutDashboard, pathName: "/dashboard" },
    { title: "Calendar", icon: Calendar, pathName: "/calendar" },
    { title: "Analytics", icon: ChartLine, pathName: "/analytics" },
    { title: "Wallet", icon: Wallet, pathName: "/wallet" },
    { title: "Chat", icon: MessageCircle, pathName: "/chat" },
]

const currentPage = "/calendar"


const PrimarySidebar = ({ className }: HTMLAttributes<HTMLDivElement>) => {


    return (
        <div className={cn("rounded-2xl bg-surface   h-[calc(100vh-var(--padding-layout)*2)]  w-60 p-6 flex flex-col shadow-[0_2px_40px_rgba(0,0,0,0.1)] ", className)} >

            <div className="flex flex-col flex-1">
                <div>
                    <div className="text-2xl">My Design</div>

                    <div className="mt-12 flex flex-col gap-2.5">
                        {menuList.map(item => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.title}
                                    className={cn(
                                        "flex items-center py-1.5 justify-between",
                                        currentPage === item.pathName && "font-bold"
                                    )}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-5 h-5" />
                                        <span className="text-lg">{item.title}</span>
                                    </div>
                                    {currentPage === item.pathName && <Dot />}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="flex justify-between text-[17px]  ">
                <span>Logout</span>
                <LogOut />
            </div>

        </div>
    )
}

export default PrimarySidebar
