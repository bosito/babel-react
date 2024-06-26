import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetch = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse = await axios.get(
        "https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200"
      );
      console.log("response --->", response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    isLoading,
  };
};

export default useFetch;
