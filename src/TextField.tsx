import React, { useState } from "react";

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
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<number | null | TextNode>(5);

  setCount({ text: "Dude" });

  console.log(count);

  return (
    <div>
      <input />
    </div>
  );
};
