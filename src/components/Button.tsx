import styled from 'styled-components';
import { ThemeProps } from 'theme';

type ButtonType = 'primary' | 'secondary';

interface Props {
  text: string;
  type?: 'submit';
  variation: ButtonType;
  error?: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
}

interface StyleProps extends ThemeProps {
  type?: 'submit';
  variation?: ButtonType;
  error?: boolean;
  width?: string;
  height?: string;
}

const ButtonCss = styled.button`
  border-radius: ${(p: StyleProps) => p.theme.borderRadius};
  background-color: ${(p: StyleProps) =>
    p.variation === 'primary' ? p.theme.colors.dark3 : p.theme.colors.red1};
  color: ${(p: StyleProps) => p.theme.colors.light1};
  padding: 0.93em 1.8em;
  border: none;
  transition: ${(p: StyleProps) => p.theme.transition};
  width: ${(p: StyleProps) => (p.width ? p.width : '100%')};
  height: ${(p: StyleProps) => (p.height ? p.height : 'auto')};
  &:not(:disabled) {
    cursor: pointer;
    &:hover {
      background-color: ${(p: StyleProps) =>
        p.variation === 'primary' ? p.theme.colors.dark4 : p.theme.colors.red2};
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${(p: StyleProps) => p.theme.colors.light3};
  }
`;

export function Button(props: Props) {
  return (
    <ButtonCss
      type={props.type}
      variation={props.variation}
      width={props.width}
      height={props.height}
      disabled={props.disabled}
    >
      {props.text}
    </ButtonCss>
  );
}
