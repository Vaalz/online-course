// src/utils/hooks.js
import { useState, useEffect } from "react";

/**
 * Custom hook untuk mengelola countdown timer.
 * @param {number} initialSeconds - Durasi awal countdown.
 * @returns {{seconds: number, canResend: boolean, resetTimer: () => void}}
 */
export const useResendTimer = (initialSeconds = 30) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setCanResend(false);
      const timerId = setTimeout(() => {
        setSeconds((s) => s - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const resetTimer = () => {
    setSeconds(initialSeconds);
    setCanResend(false);
  };

  return { seconds, canResend, resetTimer };
};