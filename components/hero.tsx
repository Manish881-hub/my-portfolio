// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[60vh] px-6 py-12 max-w-5xl mx-auto">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-blue-600">Pradumna</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                    Open Source Developer & DevOps Engineer
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0">
                    I help developers master DevOps tools. Docker Captain, Microsoft MVP, and passionate community builder.
                </p>

                {/* Social Links / Badges Area */}
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                    <a href="#" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">GitHub</a>
                    <a href="#" className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">Twitter</a>
                </div>
            </div>

            {/* Profile Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                    {/* Replace with your image path */}
                    <Image src="/profile.jpg" alt="Profile" layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;