
import axios from 'axios';
import { CompanySearch } from './company'


 interface SearchResponse {
    data : CompanySearch[];
}

export const searchCompanies = async (query: string) => {
debugger;
console.log("🔍 searchCompanies called with:", query);
        try {
            const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/stable/company-screener?apikey=${process.env.FINANCIAL_MODELING_API_KEY}`);
            return data;
        }
        catch (error) {
            if (error) {
                console.error("Axios error searching companies:", error);
                return error;
            }else{
                console.error("Unexpected error searching companies:", error);
                return "An unexpected error occurred while searching for companies.";
            }
        }
 
}

