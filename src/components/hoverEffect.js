'use client';
import { useEffect, useRef, useState } from 'react';

export default function HoverAnimation({ image1, image2, displacementImage }) {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 步骤1：检查关键依赖是否就绪
    const checkDependencies = () => {
      return (
        containerRef.current && 
        typeof window !== 'undefined' && 
        image1 && image2 && displacementImage
      );
    };

    // 步骤2：延迟初始化
    const timer = setTimeout(() => {
      if (checkDependencies()) {
        setIsReady(true);
      } else {
        console.warn('依赖未就绪，重试中...');
        checkDependencies(); // 可替换为更复杂的重试逻辑
      }
    }, 300); // 适当延迟（300ms 是典型值）

    return () => clearTimeout(timer);
  }, [image1, image2, displacementImage]);

  useEffect(() => {
    if (!isReady) return;

    let hoverEffect;
    (async () => {
      try {
        const HoverEffect = (await import('hover-effect')).default;
        hoverEffect = new HoverEffect({
          parent: containerRef.current,
          image1,
          image2,
          displacementImage,
          intensity: 0.2,
          imagesRatio: 680 / 1400
        });
      } catch (error) {
        console.error('HoverEffect 初始化失败:', error);
      }
    })();

    return () => {
      if (hoverEffect?.destroy) {
        hoverEffect.destroy()
      }
    };
  }, [isReady]); // 仅在 isReady 时初始化

  return <div ref={containerRef} className="myDiv" />;
}