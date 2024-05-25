import { motion, AnimatePresence } from "framer-motion";
import {
  CardChannel,
  CardChannelSchedule,
  HeaderChannelInfo,
  Loading,
} from "./components";
import { useApgChannel } from "./hooks";
import { ISelectedChannel } from "../../interfaces";

interface IModal {
  show: boolean;
  onCloseModal?: () => void;
}

const Modal = ({ show, onCloseModal }: IModal) => {
  // that is other way to do the fetch in react more simple
  // const { isLoading } = useFetch();

  // inside of that hook we will add all the logic from modal,
  // the idea is to be agnostic with logic and the visual elements
  const { isLoading, channels, selectedChannel, setSelectedChannel } =
    useApgChannel();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-screen h-screen max-h-screen z-10 flex flex-col absolute top-0 left-0"
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <HeaderChannelInfo
                onCloseModal={onCloseModal}
                selectedChannel={selectedChannel}
              />
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
                    {channels.map(({ events, id, image }) => {
                      return (
                        <div key={id} className="flex flex-row w-full min-h-24">
                          {events.map((tvEvent, index) => {
                            const selectedEvent: ISelectedChannel = {
                              ...tvEvent,
                              channelImageUrl: image,
                            };

                            return (
                              <CardChannelSchedule
                                key={tvEvent.id}
                                index={index}
                                onClick={() =>
                                  setSelectedChannel(selectedEvent)
                                }
                                wasSelected={selectedChannel?.id === tvEvent.id}
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
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
