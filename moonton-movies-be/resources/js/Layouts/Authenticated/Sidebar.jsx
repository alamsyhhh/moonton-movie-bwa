import SubscriptionDetail from './SubscriptionDetail';
import MenuItem from './MenuItem';
import { UserMenu, UserOthers } from './MenuList';

export default function Sidebar({ auth }) {
    // console.log(auth);
    return (
        <>
            <aside className="fixed z-50 h-full w-[300px]">
                <div className="border-gray-[#F1F1F1] flex h-full flex-col overflow-y-auto border-r p-[30px] pr-0">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links mt-[60px] flex h-full flex-col gap-[50px]">
                        {/* Menu */}
                        <div>
                            <div className="mb-4 text-sm text-gray-1">Menu</div>
                            {UserMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                />
                            ))}
                        </div>
                        {/* ./Menu */}
                        {/* Others */}
                        <div>
                            <div className="side-link mb-4 text-gray-1">
                                Others
                            </div>
                            {UserOthers.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                    method={menu.method}
                                />
                            ))}
                        </div>
                        {auth.activePlan ? (
                            <SubscriptionDetail
                                name={auth.activePlan.name}
                                isPremium={auth.activePlan.name === 'Premium'}
                                remainingActiveDays={
                                    auth.activePlan.remainingActiveDays
                                }
                                activeDays={auth.activePlan.activeDays}
                            />
                        ) : (
                            <div className="text-gray-400">
                                No active subscription
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
