import { AnimatePresence, motion } from "framer-motion";
import { Event } from "../../../../interfaces";
import { formatToAmPm } from "../../../../utils/functions";

interface ICardChannelSchedule extends Event {
  index?: number;
  wasSelected?: boolean;
  onClick: () => void;
}

const CardChannelSchedule = ({
  name,
  source_uri,
  date_begin,
  date_end,
  language,
  wasSelected,
  onClick,
}: ICardChannelSchedule) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
        className={`m-1 rounded-md  cursor-pointer  text-white px-5 overflow-clip transition-all ease-custom hover:bg-gray-700 ${
          wasSelected
            ? "bg-gradient-to-r from-gray-800 to-gray-600"
            : "bg-gray-800"
        }`}
      >
        <div className="flex flex-row w-full h-full items-center justify-start">
          {!!source_uri.length && (
            <img
              src={source_uri}
              alt={name}
              className="w-16 h-12 rounded-lg object-cover"
            />
          )}

          <div className="ml-3">
            <h3 className="text-xs">{name}</h3>
            <p className="text-xs w-48">
              {formatToAmPm(date_begin)} - {formatToAmPm(date_end)}
            </p>
            <p className="text-xs">{language}</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 h-6 w-6 transition-all duration-1000 group-hover:translate-x-2"
        >
          <path d="M10.061 19.061L17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
        </svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default CardChannelSchedule;
