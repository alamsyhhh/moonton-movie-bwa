import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <div className="max-w-screen mx-auto min-h-screen bg-black px-3 text-white md:px-10">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px] hidden"
                        alt=""
                    />
                </div>
                <div className="laptopLg:ml-[680px] laptopXl:ml-[870px] flex py-24">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="mb-3 text-[26px] font-semibold">
                                Welcome Back
                            </div>
                            <p className="text-base leading-7 text-[#767676]">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Password Address"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] grid space-y-[14px]">
                                <PrimaryButton type="button" variant="primary">
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </PrimaryButton>

                                <Link href={route('prototype.register')}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
