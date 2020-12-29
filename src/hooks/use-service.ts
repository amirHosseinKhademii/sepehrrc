import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const useService = ({ config }) => {
  const client = useQueryClient();
  return {
    query: ({ url, onSuccess, onError }) => {
      const queryKey = 'url';
      const fetcher = async () => await axios.get(url);
      return useQuery(queryKey, fetcher, { onError, onSuccess });
    },
    mutation: ({ url }) => {
      const mutatateFn = async (model) => await axios.post('', {});
      return useMutation(mutatateFn, {
        onSuccess: () => {},
        onError: () => {},
        onSettled: () => {},
      });
    },
  };
};
export { useService };
