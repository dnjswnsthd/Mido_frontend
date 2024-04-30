import { QueryFunction } from "@tanstack/react-query";

export const getMisigdoItemByMisigdoId: QueryFunction<any, [_1:string, _2: string]> = async ({queryKey}) => {
  const [_1, misigdoId] = queryKey;
  const queryParams = new URLSearchParams();
  queryParams.append("groupId", misigdoId as string);

  const response = await fetch(`http://localhost:3001/api/misigdo/item?${queryParams}`, {
    method: "GET",
    headers: { 
      "Content-Type": "application/json", 
      "Access-Control-Allow-Origin": "*", 
      mode: "no-cors" },
  });
  if(!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}