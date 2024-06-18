import { useEffect, useState } from 'react'
import { AccountApi } from '../api/axiosConfig';
import { UseAuthOutputtype } from '../types/commonTypes';

const useAuth = (): UseAuthOutputtype => {
    const [isAuthenticated , setIsAuthenticated] = useState<boolean>(false);
    const [loading , setLoading] = useState<boolean>(true)

    const checkValidAuth = async () => {
        try {
            const response = await AccountApi.instance.get('auth/profile' , {
                headers: {
                    Authorization: 'access_token'
                }
            });
            
            if (response.status === 200) {
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