'use client';

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function ScrollStackDemo() {
    return (
        <div className="h-screen w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
            <ScrollStack
                itemDistance={100}
                itemScale={0.03}
                itemStackDistance={30}
                stackPosition="20%"
                scaleEndPosition="10%"
                baseScale={0.85}
                scaleDuration={0.5}
                rotationAmount={10}
                blurAmount={0}
                useWindowScroll={false}
                className="w-[500px] h-[800px] bg-neutral-900 rounded-3xl border border-neutral-800"
            >
                <ScrollStackItem itemClassName="bg-blue-500 text-white flex items-center justify-center text-4xl font-bold">
                    1
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-purple-500 text-white flex items-center justify-center text-4xl font-bold">
                    2
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-pink-500 text-white flex items-center justify-center text-4xl font-bold">
                    3
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-red-500 text-white flex items-center justify-center text-4xl font-bold">
                    4
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-orange-500 text-white flex items-center justify-center text-4xl font-bold">
                    5
                </ScrollStackItem>
                <ScrollStackItem itemClassName="bg-yellow-500 text-black flex items-center justify-center text-4xl font-bold">
                    6
                </ScrollStackItem>
            </ScrollStack>
        </div>
    );
}
