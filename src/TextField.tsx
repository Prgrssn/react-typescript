import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | TextNode>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef();

  setCount({ text: "Dude" });

  console.log(count);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
