import { useQuery } from "react-query";
import { getUserData } from "../../api/requests";

const useUserData = (accessToken: string) => {
    return useQuery(
        ['get-user-data'],
        () => getUserData(accessToken), 
        {
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            cacheTime: 10000,
            select: data => data.data,
        }
    )
}

export default useUserData;