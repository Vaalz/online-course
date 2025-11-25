import { useState, useEffect, useCallback } from "react";

export default function useResendTimer(initialTime = 30) {
  const [seconds, setSeconds] = useState(initialTime);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (seconds === 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const resetTimer = useCallback(() => {
    setSeconds(initialTime);
    setCanResend(false);
  }, [initialTime]);

  return { seconds, canResend, resetTimer };
}
