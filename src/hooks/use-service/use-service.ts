import { useMutation, useQuery, useQueryClient } from 'react-query';
import { repository } from './repository';

const useService = () => {
  return {
    upload: (file) => {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'xicq5r2v');
      return repository.uploader(data);
    },
  };
};
export { useService };
