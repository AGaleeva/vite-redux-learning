import { InputProps } from './types'
import { InputContainer, InputLabel, InputComponent, ErrorContainer } from './styles'

function WeatherInput({
  placeholder,
  disabled,
  label,
  name,
  value,
  onChange,
  type,
  error = undefined,
}: InputProps) {
  const inputID = `${name}-${Math.random()}`;

  return (
    <InputContainer>
      <InputLabel htmlFor={inputID}>{label}</InputLabel>
      <InputComponent
        value={value}
        onChange={onChange}
        id={inputID}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        $error={error}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </InputContainer>
  );
}

export default WeatherInput;