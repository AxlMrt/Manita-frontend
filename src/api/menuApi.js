const base_url = `${import.meta.env.VITE_API_URL}`;

export const fetchMenuData = async (endpoint) => {
    const response = await fetch(`${base_url}/${endpoint}`);
    if (!response.ok) throw new Error('Failed to fetch.');

    return response.json();
}