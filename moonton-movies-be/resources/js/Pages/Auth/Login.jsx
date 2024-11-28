import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login" />
            <div className="max-w-screen mx-auto min-h-screen bg-black px-3 text-white md:px-10">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="flex py-24 laptopLg:ml-[680px] laptopXl:ml-[870px]">
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
                            <InputError errors={errors} />
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Email Address"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Password Address"
                                    />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Password"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] grid space-y-[14px]">
                                <PrimaryButton
                                    type="submit"
                                    variant="primary"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </PrimaryButton>

                                <Link href={route('register')}>
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
