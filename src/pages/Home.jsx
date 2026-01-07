import sonho from "../assets/data";
import Door from "../components/Door";

const Home = () => {
  return (
    <>
      <div class='w-full min-h-screen flex justify-center flex-col items-center bg-sky-100/10'>
        <div class="w-full flex p-8 justify-center">
          <h1 class="text-4xl w-96 font-bold text-center bg-linear-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Roubo de Sonhos
          </h1>
        </div>
        <div class="w-full h-auto flex justify-center">
          <div class="flex flex-col lg:flex-row gap-15 p-8">
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
      </div>
    </>
  );
};

export default Home;
