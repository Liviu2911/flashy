import { useEffect, useRef } from "react";

export default function useSafeCarouselAnimation(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);
  const lastRun = useRef(Date.now());
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      const now = Date.now();

      if (document.visibilityState === "visible") {
        const elapsed = now - lastRun.current;

        if (elapsed >= delay * 1000) {
          savedCallback.current();
          lastRun.current = now;
        }
      }

      timerId.current = setTimeout(tick, 100); // Check every 100ms
    }

    tick(); 

    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [delay]);
}

