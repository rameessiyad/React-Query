import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useUserList = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:3000/users');
            return response.data;
        },
        staleTime: Infinity,
        refetchOnWindowFocus: false
    })
};

export const useUserListMutate = () => {
    const query = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            await axios('http://localhost:3000/users', {
                method: 'POST',
                data: {
                    id: 5,
                    name: 'Ramees'
                }
            })
        },
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ['users']
            })
        }
    })
}