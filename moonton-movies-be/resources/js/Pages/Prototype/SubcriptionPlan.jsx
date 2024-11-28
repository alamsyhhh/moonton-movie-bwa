import SubscriptionCard from '@/Components/SubscriptionCard';
import Authenticated from '@/Layouts/Authenticated';

export default function SubcriptionPlan() {
    return (
        <>
            <Authenticated>
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
                        <SubscriptionCard
                            name={'Basic'}
                            price={299000}
                            durationInMonth={3}
                            features={['Feature 1', 'Feature 2', 'Feature 3']}
                        />

                        <SubscriptionCard
                            isPremium={true}
                            name={'Premium'}
                            price={899000}
                            durationInMonth={6}
                            features={['Feature 1', 'Feature 2', 'Feature 3']}
                        />
                    </div>
                    {/* /Pricing Card */}
                </div>
            </Authenticated>
        </>
    );
}
