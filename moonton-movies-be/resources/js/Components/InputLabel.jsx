export default function InputLabel({
    value,
    className = '',
    children,
    forInput,
    ...props
}) {
    return (
        <label
            {...props}
            htmlFor={forInput}
            className={`mb-2 block text-base ` + className}
        >
            {value ? value : children}
        </label>
    );
}
