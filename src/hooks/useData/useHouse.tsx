import { useQuery } from "react-query";
import { getAllAdvertisements } from "../../api/requests";

const useHouses = () => {
    return useQuery(
        ['get-advertisements'],
        () => getAllAdvertisements(), 
        {
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            cacheTime: 10000,
            select: data => data.data,
        }
    )
}

export default useHouses;