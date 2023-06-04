import { ThemeState } from '#src/stores/appStateStore';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

interface ObserverProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  handleObserver: IntersectionObserverCallback;
}

const useIntersectionObserver = ({ ref, handleObserver }: ObserverProps) => {
  // Intersection Observer 설정
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
};

export default useIntersectionObserver;
