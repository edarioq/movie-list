import styled, { css } from 'styled-components';

interface StyleProps {
  textAlign?: string;
  lowercase?: boolean;
  bottomMargin?: number;
  bottomPadding?: number;
}

const setAlignment = (p: StyleProps) => p.textAlign;
const setCase = (p: StyleProps) => (p.lowercase ? 'none' : 'uppercase');
const setBottomMargin = (p: StyleProps) => `${p.bottomMargin}rem`;
const setBottomPadding = (p: StyleProps) => `${p.bottomPadding}rem`;

const values = css`
  text-align: ${(p: StyleProps) => setAlignment(p)};
  text-transform: ${(p: StyleProps) => (p.lowercase ? setCase(p) : null)};
  margin-bottom: ${(p: StyleProps) =>
    p.bottomMargin || p.bottomMargin === 0 ? setBottomMargin(p) : null};
  padding-bottom: ${(p: StyleProps) =>
    p.bottomPadding || p.bottomPadding === 0 ? setBottomPadding(p) : null};
`;

const H1 = styled.h1`
  ${values}
`;
const H2 = styled.h2`
  ${values}
`;
const H3 = styled.h3`
  ${values}
`;

interface Props {
  size: 'h1' | 'h2' | 'h3';
  text: string;
  textAlign?: 'left' | 'center' | 'right';
  lowercase?: boolean;
  bottomMargin?: number;
  bottomPadding?: number;
}

export function Heading({
  size,
  text,
  textAlign,
  lowercase,
  bottomMargin,
  bottomPadding,
}: Props) {
  return (
    <>
      {size === 'h1' ? (
        <H1
          textAlign={textAlign ? textAlign : 'center'}
          lowercase={lowercase}
          bottomMargin={bottomMargin}
          bottomPadding={bottomPadding}
        >
          {text}
        </H1>
      ) : null}
      {size === 'h2' ? (
        <H2
          textAlign={textAlign ? textAlign : 'center'}
          lowercase={lowercase}
          bottomMargin={bottomMargin}
          bottomPadding={bottomPadding}
        >
          {text}
        </H2>
      ) : null}
      {size === 'h3' ? (
        <H3
          textAlign={textAlign ? textAlign : 'center'}
          lowercase={lowercase}
          bottomMargin={bottomMargin}
          bottomPadding={bottomPadding}
        >
          {text}
        </H3>
      ) : null}
    </>
  );
}
