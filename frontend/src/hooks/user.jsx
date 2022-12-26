import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchJson } from "../lib/api";

const USER_QUERY_KEY = 'user';

export function useUser() {
    const query = useQuery(USER_QUERY_KEY, async () => {
        try {
          return await fetchJson('/api/user');
        } catch (err) {
          return undefined;
        }
      }, {
        cacheTime: Infinity,
        staleTime: 30_000, // ms
      });
      return query.data;
}

export function useSignOut() {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => fetchJson('/api/logout'));
  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
  };
}