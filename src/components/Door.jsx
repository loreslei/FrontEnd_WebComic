import { Link } from "react-router-dom";

const Door = (props) => {
  return (
    <Link to={`/dream/${props.url}`} class="">
      <div class="card-img max-w-72 overflow-hidden rounded-xl bg-white shadow-indigo-300/10 shadow-xl mt-5 flex flex-col hover:translate-y-2 transition-all 1s items-center justify-center p-3">
        <img class="object-cover w-full h-full" src={props.img} alt={props.title} />
      </div>
    </Link>
  );
};

export default Door;
