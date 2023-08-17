import axios from "axios";

export const getDomains = async (domain: string) => {
    try {
        if (domain && domain.length > 0) {
            const res = await axios.get(`${process.env.BASE_URL}/?rapidapi-key=${process.env.API_KEY}&domain=${domain}`)
            return res.data
        }
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}

