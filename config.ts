type Env = "dev" | "prod";

const ENV: Env =
  (process.env.EXPO_PUBLIC_ENV as Env) ?? "dev";

const CONFIG = {
  dev: {
    API_URL: "https://lucien-backend.onrender.com",
    ENABLE_LOGS: true,
  },
  prod: {
    API_URL: "https://api.example.com",
    ENABLE_LOGS: false,
  },
} as const;

export default CONFIG[ENV];
