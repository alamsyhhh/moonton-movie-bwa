import { Link } from '@inertiajs/react';
import ReactPlayer from 'react-player';

export default function Show() {
    return (
        <>
            <section
                className="watching-page relative mx-auto h-screen w-screen bg-form-bg font-poppins"
                id="stream"
            >
                <div className="pt-[100px]">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=9bZkp7q19f0"
                        controls
                        width="100%"
                        height="850px"
                    />
                </div>

                {/* Button back to dashboard */}
                <div className="absolute left-5 top-5 z-20">
                    <Link href={route('prototype.dashboard')}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            className="btn-back w-[46px] transition-all"
                            alt="stream"
                        />
                    </Link>
                </div>
                {/* Video Title */}
                <div className="title-video absolute left-1/2 top-7 max-w-[310px] -translate-x-1/2 text-center md:max-w-[620px]">
                    <span className="select-none text-2xl font-medium text-white drop-shadow-md transition-all">
                        Details Screen Part Final
                    </span>
                </div>
            </section>
        </>
    );
}
