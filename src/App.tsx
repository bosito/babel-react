import { useState } from "react";
import claro_video from "./assets/claro_video.png";
import { Button, CardChannelDemo } from "./components";
import { card_channel_mock_data } from "./utils";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="w-screen h-screen  flex flex-col">
        <div className="flex flex-col md:flex-row-reverse justify-center flex-1  bg-gray-900 px-5">
          <section className="flex flex-col md:w-1/4 justify-center items-center">
            <img src={claro_video} alt="claro video" className="w-56" />
            <Button title="Mostrar EPG" onClick={handleToggleModal} />
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
