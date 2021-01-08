import axios from 'axios';

const uploader = async (model) =>
  await axios.post(
    ' https://api.cloudinary.com/v1_1/dqn0ufzhz/image/upload',
    model
  );

export const repository = { uploader };
