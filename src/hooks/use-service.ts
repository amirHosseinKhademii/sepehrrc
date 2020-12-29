// import { useMutation, useQuery, useQueryClient } from "react-query";

// const useService = ({ config }) => {
//   const client = useQueryClient();
//   // const {data}=useQuery('test',async()=>await axios.get('http:ssdsd/sds'))
//   return {
//     query: ({ url, onSuccess, onError }) => {
//       const queryKey = "url";
//       const fetcher = async () => await axios.get(url);
//       return useQuery(queryKey, fetcher, { onError, onSuccess });
//     },
//     mutation: ({ url }) => {
//         const mutatateFn = async (model) => await axios.post("", {

//       });
//       return useMutation(mutatateFn, {
//         onMutate: () => {
//           client.setQueryData(queryKey),
//         },
//         onSuccess: () => {},
//         onError: () => {},
//         onSettled: () => {},
//       });
//     },
//   };
// };
// export { useService };
