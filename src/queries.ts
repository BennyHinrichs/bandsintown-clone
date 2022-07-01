import { useQuery } from "@sveltestack/svelte-query";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rest.bandsintown.com/",
  headers: {
    "Content-type": "application/json",
  },
});

const getBandUrl = (artistName: string) => `artists/${artistName}?app_id=test`;

export const useGetBand = (artistName: string) => {
  return useQuery(
    ["artistName", artistName],
    () =>
      apiClient.get(getBandUrl(artistName)).then((response) => response.data),
    { enabled: Boolean(artistName) }
  );
};
