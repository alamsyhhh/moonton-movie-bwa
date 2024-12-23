import PrimaryButton from './PrimaryButton';

export default function SubscriptionCard({
    id,
    name,
    price,
    durationInMonth,
    features,
    isPremium,
    onSelectSubscription,
}) {
    return (
        <>
            {/* Basic */}
            {!isPremium && (
                <div className="flex h-[max-content] w-[300px] flex-col gap-[30px] rounded-[26px] px-7 py-[30px] text-black outline outline-1 outline-[#F1F1F1]">
                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="mb-2 text-sm">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-xs font-light text-gray-1">
                            /{durationInMonth} months
                        </p>
                    </div>
                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={`${index}-${id}-${features}`}
                                className="flex items-center gap-2"
                            >
                                <img src="/icons/ic_tick.svg" alt="" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <PrimaryButton type="button" variant="white-outline">
                            <span className="text-base">Start {name}</span>
                        </PrimaryButton>
                    </div>
                </div>
            )}
            {/* For Greatest */}
            {isPremium && (
                <div className="flex w-[300px] flex-col gap-[30px] rounded-[26px] bg-black px-7 py-[30px] text-white outline outline-1 outline-[#F1F1F1]">
                    {/* Ornament Icon */}
                    <div className="max-w-max rounded-full bg-alerange p-[13px]">
                        <img src="/icons/ic_star.svg" width={24} alt="" />
                    </div>
                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="mb-2 text-sm">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-xs font-light text-[#767676]">
                            /{durationInMonth} months
                        </p>
                    </div>
                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={`${index}-${id}-${features}`}
                                className="flex items-center gap-2"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <PrimaryButton type="button">
                            <span className="text-base font-semibold">
                                Subscribe Now
                            </span>
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </>
    );
}
