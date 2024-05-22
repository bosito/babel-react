import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const handleFetch = async () => {
    try {
      const response = await axios.get(
        "https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200"
      );
      console.log("response --->", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="w-screen h-screen  flex flex-col">
      <section className="h-2/5 bg-black w-full flex ">
        <header></header>
      </section>
      <section className="flex flex-row flex-1 bg-slate-500">
        <div className="flex w-1/5 h-full bg-red-500"></div>
        <div className="flex flex-1 bg-red-700 "></div>
      </section>
    </div>
  );
};

export default App;
