import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { CardChannel } from "./components";
import { useApgChannel } from "./hooks";
interface IModal {
  show: boolean;
  onCloseModal?: () => void;
}

const Modal = ({ show, onCloseModal }: IModal) => {
  // that is other way to do the fetch in react more simple
  //   const { isLoading } = useFetch();

  // inside of that hook we will add all the logic from modal,
  // the idea is to be agnostic with logic and the visual elements
  const { data, error, isLoading } = useApgChannel();

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-screen h-screen z-10 flex flex-col absolute top-0 left-0"
        >
          <section className="h-2/5 w-full flex flex-col bg-gradient-to-t from-gray-600 to-transparent">
            <button
              onClick={onCloseModal}
              className="absolute top-5 sm:top-10 right-2 sm:right-10 sm:h-14 sm:w-14 h-10 w-10 rounded-full text-white flex justify-center items-center cursor-pointer z-20 bg-slate-500/50"
            >
              <IoClose size={25} />
            </button>
            <header className="flex w-full h-full"></header>
            <footer className="w-full h-10"></footer>
          </section>
          <section className="flex flex-row flex-1 bg-slate-500">
            <section className="flex w-1/5 h-full bg-red-500">
              {/* <div className="w-full h-24 bg-slate-400 flex items-center px-5 flex-row">
                  <p className="text-white text-2xl">1264</p>
                  <img src="" alt="" className="" />
                </div> */}
              {/* <CardChannel /> */}
            </section>
            <section className="flex flex-1 bg-red-700 flex-row"></section>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
