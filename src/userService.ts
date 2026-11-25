
export interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUser(id: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json() as Promise<User>;
}
