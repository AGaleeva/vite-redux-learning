import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function Button({disabled = false, name, isRedFont = false, type = 'button', onClick}: ButtonProps) {
  return (
    <ButtonComponent disabled = {disabled} className='button-component' type={type} $isRedFont = {isRedFont} onClick = {onClick}> 
     {/* новый атрибут не показывается в html-дереве, но влияет на стили, поэтому его надо прописывать через $ */}
      {name}    
    </ButtonComponent>
  );
}

export default Button;