interface iUserToken {
  key: string;
  secret: string;
}

export function getUser(): iUserToken | null {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      return JSON.parse(token);
    } catch (error) {
      console.error("Error parsing token from localStorage", error);
      return null;
    }
  }
  return null;
}

export function setUser(data: iUserToken): void {
  if (data) {
    localStorage.setItem("token", JSON.stringify(data));
  }
}
