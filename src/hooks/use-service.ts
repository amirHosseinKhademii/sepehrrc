/* eslint-disable no-return-await */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { Request } from 'helper';

const useService = ({ config }) => {
  const client = useQueryClient();

  return {
    query: ({ url, onSuccess, onError }) => {
      const queryKey = 'url';
      const fetcher = async () => await Request.get('/add/totdo');
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
