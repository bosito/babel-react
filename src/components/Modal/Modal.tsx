import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { CardChannel, CardChannelSchedule } from "./components";
import { useApgChannel } from "./hooks";
import image_test from "../../assets/avengers.png";
import { format } from "date-fns";
import { formatToAmPm } from "../../utils/functions";

interface IModal {
  show: boolean;
  onCloseModal?: () => void;
}

const Modal = ({ show, onCloseModal }: IModal) => {
  // that is other way to do the fetch in react more simple
  // const { isLoading } = useFetch();

  // inside of that hook we will add all the logic from modal,
  // the idea is to be agnostic with logic and the visual elements
  const {
    error,
    isLoading,
    channels,
    handleGetSevenDaysLater,
    selectedChannel,
    setSelectedChannel,
  } = useApgChannel();

  console.log("channels --°", channels);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-screen h-screen max-h-screen z-10 flex flex-col absolute top-0 left-0"
        >
          <section className="h-full w-full flex flex-col bg-gray-600 bg-gradient-to-t from-gray-900 to-transparent">
            <button
              onClick={onCloseModal}
              className="absolute top-5 sm:top-10 right-2 sm:right-10 sm:h-14 sm:w-14 h-10 w-10 rounded-full text-white flex justify-center items-center cursor-pointer z-20 bg-slate-500/50"
            >
              <IoClose size={25} />
            </button>
            <header className="flex w-full h-full"></header>
            <footer className="w-full h-10"></footer>
          </section>
          <section className="flex flex-col h-full relative  bg-gray-900 overflow-auto scroll-smooth">
            <div className="flex flex-row h-full">
              <section className="flex min-w-[20%] h-full w-1/5 flex-col sticky top-0 left-0 bg-gray-900 ">
                {channels.map(({ id, image, name, number }) => {
                  return (
                    <CardChannel
                      key={id}
                      altImage={name}
                      channelImageUrl={image}
                      numberChannel={number}
                    />
                  );
                })}
              </section>
              <section className="flex flex-col flex-1">
                {channels.map(({ events, id }) => {
                  return (
                    <div key={id} className="flex flex-row w-full min-h-24">
                      {events.map((tvEvent, index) => {
                        return (
                          <CardChannelSchedule
                            key={tvEvent.id}
                            index={index}
                            {...tvEvent}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </section>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
