// src/utilities/fetch.js


import { useQuery } from '@tanstack/react-query';

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};

export const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [url],
    queryFn: () => fetchJson(url)
  });

  return [ data, isLoading, error ];
};

//NOTES:
//This file is a utility function that fetches JSON data from a URL.
//It uses the react-query library to manage the data fetching and caching.
//The useJsonQuery hook is a custom hook that wraps the useQuery hook from react-query.
//It takes a URL as an argument and returns the data, isLoading, and error states.
//The fetchJson function is an async function that fetches JSON data from a URL.
//It throws an error if the response is not ok, and returns the JSON data if the response is ok.
//This file is used in the App component to fetch the course data from a JSON file.
