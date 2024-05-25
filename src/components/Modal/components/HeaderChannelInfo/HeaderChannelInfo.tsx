import { IoClose } from "react-icons/io5";
import { GrChannel } from "react-icons/gr";

import { SelectedChannelState } from "../../../../interfaces";
import { formatToAmPm } from "../../../../utils/functions";
import { AnimatePresence, motion } from "framer-motion";

interface IHeaderChannelInfo {
  onCloseModal?: () => void;
  selectedChannel?: SelectedChannelState;
  handleGetSevenDaysLater?: () => void;
}

const HeaderChannelInfo = ({
  onCloseModal,
  selectedChannel,
}: IHeaderChannelInfo) => {
  // eslint-disable-next-line no-extra-boolean-cast
  const imageUrl = Boolean(selectedChannel?.source_uri.length)
    ? selectedChannel?.source_uri
    : selectedChannel?.channelImageUrl;
  return (
    <section className="h-full w-full flex flex-col bg-gray-700 bg-gradient-to-t from-gray-900 to-transparent">
      <button
        onClick={onCloseModal}
        className="absolute top-5 sm:top-10 right-2 sm:right-10 sm:h-14 sm:w-14 h-10 w-10 rounded-full text-white flex justify-center items-center cursor-pointer z-20 bg-slate-500/50"
      >
        <IoClose size={25} />
      </button>
      <header className="flex flex-row w-full h-full py-2 px-10 justify-between items-center">
        <AnimatePresence>
          {!selectedChannel ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col w-full h-full items-center justify-center"
            >
              <h2 className="text-white text-xl">
                Selecciona un canal para ver
              </h2>
              <GrChannel size={100} color="white" />
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col w-1/2"
              >
                <h2 className="text-white font-bold">ESTÁS VIENDO</h2>
                <h3 className="text-white font-sans">
                  {selectedChannel?.name}
                </h3>
                <p className="text-xs w-48 text-white">
                  {!!selectedChannel &&
                    formatToAmPm(selectedChannel.date_begin)}{" "}
                  -{" "}
                  {!!selectedChannel && formatToAmPm(selectedChannel.date_end)}
                </p>
                <p className="text-white font-sans text-sm mt-5">
                  {selectedChannel?.description}
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={imageUrl}
                alt=""
                className="w-96 h-60 rounded-md bg-gray-800"
              />
            </>
          )}
        </AnimatePresence>
      </header>
      <footer className="w-full h-10">
        <button></button>
      </footer>
    </section>
  );
};

export default HeaderChannelInfo;
