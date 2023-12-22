import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function WeatherButton({name, type = 'button', onClick, style}: ButtonProps) {
  return (
    <ButtonComponent className='button-component' type={type} onClick = {onClick} style={style}>      
      {name}    
    </ButtonComponent>
  );
}

export default WeatherButton;