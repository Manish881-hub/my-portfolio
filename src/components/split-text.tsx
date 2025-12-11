import { motion, Variants } from 'framer-motion';

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
}

export function SplitText({ children, className = '', delay = 0 }: SplitTextProps) {
    const words = children.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block whitespace-pre-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((character, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className="inline-block"
                        >
                            {character}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
}
