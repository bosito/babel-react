import Atropos from "atropos/react";
interface ICardChannelDemo {
  src: string;
  alt: string;
}

function CardChannelDemo({ alt, src }: ICardChannelDemo) {
  return (
    <Atropos activeOffset={40} shadowScale={1.05}>
      <div className="w-32  h-32 md:w-56 md:h-56 bg-gray-800 shadow-lg shadow-gray-800/45 rounded-xl drop-shadow-md">
        <div className=" flex w-full h-full bg-gradient-to-t from-gray-500 to-transparent rounded-xl">
          <img
            src={src}
            alt={alt}
            className="rounded-xl w-full h-full object-fill"
          />
        </div>
      </div>
    </Atropos>
  );
}

export default CardChannelDemo;
