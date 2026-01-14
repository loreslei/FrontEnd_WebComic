import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const WarningToast = ({ message, onClose }) => {
  return (
    <div className="fixed top-10 right-0 left-0 mx-auto z-50 flex items-center w-full max-w-sm p-4 space-x-3 text-amber-800 bg-amber-50 border-l-4 border-amber-400 rounded-lg shadow-lg animate-bounce-in">
      <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-amber-500 bg-amber-100 rounded-lg">
        <span className="material-symbols-outlined text-xl">warning</span>
      </div>
      <div className="pl-2 text-sm font-normal">
        <div className="font-bold text-lg mb-1">Ooof indisponível</div>
        Aguarde maluzita para mais atualizações
      </div>
    </div>
  );
};

const Door = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const isComplete = props.status === 'complete';

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleClick = (e) => {
    if (!isComplete) {
      e.preventDefault(); 
      setShowAlert(true); 
    }
  };

  const cardClasses = !isComplete 
    ? "card-img max-w-72 overflow-hidden rounded-xl bg-white shadow-xl mt-5 flex flex-col items-center justify-center p-3 opacity-60 grayscale-[50%] transition-all duration-300 cursor-not-allowed"
    : "card-img max-w-72 overflow-hidden rounded-xl bg-white shadow-indigo-300/10 shadow-xl mt-5 flex flex-col hover:translate-y-2 transition-all 1s items-center justify-center p-3 cursor-pointer";

  return (
    <>
      {showAlert && (
        <WarningToast 
          message="" 
          onClose={() => setShowAlert(false)} 
        />
      )}

      <Link 
        to={`/dream/${props.url}`} 
        onClick={handleClick}
        className={!isComplete ? "cursor-default" : ""}
      >
        <div className={cardClasses}>
          <img 
            className="object-cover w-full h-full rounded-lg" 
            src={props.img} 
            alt={props.title} 
          />
        </div>
      </Link>
    </>
  );
};

export default Door;