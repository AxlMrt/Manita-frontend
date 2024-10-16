import { useEffect, useState } from 'react';

export function useFetchData(endpoint, initialData) {
    const [data, setData] = useState(initialData);
    const base_url = `${import.meta.env.VITE_API_URL}`;
    const cacheKey = `cache_${endpoint}`;

    useEffect(() => {
        async function fetchData() {
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                setData(JSON.parse(cachedData));
            }

            try {
                const response = await fetch(`${base_url}/${endpoint}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);

                localStorage.setItem(cacheKey, JSON.stringify(result));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [endpoint, base_url]);

    return data;
}
