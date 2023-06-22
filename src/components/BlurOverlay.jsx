import { useEffect, useState } from 'react';
import { BlurDiv } from './styled';

export const BlurOverlay = () => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 500);
  }, []);

  return !isLoaded && <BlurDiv />;
};
