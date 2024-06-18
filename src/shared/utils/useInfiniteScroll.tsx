import { useEffect } from 'react';

const useInfiniteScroll = (callback: () => void, isFetching: boolean) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) {
        return;
      }
      callback();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, isFetching]);
};

export default useInfiniteScroll;
