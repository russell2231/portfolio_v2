import './CustomButton.scss';

const CustomButton = ({ children, primary, invert, ...otherProps }) => {
	return (
		<button
			className={`${primary ? 'primary' : ''} ${
				invert ? 'invert' : ''
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
