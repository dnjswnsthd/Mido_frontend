import { QueryFunction } from "@tanstack/react-query";

export const getMapListByKeyword: QueryFunction<any, [_1: string, _2: number, _3: string]> = async ({queryKey}) => {
    const [_1, page, keyword] = queryKey;
    const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
    const queryParams = new URLSearchParams();
    queryParams.append("userId", userId);
    queryParams.append("search", keyword);
    queryParams.append("page", page.toString());

    const response = await fetch(`http://localhost:3001/api/map/addressList?${queryParams}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
    });

    if(!response.ok) throw new Error('Failed to fetch data')
    return response.json();
}