import React from 'react';
import './LogoLoop.css';

interface LogoLoopProps {
    items: string[];
    direction?: 'left' | 'right';
    speed?: 'slow' | 'normal' | 'fast';
}

const LogoLoop: React.FC<LogoLoopProps> = ({ items, direction = 'left', speed = 'normal' }) => {
    // Triple the items to ensure smooth infinite scroll even on wide screens
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
            <div
                className="logo-loop-track"
                style={{
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationDuration: getSpeed()
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <div key={`${item}-${idx}`} className="logo-item text-gray-400 dark:text-gray-500 font-medium text-lg px-4">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
