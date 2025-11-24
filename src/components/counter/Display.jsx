

import { useCounter } from "../context/Rules";

export default function Display() {
  const { count } = useCounter();
  return <h2>Count: {count}</h2>;
}
