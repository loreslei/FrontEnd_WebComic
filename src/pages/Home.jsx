import { motion } from "framer-motion";
import sonho from "../assets/data";
import Door from "../components/Door";
import Sky from "../components/Sky/Sky";


const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}>
      <Sky />
      <div class="w-full min-h-screen flex justify-center flex-col items-center relative z-10 p-8 gap-15">
        <p class="text-5xl font-bold text-center bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent p-3">
          Roubo de Sonhos
        </p>

        <div class="w-full h-auto flex justify-center">
          <div class="flex flex-col lg:flex-row gap-15 p-4">
            {sonho.map((sonho) => {
              return (
                <Door
                  url={sonho.id}
                  img={sonho.url_imagem}
                  title={sonho.nome}
                />
              );
            })}
          </div>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1scAdungEmNFFL1igy6r9qaQ3quLLmkOZ?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-linear-to-r from-blue-400 to-violet-400 text-zinc-950 text-2xl font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-indigo-300/20 hover:translate-y-1.5 transition-all 1s"
        >
          Adicionar Sonho <span class="material-symbols-outlined translate-y-0.5">partly_cloudy_night</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
