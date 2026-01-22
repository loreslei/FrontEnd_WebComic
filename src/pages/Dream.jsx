import { Link, useParams } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import sonhos from "../assets/data.js";
import NotFound from "./NotFound.jsx";
import PanelSkeleton from "../components/Skeletons/PanelSkeleton";

const Dream = () => {
  const { id } = useParams();
  const [loadedCount, setLoadedCount] = useState(0);

  const sonho = sonhos.find((s) => s.id === id);

  if (!sonho || sonho.id === "son") {
    return <NotFound />;
  }

  const quadrinhos = sonho.quadrinho;
  const totalPanels = quadrinhos.length;

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const loading = loadedCount < totalPanels;

  const backgroundStyle = {
    backgroundImage: sonho.svg,
    backgroundRepeat: "repeat",
    backgroundBlendMode: "overlay",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={`w-full min-h-screen flex flex-col items-center py-3 ${sonho.color_bg} bg-size-[65px] lg:bg-size-[120px]`}
      style={backgroundStyle}
    >
      {/* INICIO - renderizacao c skeletons */}

      <div className="w-full flex flex-col justify-center items-center my-3 relative">
        {/* Skeleton */}
        {loading &&
          Array.from({ length: totalPanels }).map((_, i) => (
            <PanelSkeleton key={i} />
          ))}

        {/* Quadrinhos */}
        {quadrinhos.map((panel) => (
          <img
            key={panel}
            src={panel}
            alt={panel}
            onLoad={handleImageLoad}
            className={`w-[90%] lg:w-[60%] h-auto transition-all duration-700 ${
              loading
                ? "opacity-0 scale-95 pointer-events-none absolute"
                : "opacity-100 scale-100"
            }`}
          />
        ))}
      </div>

      {/* FIM - renderizacao c skeletons */}

      <Link
        className={`${sonho.color_btn} ${sonho.color_btn_hover} ${sonho.color_btn_text} rounded-full text-white shadow-lg py-2 w-45 flex justify-center items-center transition-all 1s hover:translate-y-0.5`}
        to="/"
      >
        <p class="flex items-center font-bold gap-2 text-lg pl-2">
          Acordar
          <span class="material-symbols-outlined -translate-y-0.5">alarm</span>
        </p>
      </Link>
    </motion.div>
  );
};

export default Dream;
