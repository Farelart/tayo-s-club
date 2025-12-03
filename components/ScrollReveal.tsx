import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'flip-up'
  | 'blur-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const getAnimationStyles = (animation: AnimationType, isVisible: boolean) => {
  const baseStyles = {
    transition: 'all',
    opacity: isVisible ? 1 : 0,
  };

  const transforms: Record<AnimationType, { hidden: string; visible: string }> = {
    'fade-up': { hidden: 'translateY(60px)', visible: 'translateY(0)' },
    'fade-down': { hidden: 'translateY(-60px)', visible: 'translateY(0)' },
    'fade-left': { hidden: 'translateX(60px)', visible: 'translateX(0)' },
    'fade-right': { hidden: 'translateX(-60px)', visible: 'translateX(0)' },
    'zoom-in': { hidden: 'scale(0.8)', visible: 'scale(1)' },
    'zoom-out': { hidden: 'scale(1.2)', visible: 'scale(1)' },
    'flip-up': { hidden: 'perspective(1000px) rotateX(20deg)', visible: 'perspective(1000px) rotateX(0)' },
    'blur-in': { hidden: 'translateY(30px)', visible: 'translateY(0)' },
  };

  return {
    ...baseStyles,
    transform: isVisible ? transforms[animation].visible : transforms[animation].hidden,
    filter: animation === 'blur-in' ? (isVisible ? 'blur(0)' : 'blur(10px)') : undefined,
  };
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const styles = getAnimationStyles(animation, isVisible);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...styles,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

