// "use client";

// import { useEffect, useState } from "react";
// import { FaChartLine } from "react-icons/fa";
// import { FaChartBar } from "react-icons/fa";

// const cards = [
//   {
//     title: "Filter By: COMPETITION",
//     filters: [
//       {
//         label: "Very High",
//         color: "text-red-500",
//         bg: "bg-red-500/10",
//         icon: <FaChartLine />,
//       },
//       {
//         label: "Very Low",
//         color: "text-green-500",
//         bg: "bg-green-500/10",
//         icon: <FaChartLine />,
//       },
//       {
//         label: "Moderate",
//         color: "text-yellow-500",
//         bg: "bg-yellow-500/10",
//         icon: <FaChartBar />,
//       },
//       {
//         label: "Low",
//         color: "text-blue-500",
//         bg: "bg-blue-500/10",
//         icon: <FaChartLine />,
//       },
//       {
//         label: "High",
//         color: "text-orange-500",
//         bg: "bg-orange-500/10",
//         icon: <FaChartLine />,
//       },
//     ],
//   },
//   {
//     title: "Filter By: TRAFFIC",
//     filters: [
//       {
//         label: "High Traffic",
//         color: "text-orange-500",
//         bg: "bg-orange-500/10",
//         icon: <FaChartLine />,
//       },
//       {
//         label: "Low Traffic",
//         color: "text-blue-500",
//         bg: "bg-blue-500/10",
//         icon: <FaChartLine />,
//       },
//       {
//         label: "Medium",
//         color: "text-yellow-500",
//         bg: "bg-yellow-500/10",
//         icon: <FaChartBar />,
//       },
//     ],
//   },
//   {
//     title: "Filter By: GROWTH",
//     filters: [
//       {
//         label: "Explosive",
//         color: "text-green-500",
//         bg: "bg-green-500/10",
//         icon: <FaChartLine />,
//       },
//       {
//         label: "Stable",
//         color: "text-blue-500",
//         bg: "bg-blue-500/10",
//         icon: <FaChartLine />,
//       },
//     ],
//   },
// ];

// export default function AnimatedCards() {
//   const [index, setIndex] = useState(0);

//   // Automatically change cards
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % cards.length);
//     }, 2000); // 3 sec delay
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-[400px] h-[200px] flex items-center justify-center">
//       {cards.map((card, i) => {
//         const position = (i - index + cards.length) % cards.length;
//         return (
//           <div
//             key={i}
//             className={`absolute transition-all duration-700 ease-in-out rounded-4xl p-8 w-full
//              bg-gradient-to-t from-[#282828] to-[#232222f6] border border-[#ffffff1a] shadow-xl`}
//             style={{
//               transform: `translateY(${position * 10}px) scale(${
//                 1 - position * 0.05
//               })`,
//               opacity: position === 0 ? 1 : 0.5,
//               zIndex: cards.length - position,
//             }}
//           >
//             <div className="-translate-y-4 -translate-x-3">
//               {/* Title */}
//               <h3 className="text-white font-medium mb-2">
//                 <span className="text-blue-400 mr-1">⚙</span> {card.title}
//               </h3>

//               {/* Filters */}
//               <div className="flex flex-wrap gap-2">
//                 {card.filters.map((f, idx) => (
//                   <span
//                     key={idx}
//                     className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-sm font-medium ${f.bg} ${f.color}`}
//                   >
//                     {f.icon} {f.label}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaChartBar } from "react-icons/fa";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface FilterItem {
  label: string;
  color: string;
  bg: string;
  icon: Icon;
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
        color: "text-red-500",
        bg: "bg-red-500/10",
        icon: <FaChartLine />,
      },
      {
        label: "Moderate",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        icon: <FaChartBar />,
      },
      {
        label: "Low",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        icon: <FaChartLine />,
      },
      {
        label: "High",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Filter By: ACTIVITY",
    filters: [
      {
        label: "Highest",
        color: "text-green-500",
        bg: "bg-green-500/10",
        icon: <FaChartLine />,
      },
      {
        label: "High",
        color: "text-green-500",
        bg: "bg-green-500/10",
        icon: <FaChartLine />,
      },
      {
        label: "Moderate",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        icon: <FaChartBar />,
      },
      {
        label: "Low",
        color: "text-green-500",
        bg: "bg-green-500/10",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Filter By: TRAFFIC",
    filters: [
      {
        label: "High Traffic",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        icon: <FaChartLine />,
      },
      {
        label: "Low Traffic",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        icon: <FaChartLine />,
      },
      {
        label: "Medium",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
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
    <div className="relative w-[420px] h-[220px] flex items-center justify-center">
      {cardOrder.map((card, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: index * 10,
              scale: 1 - index * 0.05,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute rounded-3xl p-7 w-full bg-gradient-to-t from-[#212121f1] to-[#2e2c2c24] backdrop-blur-2xl border border-white/10 shadow-xl`}
            style={{
              zIndex: cards.length - index,
            }}
          >
            {/* Title */}
            <h3 className="text-white font-medium mb-4 flex items-center gap-1">
              <span className="text-green-400">{card.filters[0].icon}</span>{" "}
              {card.title}
            </h3>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {card.filters.map((f, idx) => (
                <span
                  key={idx}
                  className={`flex items-center gap-1 px-3 py-0.5 rounded-lg text-sm font-medium ${f.bg} ${f.color}`}
                >
                  {f.icon} {f.label}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
