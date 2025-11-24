import { useCounter } from "../context/Rules";

export default function Increment() {
  const { inc } = useCounter();
  return <button onClick={inc}>Increment</button>;
}
