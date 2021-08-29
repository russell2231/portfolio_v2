import './FormInput.scss';

const FormInput = ({ handleChange, ...otherProps }) => {
	return (
		<input className='form-input' onChange={handleChange} {...otherProps} />
	);
};

export default FormInput;
