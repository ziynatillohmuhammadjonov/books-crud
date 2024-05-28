import CryptoJS from "crypto-js";

export default function mdHash(
  method: string,
  url: string,
  body: unknown | null,
  userSecret: string
): string {
  const bodyStr = body ? JSON.stringify(body) : "";
  const signstr = `${method}${url}${bodyStr}${userSecret}`;
  return CryptoJS.MD5(signstr).toString();
}
