"use client";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./components/BackgroundBeamsWithCollision";
import Link from "next/link";
import { BsMailbox } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { motion } from "framer-motion";
import me from '@/app/assets/timi.jpg'
import { cn } from "@/lib/utils";
import kanban1 from '@/app/assets/kanban1.png'
import kanban2 from '@/app/assets/kanban2.png'
import kanban3 from '@/app/assets/kanban3.png'
import kanban4 from '@/app/assets/kanban4.png'
import invoice from '@/app/assets/invoice-manager.webp'
import invoice2 from '@/app/assets/invoice2.png'
import invoice3 from '@/app/assets/invoice3.png'
import invoice4 from '@/app/assets/invoice4.png'
import eCommerce from '@/app/assets/eCommerceProject.png'
import sugma from '@/app/assets/sugma.png'
import sugma2 from '@/app/assets/sugma2.png'
import sugma3 from '@/app/assets/sugma3.png'
import sugma4 from '@/app/assets/sugma4.png'
import { Timeline } from "./components/Timeline";
import { CardStack } from "./components/CardStack";
import reactLogo from '@/app/assets/React.webp'
import tailwindLogo from '@/app/assets/tailwind.png'
import reduxLogo from '@/app/assets/redux-logo-vector.svg'
import typescriptLogo from '@/app/assets/typescriptlogo.svg'
import javscriptLogo from '@/app/assets/JavaScript-logo.png'
import viteLogo from '@/app/assets/Vitejs-logo.svg.png'
import nextjsLogo from '@/app/assets/nextjs-icon-512x512-y563b8iq.png'
import htmllogo from '@/app/assets/html.png'
import csslogo from '@/app/assets/css-logo.png'
import vercelLogo from '@/app/assets/Vercel_favicon.svg'
import bitbucketlogo from '@/app/assets/bitbucketlogo.webp'
import githublogo from '@/app/assets/github.png'
import Firebase from '@/app/assets/firebase.webp'
import expressJs from '@/app/assets/express.png'
import { BiLink } from "react-icons/bi";
import { SparklesCore } from "./components/Sparkels";
import dynamic from "next/dynamic";


const World = dynamic(() => import("../app/components/Globe").then((m) => m.World), {
  ssr: false,
});

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];


