import { Bell, ChevronDown, ChevronUp, Moon, Mountain } from 'lucide-react'
import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'


const UserControls = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='flex gap-4 items-center justify-between h-14'>
            <Moon />
            <Bell />
            <DropdownMenu.Root onOpenChange={setMenuOpen} modal={false} >
                <DropdownMenu.Trigger asChild>

                    <div className="p-2 bg-surface flex items-center gap-2.5 rounded-lg border  justify-start cursor-pointer">
                        <div className='w-8.25 h-8.25 bg-red-400 rounded-lg justify-center flex items-center text-surface'>
                            <Mountain />
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>Welcome back,</span>
                            <span className='text-[17px]'>Khalaf Nasirov</span>
                        </div>
                        {menuOpen ? <ChevronUp /> : <ChevronDown />}
                    </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal >
                    <DropdownMenu.Content
                        align={"end"}
                        className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                        sideOffset={5}
                    >
                        <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                            New Tab{" "}
                            <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                                ⌘+T
                            </div>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                            New Window{" "}
                            <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                                ⌘+N
                            </div>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
                            disabled
                        >
                            New Private Window{" "}
                            <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                                ⇧+⌘+N
                            </div>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>

            </DropdownMenu.Root>
        </div>
    )
}

export default UserControls
