export const PREFIX = "https://no23.lavina.tech";
export const USER = {
  signIn: "/myself",
  signUp: "/signup",
};
export const Books = {
  getAll: "/books",
  getByTitle: (title: string) => `/books/${title}`,
  creatBook: "/books",
  patchBook: (id: number) => `/books/${id}`,
  deleteBook: (id: number) => `/books/${id}`,
};
