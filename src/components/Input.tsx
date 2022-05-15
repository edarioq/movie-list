import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProps } from 'theme';
import {
  isEmail,
  isNumber,
  isPhoneNumber,
  hasNoSpaces,
  hasNoSpecialCharacters,
} from 'utils';

type InputType =
  | 'text'
  | 'name'
  | 'number'
  | 'email'
  | 'tel'
  | 'url'
  | 'password';

interface Props {
  type: InputType;
  id: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  setError?: (e: any) => void;
  readOnly?: boolean;
  cursor?: 'initial' | 'pointer' | 'not-allowed';
}

interface StyleProps extends ThemeProps {
  type: InputType;
  error: boolean;
  cursor?: string;
}

const InputCss = styled.input`
  display: flex;
  align-items: center;
  width: 400px;
  padding: 0.43em 1.2em;
  border: ${(p: StyleProps) =>
    `1px solid ${p.error ? p.theme.colors.red1 : 'transparent'}`};
  border-radius: ${(p: StyleProps) => p.theme.borderRadius};
  transition: ${(p: StyleProps) => p.theme.transition};
  background-color: ${(p: StyleProps) => `${p.theme.colors.dark3}`};
  color: ${(p: StyleProps) => `${p.theme.colors.light2}`};
  text-transform: ${(p: StyleProps) =>
    p.type === 'name' ? 'capitalize' : 'none'};
  &::placeholder {
    color: ${(p: StyleProps) => p.theme.colors.light4};
  }
  &:focus {
    border: 1px solid
      ${(p: StyleProps) =>
        `${p.error ? p.theme.colors.red1 : p.theme.colors.blue1}`};
    outline: none;
  }
  &:hover {
    cursor: ${(p: StyleProps) => (p.cursor ? p.cursor : 'auto')};
  }
`;

export function Input(props: Props) {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let isError = false;
    if (props.type === 'name') {
      isError =
        !hasNoSpecialCharacters(e.target.value) || isNumber(e.target.value);
    }
    if (props.type === 'email') {
      isError = !isEmail(e.target.value);
    }
    if (props.type === 'number') {
      isError = !isNumber(e.target.value) || !hasNoSpaces(e.target.value);
    }
    if (props.type === 'tel') {
      isError = !isPhoneNumber(e.target.value);
    }
    setValue(e.target.value);
    setError(isError);
    if (props.setError) {
      props.setError({ [props.id]: isError });
    }
  };

  const setType = (props: Props): InputType => {
    const check = ['text', 'name', 'number'];
    if (check.includes(props.type)) {
      return 'text';
    }
    return props.type;
  };

  return (
    <InputCss
      type={setType(props)}
      id={props.id}
      value={props.value ? props.value : value}
      placeholder={props.placeholder ? props.placeholder : ''}
      required={props.required}
      error={error}
      readOnly={props.readOnly}
      cursor={props.cursor}
      onChange={checkValue}
    />
  );
}
