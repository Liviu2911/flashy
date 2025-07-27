import type { LottieRefCurrentProps } from "lottie-react";
import Lottie from "lottie-react";
import { useEffect, useRef } from "react";

type Props = {
  animation: unknown 
  speed: number
}

function LottieAnimation({animation, speed}: Props) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  useEffect(() => {
    if(lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [])

  return (
    <Lottie animationData={animation} lottieRef={lottieRef} loop />
  )
}

export default LottieAnimation;
