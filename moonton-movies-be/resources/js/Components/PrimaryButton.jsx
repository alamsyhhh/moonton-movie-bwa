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
    return (
        <button
            {...props}
            type={type}
            className={`w-full rounded-2xl py-[13px] text-center ${processing && 'opacity-30'} btn-${variant} ${className}`}
            disabled={disabled || processing} // Disable button if processing
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
