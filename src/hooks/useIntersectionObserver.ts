import { useState, useEffect, RefObject } from 'react';

interface CustomIntersectionObserverOptions extends IntersectionObserverInit {
    thresholdUp?: boolean;
    thresholdDown?: boolean;
}

function useIntersectionObserver(
    ref: RefObject<Element>,
    options: CustomIntersectionObserverOptions
): boolean {
    const [isVisible, setIsVisible] = useState(false);
    const [prevY, setPrevY] = useState<number | null>(null);

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

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options, prevY]);

    return isVisible;
}

export default useIntersectionObserver;