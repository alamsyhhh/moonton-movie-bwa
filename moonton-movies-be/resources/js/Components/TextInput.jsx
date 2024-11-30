import PropTypes from 'prop-types';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const TextInput = forwardRef(function (
    {
        type = 'text',
        defaultValue,
        className = '',
        variant = 'primary',
        isFocused = false,
        placeholder,
        isError,
        ...props
    },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            // className={`w-full rounded-2xl bg-form-bg px-7 focus:outline-alerange ${isError && 'input-error'} input-${variant} ${
            //     className
            // }`}
            className={`w-full rounded-2xl bg-form-bg px-7 focus:outline-alerange ${
                isError ? 'input-error' : ''
            } ${variant === 'primary-outline' ? 'border border-alerange bg-white text-black' : ''} input-${variant} ${className}`}
            ref={localRef}
            defaultValue={defaultValue}
            placeholder={placeholder}
        />
    );
});

// Tambahkan displayName untuk menghilangkan peringatan ESLint
TextInput.displayName = 'TextInput';

// Deklarasi `propTypes` setelah komponen
TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;
