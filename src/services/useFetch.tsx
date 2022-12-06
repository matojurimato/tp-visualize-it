import { useEffect, useState } from "react";
import { TPoint } from "../models/types";
import AveragePoints from "./AveragePoints";
import { AVAILABLE_COUNTRIES } from "../models/constants";
import originalFetch from "isomorphic-fetch";
import fetchBuilder from "fetch-retry-ts";

const useFetch = (url: string, selectedPage: string) => {
  const [fetchedData, setFetchedData] = useState<TPoint[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRetryOptions = {
    retries: 5,
    retryDelay: 1000,
    retryOn: [500],
  };
  const fetch = fetchBuilder(originalFetch, fetchRetryOptions);

  useEffect(() => {
    if (url === "") return;
    const fetchDataForSingleCountry = async (url: string) => {
      try {
        setLoading(true);
        const responseData = await fetch(url).then((response) =>
          response.json(),
        );
        setFetchedData(responseData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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
          fetch(requestUrls[0]).then((response) => response.json()),
          fetch(requestUrls[1]).then((response) => response.json()),
          fetch(requestUrls[2]).then((response) => response.json()),
          fetch(requestUrls[3]).then((response) => response.json()),
          fetch(requestUrls[4]).then((response) => response.json()),
          fetch(requestUrls[5]).then((response) => response.json()),
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
