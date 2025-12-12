// LogoLoop.tsx
import React from 'react';
import './LogoLoop.css';

interface LogoItem {
    src: string;
    alt: string;
}

interface LogoLoopProps {
    items: LogoItem[];
    direction?: 'left' | 'right';
    speed?: 'slow' | 'normal' | 'fast';
}

const LogoLoop: React.FC<LogoLoopProps> = ({ items, direction = 'left', speed = 'normal' }) => {
    // Debug: Check if items are passed
    console.log('LogoLoop items:', items);

    const duplicatedItems = [...items, ...items, ...items];

    const getSpeed = () => {
        switch (speed) {
            case 'slow': return '60s';
            case 'fast': return '20s';
            default: return '40s';
        }
    };

    return (
        <div className="logo-loop-container w-full py-8">
            {/* Debug element - REMOVE AFTER TESTING */}


            <div
                className="logo-loop-track"
                style={{
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationDuration: getSpeed()
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <div key={`${item.alt}-${idx}`} className="logo-item px-4">
                        {item.src ? (
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                    console.error(`Failed to load image: ${item.src}`);
                                    // Fallback to text
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                        const fallback = document.createElement('div');
                                        fallback.className = 'logo-text-fallback';
                                        fallback.textContent = item.alt;
                                        parent.appendChild(fallback);
                                    }
                                }}
                            />
                        ) : (
                            <div className="logo-text-fallback">{item.alt}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;