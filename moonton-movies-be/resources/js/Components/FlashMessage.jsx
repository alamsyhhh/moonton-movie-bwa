export default function FlashMessage({ className, message = '' }) {
    return (
        <>
            <div
                className={`${className} mb-4 flex rounded bg-green-100 p-4 text-sm text-green-700`}
            >
                {message}
            </div>
        </>
    );
}
