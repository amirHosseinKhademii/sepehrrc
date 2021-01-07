import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const useService = () => {
  return {
    onUpload: async (file) => {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'xicq5r2v');
      return await axios.post(
        ' https://api.cloudinary.com/v1_1/dqn0ufzhz/image/upload',
        data
      );
    },
  };
};
export { useService };
