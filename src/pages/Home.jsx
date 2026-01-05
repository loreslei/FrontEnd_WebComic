import sonho from "../assets/data";
import Door from "../components/Door";

const Home = () => {
  return (
    <>
    <h1 class="text-2xl text-pink-500">Home</h1>
    <div class='w-full h-screen flex justify-center'>
      <div class='flex flex-row gap-15'>
      {sonho.map((sonho) => {
        return <Door url={sonho.id} img={sonho.url_imagem} title={sonho.nome} />;
      })}
      </div>
    </div>
      
    </>
  );
};

export default Home;
