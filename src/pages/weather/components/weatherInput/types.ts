import { ChangeEventHandler } from 'react';
export interface InputProps {
  placeholder?: string; 
  disabled?: boolean; 
  label?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  type?: 'text' | 'password' | 'checkbox'; // string;
  error?: string | undefined;  
}