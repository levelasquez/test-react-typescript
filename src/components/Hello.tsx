import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="gretting">
        Hello {name + getExlamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

function getExlamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
