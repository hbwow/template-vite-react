import axios from '@/services/axios';

import { useQuery } from '@tanstack/react-query';

export const useDemoQuery = () => {
  return useQuery({
    queryKey: ['/githubApi/repos/TanStack/query'],
    queryFn: async (): Promise<any> => {
      const { data } = await axios.get('/githubApi/repos/TanStack/query');

      return data;
    },
  });
};
