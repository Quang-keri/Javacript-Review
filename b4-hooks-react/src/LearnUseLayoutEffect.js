import { useState, useEffect, useLayoutEffect } from "react";

export function LearnUseLayoutEffect() {
  const [count, setCount] = useState(0);

  const handleCount1 = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  return (
    <>
      <p>xem sự thay đổi của count {count ? count : "0"}</p>
      <button onClick={handleCount1}>Nut của useEffect</button>
      <button onClick={handleCount1}>Nut của useEffectLayout</button>
    </>
  );
}
