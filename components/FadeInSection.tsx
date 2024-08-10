import React, { useEffect, useRef, ReactNode } from 'react';
import '@/app/style/fadeEffect.css'; // Import the CSS file with the ink effect

interface FadeInSectionProps {
    children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current?.classList.add('visible');
                } else {
                    ref.current?.classList.remove('visible');
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="fade-in desktop:h-screen">
            {children}
        </div>
    );
};

export default FadeInSection