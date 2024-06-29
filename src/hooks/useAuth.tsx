import { useEffect, useState } from 'react'
import { AccountApi } from '../api/axiosConfig';
import { UseAuthOutputtype } from '../types/commonTypes';
import { getCookie } from 'react-use-cookie';

const useAuth = (): UseAuthOutputtype => {
    const [isAuthenticated , setIsAuthenticated] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(true);

    const accessToken = getCookie('access_token');

    const checkValidAuth = async () => {
        try {
            const response = await AccountApi.instance.get('auth/profile' , {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });
            
            if (response.status === 200 || response.status === 201) {
                setIsAuthenticated(true);
            }
        }
        catch (error) {
            setIsAuthenticated(false);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkValidAuth();
    } , [])

    return {isAuthenticated , loading};
}

export default useAuth