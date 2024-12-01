export default function Checkbox({
    checked = false,
    className = '',
    ...props
}) {
    return (
        <input
            {...props}
            type="checkbox"
            defaultChecked={checked}
            className={`rounded border-gray-400 bg-white text-alerange shadow-sm focus:border-alerange focus:ring-alerange focus:ring-offset-white ${className}`}
        />
    );
}
