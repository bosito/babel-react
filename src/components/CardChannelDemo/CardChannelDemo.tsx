interface ICardChannelDemo {
  src: string;
  alt: string;
}

function CardChannelDemo({ alt, src }: ICardChannelDemo) {
  return (
    <div className="w-32 bg-slate-800 shadow-lg shadow-slate-800/45 h-32 rounded-xl drop-shadow-md">
      <div className=" flex w-full h-full bg-gradient-to-t from-gray-500 to-transparent rounded-xl">
        <img
          src={src}
          alt={alt}
          className="rounded-xl w-full h-full object-fill"
        />
      </div>
    </div>
  );
}

export default CardChannelDemo;
