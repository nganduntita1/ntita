// components/LottiePlayer.tsx
"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottiePlayer({
  animationData,
}: {
  animationData: any;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, [animationData]);

  return <div ref={container} />;
}
