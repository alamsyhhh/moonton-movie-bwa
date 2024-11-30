export default function SubscriptionDetail({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    //  console.log('SubscriptionDetail rendered');
    const remainingDays = activeDays - remainingActiveDays;

    const loadingProgress = () => {
        const progress = remainingDays / activeDays;
        if (progress < 0.25) {
            return 'w-3/12';
        } else if (progress < 0.5) {
            return 'w-6/12';
        } else if (progress < 0.75) {
            return 'w-9/12';
        } else {
            return 'w-full';
        }
    };

    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="rounded-[25px] bg-white p-5 outline outline-1 outline-[#f1f1f1]">
                        <div className="mb-8 text-lg font-semibold text-black">
                            {name}
                        </div>
                        <div className="mb-2 text-sm text-black">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="h-[6px] w-full rounded-full bg-[#f1f1f1]">
                            <div className="h-full w-2/12 rounded-full bg-alerange" />
                        </div>
                    </div>
                </div>
            )}

            {/* PREMIUM */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="rounded-[25px] bg-black p-5">
                        <img src="/icons/ic_star-rounded.svg" alt="" />
                        <div className="mb-8 mt-4 text-lg font-semibold text-white">
                            For Greatest
                        </div>
                        <div className="mb-2 text-sm text-white">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="h-[6px] w-full rounded-full bg-[#333333]">
                            <div
                                className={`h-full rounded-full bg-alerange ${loadingProgress()}`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
