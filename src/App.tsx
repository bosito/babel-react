import claro_video from "./assets/claro_video.png";
import { CardChannelDemo } from "./components";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen  flex flex-col">
        <div className="flex flex-col flex-1 bg-slate-900">
          <section className="flex flex-col justify-center items-center">
            <img src={claro_video} alt="claro video" className="w-56" />
            <h3 className="text-white">Mostrar EPG</h3>
          </section>
          <section className="flex flex-col">
            <div className="flex flex-row gap-3 flex-wrap justify-center">
              <CardChannelDemo alt="claro video" src={claro_video} />
              <CardChannelDemo alt="claro video" src={claro_video} />
              <CardChannelDemo alt="claro video" src={claro_video} />
              <CardChannelDemo alt="claro video" src={claro_video} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
