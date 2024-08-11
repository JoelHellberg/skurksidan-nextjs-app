import { useEffect, useRef, useState, ReactNode} from 'react';
import { Parallax } from '@react-spring/parallax';

interface Props {
    children: ReactNode;
}

const DynamicParallax: React.FC<Props> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const updatePages = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const calculatedPages = Math.ceil(contentHeight / viewportHeight);
        setPages(calculatedPages);
      }
    };

    const observer = new ResizeObserver(updatePages);

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    window.addEventListener('resize', updatePages);
    updatePages();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePages);
    };
  }, [children]);

  return (
    <>
      <p>{"Pages: " + pages}</p>
      <Parallax key={pages} pages={pages}>
        <div ref={contentRef}>
          {children}
        </div>
      </Parallax>
    </>
  );
};

export default DynamicParallax;
