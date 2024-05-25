import { IoClose } from "react-icons/io5";

interface ILoading {
  onCloseModal?: () => void;
}

export default function Loading({ onCloseModal }: ILoading) {
  return (
    <section className="h-full w-full flex flex-col bg-gray-700 bg-gradient-to-t from-gray-900 to-transparent">
      <header className="flex flex-row w-full h-full py-2 px-10 justify-between items-center">
        <div className="flex flex-col">
          <div className="space-y-2.5 animate-pulse">
            <div className="flex items-center w-full">
              <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-3.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            </div>
          </div>
          <div className="space-y-2.5 animate-pulse mt-10">
            <div className="flex items-center w-full">
              <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full mt-36">
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full">
              <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-3.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
              <div className="h-3.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[440px]">
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-3.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[360px]">
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-3.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-3.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
          </div>
        </div>

        <div className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          {/* <div className="w-full">
            <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div> */}
        </div>
      </header>
      <footer className="flex w-full h-full"></footer>
      <button
        onClick={onCloseModal}
        className="absolute top-5 sm:top-10 right-2 sm:right-10 sm:h-14 sm:w-14 h-10 w-10 rounded-full text-white flex justify-center items-center cursor-pointer z-20 bg-slate-500/50"
      >
        <IoClose size={25} />
      </button>
    </section>
  );
}
