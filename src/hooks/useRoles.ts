import { useQuery } from '@tanstack/react-query';
import { getRoles } from 'src/services/userAdmin';

const useRoles = () => {
  return useQuery({
    queryKey: ['GET_ROLES'],
    queryFn: async () => {
      const { data } = await getRoles();
      return data;
    },
  });
};

export default useRoles;
