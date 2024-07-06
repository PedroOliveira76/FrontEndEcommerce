import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-4 right-4 ${isVisible ? 'visible' : 'invisible'}`}>
            <button onClick={scrollToTop} className="bg-DarkRed p-4 rounded-full text-white hover:bg-slate-700">
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
