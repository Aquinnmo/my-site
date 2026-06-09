import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300); // Delay matches the exit animation duration
    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or pathname changes before timeout
  }, [pathname]);

  return null;
}

export default ScrollToTop;