import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Authenticated({ children, auth }) {
    return (
        <>
            <div className="max-w-screen mx-auto hidden lg:block">
                {/* START: SIDEBAR */}
                <Sidebar auth={auth} />
                {/* END: SIDEBAR */}

                {/* START: CONTENT */}
                <div className="ml-[300px] px-[50px]">
                    <div className="flex flex-col gap-[50px] py-10">
                        {/* START: TOPBAR */}
                        <Topbar name={auth.user.name} />
                        {/* END: TOPBAR */}
                        <main>{children}</main>
                    </div>
                </div>

                {/* END: CONTENT */}
            </div>
            <div className="mx-auto flex h-screen w-full bg-black px-4 lg:hidden">
                <div className="my-auto text-center text-2xl font-medium leading-snug text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
