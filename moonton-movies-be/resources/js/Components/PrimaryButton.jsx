import PropTypes from 'prop-types';

const PrimaryButton = function PrimaryButton({
    type = 'submit',
    className = '',
    disabled,
    variant = 'primary',
    processing = false, // Add default value for processing
    children,
    ...props
}) {
    const hasCustomWidth = className.includes('w-');

    return (
        <button
            {...props}
            type={type}
            className={`rounded-2xl py-[13px] text-center ${processing ? 'opacity-30' : ''} btn-${variant} ${
                hasCustomWidth ? '' : 'w-full'
            } ${className}`}
            disabled={disabled || processing}
        >
            {children}
        </button>
    );
};

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'primary',
        'warning',
        'danger',
        'light-outline',
        'white-outline',
    ]),
    processing: PropTypes.bool, // Add prop type for processing
    children: PropTypes.node,
};

export default PrimaryButton;
