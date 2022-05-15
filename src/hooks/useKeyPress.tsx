import { useState, useEffect } from 'react';

interface Key {
  key: string;
}

export function useKeyPress(targetKey: string[]): boolean {
  const [keyPressed, setKeyPressed] = useState(false);
  function downHandler({ key }: Key): void {
    if (targetKey.includes(key)) {
      setKeyPressed(true);
    }
  }
  const upHandler = ({ key }: Key): void => {
    if (targetKey.includes(key)) {
      setKeyPressed(false);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
}
