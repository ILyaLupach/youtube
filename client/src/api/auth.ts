export const login = async (data:{email: string, password: string}) => {
  const response = await fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response
}
