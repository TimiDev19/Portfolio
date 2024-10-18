import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // You can include the weights you need
    variable: '--font-inter', // Define a custom variable for Tailwind or inline CSS usage
});

interface SplashScreenProps {
    loading: boolean;
    targetPage: string;
}

const SplashScreen: FC<SplashScreenProps> = ({ loading, targetPage }) => {
    const getContent = () => {
        switch (targetPage) {
            case "/home":
                return <h1 className={` ${inter.className} text-4xl lg:text-7xl font-bold uppercase`}>Home</h1>;
            case "/about":
                return <h1 className={` ${inter.className} text-4xl lg:text-7xl font-bold uppercase`}>About</h1>;
            case "/projects":
                return <h1 className={` ${inter.className} text-4xl lg:text-7xl font-bold uppercase`}>Projects</h1>;
            case "/services":
                return <h1 className={` ${inter.className} text-4xl lg:text-7xl font-bold uppercase`}>Loading Services...</h1>;
            default:
                return <h1 className={` ${inter.className} text-4xl lg:text-7xl font-bold uppercase`}>&lt;Timi&gt;</h1>;
        }
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 bg-red-500 flex justify-center items-center z-[100]"
                    initial={{ y: "-100%", opacity: 0 }} // Start above the viewport with no opacity
                    animate={{ y: 0, opacity: 1 }} // Animate to the center
                    exit={{ y: "100%", opacity: 0 }} // Animate to fall below the viewport
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 1,
                    }} // Customize the spring animation for the water-fall effect
                >
                    <motion.div
                        className="flex flex-col justify-center items-center text-gray-800"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        {getContent()}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
