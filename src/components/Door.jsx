import { Link } from "react-router-dom";

const Door = (props) => {
  return (
    <Link to={`/dream/${props.url}`} class="card rounded-xl shadow-indigo-300/30 shadow-xl w-64 h-80 mt-5 gap-3 flex flex-col gap-5 hover:translate-y-2 transition-all 1s">
      <div class="card-img w-full h-70/100 overflow-hidden">
        <img class="rounded-t-xl object-cover w-full h-full" src={props.img} alt={props.title} />
      </div>
      <p
        class="text-center text-lg text-indigo-500 hover:bg-linear-to-r from-fuchsia-500 to-indigo-500 hover:bg-clip-text hover:text-transparent hover:font-bold hover:text-xl transition-all 1s" >
        {props.title}
      </p>
    </Link>
  );
};

export default Door;
