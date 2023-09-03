import type { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export async function fetcher<T>(url: string, config?: AxiosRequestConfig) {
  const { data } = await axios.get<T>(url, config);
  return data;
}

export async function mutation(url: string, config?: AxiosRequestConfig) {
  const response = await axios(url, {
    method: config?.method ?? 'POST',
    ...config,
  });
  return response.data;
}

type QueryOpt<T, E> = Omit<
  UseQueryOptions<T, E, T, QueryKey>,
  'initialData' | 'queryFn' | 'queryKey'
> & { initialData?: (() => undefined) | undefined };

export default function useFetch<T, E = AxiosError>(
  url: QueryKey,
  options?: QueryOpt<T, E>,
  axiosConfig?: AxiosRequestConfig
) {
  return useQuery<T, E>(
    url,
    () => fetcher<T>(url.join('/'), axiosConfig),
    options
  );
}
