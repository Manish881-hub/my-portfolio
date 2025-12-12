"use client";

import React from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface DockProps {
    items: {
        id: string;
        label: string;
        icon: React.ElementType;
    }[];
    activeTab: string;
    onTabChange: (id: string) => void;
    className?: string;
}

const Dock = ({ items, activeTab, onTabChange, className }: DockProps) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex h-16 items-end gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 pb-3 backdrop-blur-md dark:border-white/10 dark:bg-black/10 ${className}`}
        >
            {items.map((item) => (
                <DockIcon
                    key={item.id}
                    mouseX={mouseX}
                    item={item}
                    isActive={activeTab === item.id}
                    onClick={() => onTabChange(item.id)}
                />
            ))}
        </motion.div>
    );
};

function DockIcon({
    mouseX,
    item,
    isActive,
    onClick,
}: {
    mouseX: MotionValue;
    item: { id: string; label: string; icon: React.ElementType };
    isActive: boolean;
    onClick: () => void;
}) {
    const ref = React.useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square cursor-pointer"
            onClick={onClick}
        >
            <div
                className={`relative flex h-full w-full items-center justify-center rounded-full transition-colors ${isActive
                    ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                    }`}
            >
                <item.icon className="h-2/5 w-2/5" />

                {/* Active Indicator Dot */}
                {isActive && (
                    <span className="absolute -bottom-2 h-1 w-1 rounded-full bg-blue-500" />
                )}
            </div>
        </motion.div>
    );
}

export default Dock;
