
const backendDomin: string = "http://localhost:8080"

interface ApiConfig {
    url: string;
    method: "get" | "post" | "put" | "delete";
  }

  const SummaryApi: Record<string, ApiConfig> = {
    register: {
      url: `${backendDomin}/api/register`,
      method: "post",
    },
    signIn: {
      url: `${backendDomin}/api/signin`,
      method: "post",
    },
    current_user: {
      url: `${backendDomin}/api/user-details`,
      method: "get",
    }
};

export default SummaryApi