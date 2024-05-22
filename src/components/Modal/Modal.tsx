const Modal = () => {
  return (
    <div className="w-screen h-screen  flex flex-col">
      <section className="h-2/5 bg-black w-full flex">
        <header></header>
      </section>
      <section className="flex flex-row flex-1 bg-slate-500">
        <div className="flex w-1/5 h-full bg-red-500"></div>
        <div className="flex flex-1 bg-red-700 "></div>
      </section>
    </div>
  );
};

export default Modal;
