import { Tabs } from 'radix-ui'
import { siFacebook, siInstagram, siX, siYoutube, type SimpleIcon } from 'simple-icons'

type NavItem = {
    title: string
    icon?: SimpleIcon
    key: string
}

const navigationItems: NavItem[] = [
    { title: "All Channels", key: "all_channels" },
    { title: "Instagram", icon: siInstagram, key: "instagram" },
    { title: "Facebook", icon: siFacebook, key: "facebook" },
    { title: "YouTube", icon: siYoutube, key: "youtube" },
    { title: "X (Twitter)", icon: siX, key: "twitter" },
]

const TopNavigation = () => {
    return (
        <Tabs.Root
            defaultValue={navigationItems[0].key}
        >
            <Tabs.List
                className="flex gap-8 items-center shrink-0 "
                aria-label="Top navigation"
            >

                {navigationItems.map(item => {
                    return (
                        <Tabs.Trigger
                            value={item.key}
                            className="flex h-10 cursor-button select-none items-center justify-center gap-2  data-[state=active]:shadow-[inset_0_-0.5px_0_0] [&:not([data-state=active])]:text-gray-400 ">
                            {item.icon && (
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-3 h-4 fill-current"
                                    aria-hidden
                                >
                                    <path d={item.icon.path} />
                                </svg>
                            )} {item.title}
                        </Tabs.Trigger>
                    )
                })}

            </Tabs.List>
        </Tabs.Root>
    )
}

export default TopNavigation
