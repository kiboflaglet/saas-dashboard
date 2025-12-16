import { Bell, ChevronDown, ChevronUp, Mountain } from 'lucide-react'
import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'
import ToggleTheme from './ToggleTheme'


const UserControls = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='flex gap-4 items-center justify-between h-14'>
            <ToggleTheme />
            <Bell />
            <DropdownMenu.Root onOpenChange={setMenuOpen} modal={false} >
                <DropdownMenu.Trigger asChild>

                    <div className="p-2 bg-surface flex items-center gap-2.5 rounded-lg   justify-start cursor-pointer shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
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
                        className="min-w-55 rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                        sideOffset={5}
                    >
                        <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                            Profile{" "}
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                            Upgrade{" "}
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                            className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
                            disabled
                        >
                            Settings{" "}
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>

            </DropdownMenu.Root>
        </div>
    )
}

export default UserControls
