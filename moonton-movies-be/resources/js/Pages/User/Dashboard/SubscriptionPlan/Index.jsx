import SubscriptionCard from '@/Components/SubscriptionCard';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from '@inertiajs/inertia';

export default function SubcriptionPlan({ auth, subscriptionPlans }) {
    const selectSubscription = (id) => {
        Inertia.post(
            route('user.dashboard.subscriptionPlan.userSubscribe', {
                subscriptionPlan: id,
            }),
        );
    };

    return (
        <>
            <Authenticated auth={auth}>
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
