import { Link } from "react-router-dom";
const Dream = () => {
  return (
    <>
      <div class='bg-sky-100/80 rounded-lg shadow-lg shadow-indigo-200/40 p-2 w-50 flex justify-center m-5'>
        <Link class='text-center bg-linear-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent' to="/">Retornar à Home</Link>
      </div>
    </>
  );
};

export default Dream;
