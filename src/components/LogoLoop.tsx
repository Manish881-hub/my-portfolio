"use client";
import React from 'react';
import Image from 'next/image';

interface LogoItem {
    src: string;
    alt: string;
}

interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    logoHeight?: number;
    gap?: number;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
    logos,
    speed = 30,
    direction = 'left',
    pauseOnHover = true,
    logoHeight = 32,
    gap = 40,
}) => {
    const duplicated = [...logos, ...logos, ...logos];
    const duration = `${Math.max(20, logos.length * speed)}s`;

    return (
        <div className="w-full overflow-hidden py-4">
            <div
                className="flex items-center w-max"
                style={{
                    gap: `${gap}px`,
                    animationName: 'logo-scroll',
                    animationDuration: duration,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationPlayState: 'running',
                }}
                onMouseEnter={(e) => {
                    if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                    if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running';
                }}
            >
                {duplicated.map((item, idx) => (
                    <div
                        key={`${item.alt}-${idx}`}
                        className="flex-none flex items-center justify-center"
                        style={{ height: `${logoHeight}px` }}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={80}
                            height={logoHeight}
                            unoptimized
                            loading="lazy"
                            style={{ height: `${logoHeight}px`, width: "auto" }}
                            className="object-contain"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes logo-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
            `}</style>
        </div>
    );
};

export default LogoLoop;
