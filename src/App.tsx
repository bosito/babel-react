import claro_video from "./assets/claro_video.png";
import { CardChannelDemo } from "./components";
import { card_channel_mock_data } from "./utils";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen  flex flex-col">
        <div className="flex flex-col md:flex-row-reverse justify-center flex-1 bg-slate-900 px-5">
          <section className="flex flex-col justify-center items-center">
            <img src={claro_video} alt="claro video" className="w-56" />
            <button className="text-white rounded-md bg-slate-500 shadow-lg transition ease-in-out delay-150 hover:scale-105 shadow-slate-500/50 px-5 py-2">
              Mostrar EPG
            </button>
          </section>
          <section className="flex flex-col sm:justify-center mt-24 md:mt-0">
            <div className="flex flex-row  gap-3 flex-wrap justify-center">
              {card_channel_mock_data.map(({ message, id, ...resProps }) => {
                message;
                return <CardChannelDemo key={id} {...resProps} />;
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
