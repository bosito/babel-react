interface ICardChannel {
  numberChannel: string;
  channelImageUrl: string;
  altImage: string;
}

const CardChannel = ({
  channelImageUrl,
  numberChannel,
  altImage,
}: ICardChannel) => {
  return (
    <div className="w-full h-24 bg-slate-400 flex items-center px-5 flex-row">
      <p className="text-white text-2xl">{numberChannel}</p>
      <img src={channelImageUrl} alt={altImage} className="" />
    </div>
  );
};

export default CardChannel;
