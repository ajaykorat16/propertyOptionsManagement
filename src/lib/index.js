const dev = "http://localhost:8080";
const prod = "http://165.22.120.224:8080";

export const baseURL =
  window.location.hostname.split(":")[0] === "localhost" ||
  window.location.hostname.includes("192")
    ? dev
    : prod;