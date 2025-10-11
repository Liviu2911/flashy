import useCookies from "./useCookies";

async function useUser(
  username?: string,
): Promise<{ username: string; token: string } | undefined> {
  const cookies = useCookies();
  if (!cookies.token || !cookies.username) return;

  if (username && username !== cookies.username) return;

  try {
    const res = await fetch("http://localhost:5243/api/account/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
      body: JSON.stringify({
        username: username ? username : cookies.username,
      }),
    });

    const json = await res.json();
    return json.ok;
  } catch (e) {
    console.log(e);
  }
}

export default useUser;
