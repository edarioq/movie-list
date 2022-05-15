import React, { useState, useRef, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { Input } from 'components';
import { useDocumentClick, useKeyPress } from 'hooks';
import { ThemeProps, ThemeProviderProps } from 'theme';
import { ChevronDown } from 'tabler-icons-react';

interface Props {
  id: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  setError?: (e: boolean) => void;
  options: any[];
  readOnly?: boolean;
}

interface StyleProps extends ThemeProps {
  error?: boolean;
  readOnly?: boolean;
}

const Container = styled.div`
  display: block;
  position: relative;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  border: 1px solid ${(p: StyleProps) => p.theme.colors.dark4};
  z-index: 100;
  border-radius: ${(p: StyleProps) => p.theme.borderRadius};
  background-color: ${(p: StyleProps) => p.theme.colors.light1};
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
  z-index: 200;
  padding: 0.93em 1.2em;
  transition: ${(p: StyleProps) => p.theme.transition};
  &:hover {
    cursor: pointer;
    color: ${(p: StyleProps) => p.theme.colors.light1};
    background-color: ${(p: StyleProps) => p.theme.colors.dark3};
    &:first-child {
      border-top-left-radius: 0.3em;
      border-top-right-radius: 0.3em;
    }
    &:last-child {
      border-bottom-left-radius: 0.3em;
      border-bottom-right-radius: 0.3em;
    }
  }
`;

const DropdownIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

export function Select(props: Props) {
  const [value, setValue] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme() as ThemeProviderProps;
  const escKey = useKeyPress(['Escape']);
  const downKey = useKeyPress(['ArrowDown']);

  const toggleDropdown = (t: boolean): void => {
    setToggle((t = !t));
  };

  const selectValue = (opt: any) => {
    setToggle(false);
    setValue(opt.name);
  };

  useDocumentClick(ref, () => {
    setToggle(false);
  });

  useEffect(() => {
    setToggle(false);
  }, [escKey]);

  useEffect(() => {
    /* setToggle(true);ss
    console.debug(ref); */
  }, [downKey]);

  return (
    <Container ref={ref}>
      <span className="relative" onClick={() => toggleDropdown(toggle)}>
        <Input
          type="text"
          id={props.id}
          required={props.required}
          setError={props.setError}
          placeholder={props.placeholder}
          readOnly={true}
          value={props.value ? props.value : value}
          cursor={'pointer'}
        />
      </span>
      <DropdownIcon>
        <ChevronDown size={18} strokeWidth={2} color={theme.colors.dark3} />
      </DropdownIcon>
      {toggle ? (
        <Dropdown>
          {props.options
            ? props.options.map((p: any) => {
                return (
                  <DropdownItem key={p.id} onClick={() => selectValue(p)}>
                    <span className="overflow">{p.name}</span>
                  </DropdownItem>
                );
              })
            : null}
        </Dropdown>
      ) : null}
    </Container>
  );
}
