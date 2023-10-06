import type { Repositories } from "../app/models/i-repositories";

export async function getRepositories(
  username: string
): Promise<Repositories[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.GIT_CLIENT_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = (await response.json()) as Repositories[];
  return data;
}
