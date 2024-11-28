import { useRef, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Topbar({ name }) {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdwon = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove('hidden');
        } else {
            dropdownTarget.current.classList.add('hidden');
        }
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="flex cursor-pointer items-center justify-between">
                <input
                    type="text"
                    className="top-search"
                    placeholder="Search movie, cast, genre"
                    style={{
                        backgroundImage: 'url("/icons/ic_search.svg")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 20px center',
                        backgroundSize: '20px',
                        paddingRight: '40px',
                    }}
                />
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-black">
                        Welcome, {name}
                    </span>
                    {/* user avatar */}
                    <div className="collapsible-dropdown relative flex flex-col gap-2">
                        <div
                            className="outline-gray-2 dropdown-button w-[60px] rounded-full p-[5px] outline outline-2"
                            onClick={triggerDropdwon}
                        >
                            <img
                                src="/images/avatar.png"
                                className="w-full rounded-full object-cover"
                                alt=""
                            />
                        </div>
                        <div
                            className="absolute right-0 top-[80px] z-[999] flex hidden min-w-[180px] flex-col gap-1 overflow-hidden rounded-2xl bg-white font-medium text-black"
                            ref={dropdownTarget}
                        >
                            <a
                                href="#!"
                                className="p-4 transition-all hover:bg-sky-100"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#!"
                                className="p-4 transition-all hover:bg-sky-100"
                            >
                                Settings
                            </a>
                            <Link
                                href={route('logout')}
                                method='post'
                                className="p-4 transition-all hover:bg-sky-100"
                            >
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
