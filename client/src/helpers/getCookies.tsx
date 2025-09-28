function getCookies(): Record<string, string> {
  const { cookie } = document;
  let key = "";
  let val = "";
  let res: Record<string, string> = {};
  let curr = "key";
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === ";") {
      res[key] = val;
      curr = "key";
      key = "";
    } else if (cookie[i] === "=") {
      curr = "val";
      val = "";
    } else if (curr === "val") val += cookie[i];
    else if (cookie[i] === " ") continue;
    else key += cookie[i];
  }
  res[key] = val;

  return res as { username: string; token: string };
}

export default getCookies;
