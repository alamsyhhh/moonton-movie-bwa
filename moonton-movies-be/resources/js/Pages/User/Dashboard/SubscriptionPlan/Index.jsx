import SubscriptionCard from '@/Components/SubscriptionCard';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';

export default function SubcriptionPlan({ auth, subscriptionPlans, env }) {
    console.log({ auth, env });
    const selectSubscription = (id) => {
        console.log(`Selected Subscription ID: ${id}`);
        Inertia.post(
            route('user.dashboard.subscriptionPlan.userSubscribe', {
                subscriptionPlan: id,
            }),
            console.log('Calling Inertia POST...'),
            {},
            {
                only: ['userSubscription'],
                onSuccess: ({ props }) => {
                    console.log('Inertia POST Success Props:', props);
                    if (props.userSubscription) {
                        console.log('Calling onSnapMidtrans...');
                        onSnapMidtrans(props.userSubscription);
                    } else {
                        console.error('userSubscription is missing in props');
                    }
                },
                onError: (error) => {
                    console.error('Inertia POST Error:', error);
                },
            },
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        if (!userSubscription.snap_token) {
            console.error('Snap token is missing');
            return;
        }
        console.log(
            'Calling Snap Pay with Token:',
            userSubscription.snap_token,
        );
        if (typeof window.snap !== 'undefined') {
            snap.pay(userSubscription.snap_token, {
                onSuccess: function (result) {
                    console.log('Transaction Success:', result);
                },
                onPending: function (result) {
                    console.log('Transaction Pending:', result);
                },
                onError: function (result) {
                    console.error('Transaction Error:', result);
                },
            });
        } else {
            console.error('Snap.js is not loaded!');
        }
    };

    // console.log('Snap Object:', window.snap);
    // if (!window.snap) {
    //     console.error('Snap JS not loaded');
    // }

    // const onSnapMidtrans = (userSubscription) => {
    //     snap.pay(userSubscription.snap_token, {
    //         // Optional
    //         onSuccess: function (result) {
    //             console.log({ result });
    //             Inertia.visit(route('user.dashboard.index'));
    //         },
    //         // Optional
    //         onPending: function (result) {
    //             console.log({ result });
    //         },
    //         // Optional
    //         onError: function (result) {
    //             console.log({ result });
    //         },
    //     });
    // };

    return (
        <>
            <Authenticated auth={auth}>
                <Head title="Subscription Plan">
                    <script
                        // type="text/javascript"
                        src="https://app.sandbox.midtrans.com/snap/snap.js"
                        data-client-key={env.MIDTRANS_CLIENTKEY}
                    ></script>
                </Head>
                <div className="flex flex-col items-center py-20">
                    <div className="mb-3 text-[26px] font-semibold text-black">
                        Pricing for Everyone
                    </div>
                    <p className="max-w-[302px] text-center text-base leading-7 text-gray-1">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>
                    {/* Pricing Card */}
                    <div className="mt-[70px] flex justify-center gap-10">
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInMonth={
                                    subscriptionPlan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={
                                    subscriptionPlan.name === 'Premium'
                                        ? true
                                        : false
                                }
                                key={subscriptionPlan.id}
                                onSelectSubscription={() =>
                                    selectSubscription(subscriptionPlan.id)
                                }
                            />
                        ))}
                    </div>
                    {/* /Pricing Card */}
                </div>
            </Authenticated>
        </>
    );
}
