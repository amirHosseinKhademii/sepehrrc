import { useMutation, useQuery } from 'react-query';
import { repository } from './repository';
import axios from 'axios';
import { request, gql } from 'graphql-request';

const useService = () => {
  return {
    onGet: (props: { url: string; onSuccess?: any; options?: any }) => {
      const { url, onSuccess, options } = props;
      const getter = async () => await axios.get(url);
      return useQuery(`${url}`, getter, {
        onSettled: onSuccess,
        ...(options && options.enabled && { enabled: options.enabled }),
      });
    },
    onPost: (props: { url: string; onSuccess?: any }) => {
      const { url, onSuccess } = props;
      const poster = async (model) => await axios.post(url, model);
      return useMutation(poster, {
        onSettled: onSuccess,
      });
    },
    onPut: (props: { url: string; onSuccess?: any }) => {
      const { url, onSuccess } = props;
      const putter = async (model) => await axios.put(url, model);
      return useMutation(putter, {
        onSettled: onSuccess,
      });
    },
    upload: (file) => {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'xicq5r2v');
      return repository.uploader(data);
    },
    useStyles: async () =>
      await request(
        'https://api-amirgraphql-v3.herokuapp.com/',
        gql`
          query {
            getStyles {
              style
            }
          }
        `
      ),
  };
};
export { useService };
