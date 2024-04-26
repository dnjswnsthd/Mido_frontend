export const getGroupList = async () => {
  const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
  const queryParams = new URLSearchParams();
  queryParams.append("userId", userId);

  const response = await fetch(`http://localhost:3001/api/group/list?${queryParams}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
  });

  if(!response.ok) throw new Error('Failed to fetch data')
  return response.json();
};
