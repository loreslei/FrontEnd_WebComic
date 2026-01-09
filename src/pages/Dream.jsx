import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import sonhos from "../assets/data.js";
const Dream = () => {
  const { id } = useParams();
  const sonho = sonhos.find((s) => s.id === id);
  if (!sonho) {
    return <div>Sonho não encontrado.</div>;
  }
  const quadrinhos = sonho.quadrinho;
  const backgroundStyle = {
    backgroundImage: sonho.svg,
    backgroundRepeat: 'repeat',
    backgroundSize: '60px', 
    backgroundBlendMode: 'overlay' 
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={`w-full min-h-screen flex flex-col items-center py-5 ${sonho.color_bg}`} style={backgroundStyle}>

      <div className='w-full flex flex-col justify-center items-center my-3'>
        {
          quadrinhos.map((panel) => {
            return <img 
            className='max-w-[90%] h-auto' 
            key={panel}
            src={panel} 
            alt={panel} 
        />
          })
        }
        
      </div>

      <Link className={`${sonho.color_btn} ${sonho.color_btn_hover} ${sonho.color_btn_text} rounded-full text-white shadow-lg py-2 w-45 flex justify-center transition-all 1s hover:translate-y-0.5`} to="/">
        Retornar
      </Link>
    </motion.div>
  );
};

export default Dream;