const data = [
  {
    title: "Invoice Manager",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          This is a fully functional and responsive invoice management web application that uses Firebase for both the Database and Authentication. It allows users to create, update and delete invoices and the addition of a dark and light mode feature all adds to the outstanding user experience.
        </p>
        <Link target="blank" href='https://timi-invoice-manager.vercel.app/' className="  w-full lg:w-[30%] flex items-center justify-center mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500 mb-4"><BiLink className=" mx-2" />Live Site</Link>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={invoice}
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={invoice2}
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={invoice3}
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={invoice4}
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "eCommerce",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This is a fully funtional and responsive ecommerce web application that allows users do shopping from the comfort of their home. It features a cart where users can view edit and confirm their orders allowing a smooth and efficient user experience. The items are all being pulled from an api.
        </p>
        <Link target="blank" href='https://ecommerce-oluwatimilehin.vercel.app/' className="  w-full lg:w-[30%] flex items-center justify-center mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500 mb-4"><BiLink className=" mx-2" />Live Site</Link>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={eCommerce}
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={eCommerce}
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={eCommerce}
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={eCommerce}
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Airport",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This is a fully funtional and responsive ecommerce web application that shows users a little bit about 'Sugma Airways' to serve as not only a buisness website but also an advertising opportunity.
        </p>
        <Link target="blank" href='https://sugma-airways.vercel.app/' className="  w-full lg:w-[30%] flex items-center justify-center mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500 mb-4"><BiLink className=" mx-2" />Live Site</Link>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={sugma}
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={sugma2}
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={sugma3}
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={sugma4}
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Kanban Task Manager",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          This is a fully functional and responsive task management web application featuring a Kanban board. Users can easily add, edit and delete tasks and it also features a dark and light mode option
        </p>
        <Link target="blank" href='https://timi-kanban.vercel.app/' className="  w-full lg:w-[30%] flex items-center justify-center mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500 mb-4"><BiLink className=" mx-2" />Live Site</Link>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={kanban4}
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={kanban3}
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={kanban2}
            alt="bento template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={kanban1}
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className=" max-w-screen overflow-x-hidden">
      <div className="h-[60vh] w-full flex flex-col items-center justify-center pt-[100px] px-3">
        <BackgroundBeamsWithCollision>
          <div>
            <div className=" uppercase text-center " >
              <h1 className=" text-2xl sm:text-4xl md:text-5xl text-[#023047]">Hello 👋🏽, i am oluwatimilehin</h1>
              <h1 className=" text-xl font-thin sm:text-4xl md:text-5xl text-[#023047]">I am a <span className=" text-gray-400">Frontend Developer</span>👨🏽‍💻</h1>
            </div>
            <div className=" w-full flex items-center justify-center mt-5">
              <a href="#contact" className=" flex items-center justify-center mx-3 px-6 py-2 rounded-md border-[#023047] border-2 text-[#023047] hover:text-white hover:bg-[#023047] duration-500"><BsMailbox className=" mx-2" /> Contact</a>
              <Link target="blank" href='https://drive.google.com/file/d/1jDydZ1C1S0K6vTcNH1oALJ1Nft95Lpby/view?usp=sharing' className=" flex items-center justify-center mx-3 px-6 py-2 rounded-md bg-[#023047] border-[#023047] border-2 text-white hover:text-[#023047] hover:border-2 hover:border-[#023047] hover:bg-transparent duration-500"><GrDocument className=" mx-2" />Resume</Link>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/*  */}

      <div id="about" className=" h-fit w-full px-3 mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="border-t border-[#023047] flex-grow"></div>
          <div className="px-4 text-3xl font-bold uppercase text-[#023047]">About Me 🧍🏽‍♂️</div>
          <div className="border-t border-[#023047] flex-grow"></div>
        </div>
        <div className=" flex flex-col items-center md:flex-row md:justify-center text-[#023047]">
          <div className=" w-full md:w-[55%]">
            <p className=" mb-4 font-light">
              I am a dedicated front-end developer, I bring a wealth of experience and expertise to every project I work on. I am skilled at creating engaging, responsive web applications that are both functional and visually appealing using technologies like <span className=" font-bold">NextJs, ReactJs, TypeScript, Redux, TailwindCSS</span> and more.
            </p>
            <p className=" mb-4 font-light">
              My passion for programming and attention to detail allows me to craft intuitive user interfaces that enhance the user experience. In addition to my technical skills, I am also a strong communicator and collaborator, able to work effectively with both technical and non-technical team members. Whether working independently or as part of a team, I am committed to delivering high-quality work that meets and exceeds project requirements.
            </p>
          </div>
          <div className=" w-full md:w-[35%]">
            <Image src={me} alt="" className=" w-[90%] m-auto border-2 border-[#023047] shadow-md shadow-slate-400 hover:w-[95%] duration-700" />
          </div>
        </div>
      </div>

      <div className=" w-full h-[50vh] flex flex-col lg:flex-row items-center justify-between px-[40px] bg-black py-3 mb-[20px]">
        <div className=" h-full flex items-start justify-center mb-[20px]">

          <div className=" mt-[30px]">
            <CardStack items={CARDS} />
          </div>

        </div>


        <div className="  lg:flex flex-col items-center justify-center h-[20vh] mt-[20px] ">
          <h1 className=" block mb-[20px] text-lg md:text-4xl text-black dark:text-white max-w-4xl">TechStack</h1>
          <div className=" w-full flex">
            {/* <AnimatedTooltip items={people} /> */}
            <div className="h-[40vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                Testimonials
              </h1>
              <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" block mt-[200px] lg:mt-[50px]">
        <Timeline data={data} />
      </div>

      <div className="flex flex-row items-center justify-center py-20 h-[65vh]   lg:h-screen md:h-auto bg-white relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          >
            <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Contact me from anywhere accross the world
            </h2>
            {/* <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              This globe is interactive and customizable. Have fun with it, and
              don&apos;t forget to share it. :
            </p> */}
            <div className=" w-full flex items-center justify-center">
              <Link target="blank" href="mailto:rotimioluwatimilehin19@gmail.com" className=" w-fit m-auto flex items-center justify-center mx-3 px-6 py-2 rounded-md border-[#023047] border-2 text-[#023047] hover:text-white hover:bg-[#023047] duration-500"><BsMailbox className=" mx-2" />Email</Link>
            </div>
          </motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>


    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Bosede Rotimi",
    designation: "President of RC Bida Central",
    content: (
      <p>
        Oluwatimilehin is an amazing, <Highlight>determined and intelligent</Highlight> developer
        he is always respectful and never gives up.
      </p>
    ),
  },
  {
    id: 1,
    name: "Ayeniko Emmanuel",
    designation: "Senior Software Engineer",
    content: (
      <p>
        Oluwatimilehin's best quality is
        <Highlight>his speed</Highlight> and from my experience working
        with him on <Highlight>dozens of projects</Highlight> I can categorically say
        he faces every challenge head on.
      </p>
    ),
  },
  {
    id: 2,
    name: "Luqman Lawal",
    designation: "Lead Developer",
    content: (
      <p>
        The best way to explain working with Oluwatimilehin is to say
        <Highlight>he's talented</Highlight> his ability to generate solutions rapidly is a testament to his
        <Highlight>problem solving and creativity skills.</Highlight> He is a <Highlight>huge asset </Highlight>in my opinion.
        club.
      </p>
    ),
  },
];






const people = [
  {
    id: 1,
    name: "ReactJs",
    designation: "",
    image:
      reactLogo
  },
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "",
    image:
      tailwindLogo
  },
  {
    id: 3,
    name: "Redux Toolkit",
    designation: "",
    image:
      reduxLogo
  },
  {
    id: 4,
    name: "Typescript",
    designation: "",
    image:
      typescriptLogo
  },
  {
    id: 5,
    name: "JavaScript",
    designation: "",
    image:
      javscriptLogo
  },
  {
    id: 6,
    name: "Vite",
    designation: "",
    image:
      viteLogo
  },
  {
    id: 7,
    name: "NextJs",
    designation: "",
    image:
      nextjsLogo
  },
  {
    id: 8,
    name: "HTML",
    designation: "",
    image:
      htmllogo
  },
  {
    id: 9,
    name: "CSS",
    designation: "",
    image:
      csslogo
  },
  {
    id: 10,
    name: "Vercel",
    designation: "",
    image:
      vercelLogo
  },
  {
    id: 11,
    name: "BitBUcket",
    designation: "",
    image:
      bitbucketlogo
  },
  {
    id: 12,
    name: "Github",
    designation: "",
    image:
      githublogo
  },
  {
    id: 13,
    name: "Firebase",
    designation: "",
    image:
      Firebase
  },
  {
    id: 14,
    name: "ExpressJs",
    designation: "",
    image:
      expressJs
  },
];