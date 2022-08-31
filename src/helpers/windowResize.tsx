import { useEffect, useState } from "react";

function useWindowSize()
{
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() =>
  {
    handleResize();
    window.addEventListener('resize', handleResize, false);
  }, []);
  return dimensions;
}

export default useWindowSize;