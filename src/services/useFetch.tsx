import { useEffect, useState } from "react";
import axios from "axios";
import { TPoint } from "../models/types";
import AveragePoints from "./AveragePoints";
import { AVAILABLE_COUNTRIES } from "../models/constants";

const useFetch = (url: string, selectedPage: string) => {
  const [fetchedData, setFetchedData] = useState<TPoint[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataForSingleCountry = (url: string) => {
      (async function () {
        try {
          setLoading(true);
          const response = await axios.get(url);
          setFetchedData(response.data);
        } catch (error: any) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    };

    const fetchDataForYugoslavia = async (url: string) => {
      let baseRequestUrl = url.slice(0, -2);
      let requestUrls = AVAILABLE_COUNTRIES.reduce(
        (filtered: string[], country) => {
          if (
            country.hasOwnProperty("formedYugoslavia") &&
            country.formedYugoslavia
          ) {
            let request = baseRequestUrl + country.isoCode;
            filtered.push(request);
          }
          return filtered;
        },
        [],
      );

      try {
        setLoading(true);
        // TODO - needs refactoring
        let dataFromAllResponses: TPoint[][] = await Promise.all([
          axios.get(requestUrls[0]).then((r) => r.data),
          axios.get(requestUrls[1]).then((r) => r.data),
          axios.get(requestUrls[2]).then((r) => r.data),
          axios.get(requestUrls[3]).then((r) => r.data),
          axios.get(requestUrls[4]).then((r) => r.data),
          axios.get(requestUrls[5]).then((r) => r.data),
        ]);
        setFetchedData(AveragePoints(dataFromAllResponses, selectedPage));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Handling the Yugoslavia exception - when Yugoslavia is selected, we
    // must fetch data for all current countries that made up Yugoslavia and
    // average them out because the API doesn't offer this data directly
    if (url.indexOf("/YU") !== -1) {
      fetchDataForYugoslavia(url);
    } else {
      fetchDataForSingleCountry(url);
    }
  }, [selectedPage, url]);

  return { fetchedData, loading };
};

export default useFetch;
