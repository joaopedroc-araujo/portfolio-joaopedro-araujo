import { useState, useEffect } from 'react';

function useIntersectionObserver(ref, options) {
    const [isVisible, setIsVisible] = useState(false);
    const [prevY, setPrevY] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const currentY = entry.boundingClientRect.y;
            if (prevY !== null) {
                if (currentY < prevY) {
                    // Scroll para baixo
                    if (entry.isIntersecting && options.thresholdDown) {
                        setIsVisible(true);
                    } else if (!entry.isIntersecting && !options.thresholdDown) {
                        setIsVisible(false);
                    }
                } else if (currentY > prevY) {
                    // Scroll para cima
                    if (entry.isIntersecting && options.thresholdUp) {
                        setIsVisible(true);
                    } else if (!entry.isIntersecting && !options.thresholdUp) {
                        setIsVisible(false);
                    }
                }
            }
            setPrevY(currentY);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, prevY]);

    return isVisible;
}

export default useIntersectionObserver;