import { Link, useParams } from "react-router-dom";
import sonhos from "../assets/data.js";
const Dream = () => {
  const { id } = useParams();
  const sonho = sonhos.find((s) => s.id === id);
  const quadrinhos = sonho.quadrinho;

  return (
    <div className={`w-full min-h-screen flex flex-col items-center py-5 ${sonho.color_bg}`}>
      
      {/* <div className='w-full flex justify-center'>
        <h1 className="text-2xl w-48 text-center bg-linear-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent mb-3">
            {sonho.nome}
        </h1>
      </div> */}

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

      <Link className='bg-sky-100/80 rounded-lg shadow-lg shadow-indigo-200/40 p-2 w-50 flex justify-center' to="/">
        <p className='text-center bg-linear-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent'>
            Retornar à Home
        </p>
      </Link>
    </div>
  );
};

export default Dream;
