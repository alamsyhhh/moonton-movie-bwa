export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={`rounded border-gray-400 bg-white text-alerange shadow-sm focus:border-alerange focus:ring-alerange focus:ring-offset-white ${className}`}
        />
    );
}
