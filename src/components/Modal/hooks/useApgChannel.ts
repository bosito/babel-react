import { useEffect, useState } from "react";
import { useApgChannelQuery } from "../../../store/features/channels/channels";
import {
  formatDate,
  getSevenDaysLater,
  parseDate,
} from "../../../utils/functions";

const useApgChannel = () => {
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const { data, error, isLoading } = useApgChannelQuery(
    {
      device_id: "web",
      device_category: "web",
      device_model: "web",
      device_type: "web",
      device_so: "Chrome",
      format: "json",
      device_manufacturer: "generic",
      authpn: "webclient",
      authpt: "tfg1h3j4k6fd7",
      api_version: "v5.93",
      region: "mexico",
      HKS: "web61144bb49d549",
      user_id: "54343080",
      date_from: dateFrom, // 20210812200256,
      date_to: dateTo, // 20210813200256,
      quantity: 200,
    },
    { refetchOnFocus: true, refetchOnMountOrArgChange: true }
  );

  console.log("data --", data?.response.channels);

  const initialDateFromState = () => {
    const currentDate: Date = new Date();
    const date: string = formatDate(currentDate);

    const dateSevenDaysLater: string = getSevenDaysLater(currentDate);

    setDateFrom(date);
    setDateTo(dateSevenDaysLater);
  };

  const handleGetSevenDaysLater = () => {
    const parseDateFrom: Date = parseDate(dateFrom);
    const dateSevenDaysLater: string = getSevenDaysLater(parseDateFrom);
    setDateTo(dateSevenDaysLater);
  };

  useEffect(() => {
    initialDateFromState();
  }, []);

  return {
    data,
    error,
    isLoading,
    handleGetSevenDaysLater,
  };
};

export default useApgChannel;
