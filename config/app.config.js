// server base url
export const URL =
  process.env.NEXT_PUBLIC_API_ENDPOINT || "http://127.0.0.1:8000";
// app config
export const AppConfig = () => ({
  app: {
    // server endpoint
    url: URL,
    name: "Next tread",
    slogan: "Next tread",
    meta: {
      description: "Next tread",
      keywords: "Next tread",
    },

    // api endpoint
    apiUrl: `${URL}/api`,
  },
});
