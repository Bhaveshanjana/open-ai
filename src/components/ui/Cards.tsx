"use client";
import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaChartBar } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { sans } from "@/utils/fonts";

interface FilterItem {
  label: string;
  icon: ReactNode;
}

interface CardData {
  title: string;
  filters: FilterItem[];
}

const cards: CardData[] = [
  {
    title: "Filter By: COMPETITION",
    filters: [
      {
        label: " High",
        icon: <FaChartLine />,
      },
      {
        label: "Moderate",
        icon: <FaChartBar />,
      },
      {
        label: "Low",
        icon: <FaChartLine />,
      },
      {
        label: "High",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Filter By: ACTIVITY",
    filters: [
      {
        label: "Highest",
        icon: <FaChartLine />,
      },
      {
        label: "High",
        icon: <FaChartLine />,
      },
      {
        label: "Moderate",
        icon: <FaChartBar />,
      },
      {
        label: "Low",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Filter By: Tech Stack",
    filters: [
      {
        label: "NextJs",
        icon: <RiNextjsFill />,
      },
      {
        label: "TypeScript",
        icon: <TbBrandTypescript />,
      },
      {
        label: "ExpressJs",
        icon: <SiExpress />,
      },
    ],
  },
  {
    title: "Filter By: TRAFFIC",
    filters: [
      {
        label: "High Traffic",
        icon: <FaChartLine />,
      },
      {
        label: "Low Traffic",
        icon: <FaChartLine />,
      },
      {
        label: "Medium",
        icon: <FaChartBar />,
      },
    ],
  },
];

export default function AnimatedCardStack() {
  const [cardOrder, setCardOrder] = useState(cards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prev) => {
        const newOrder = [...prev];
        const firstCard = newOrder.shift();
        if (firstCard) newOrder.push(firstCard);
        return newOrder;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[400px] aspect-[16/10] flex items-center justify-center mx-auto">
      {cardOrder.map((card, index) => {
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: index * 10,
              scale: 1 - index * 0.02,
            }}
            transition={{ duration: 0.2 }}
            className="absolute rounded-4xl p-5 md:py-9 w-full bg-gradient-to-t from-[#212121f1] to-[#2e2c2c24] backdrop-blur-2xl border border-white/10 shadow-xl"
            style={{
              zIndex: cards.length - index,
            }}
          >
            {/* Title */}
            <h3
              className={`text-white mb-4 flex items-center gap-1 text-base sm:text-lg ${sans}`}
            >
              <span className="text-green-400">{card.filters[0].icon}</span>
              {card.title}
            </h3>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {card.filters.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs sm:text-sm  text-white border border-[#ffffff26] bg-black/5"
                >
                  <span className={`flex gap-2 items-center ${sans}`}>
                    {f.icon} {f.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
