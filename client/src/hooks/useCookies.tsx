function useCookies(): Record<string, string> {
  const res: Record<string, string> = {};
  document.cookie.split(";").map(cookie => {
    const key = cookie.split("=")[0].trim();
    const value = cookie.split("=")[1];
    res[key] = value;
  }) 
  return res as { username: string; token: string };
}

export default useCookies;
