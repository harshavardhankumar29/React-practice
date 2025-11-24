import { useCounter } from "../context/Rules";

export default function Decrement() {
  const { dec } = useCounter();
  return <button onClick={dec}>Decrement</button>;
}
