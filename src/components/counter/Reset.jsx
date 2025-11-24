import { useCounter } from "../context/Rules";

export default function Reset() {
  const { reset } = useCounter();
  return <button onClick={reset}>Reset</button>;
}
