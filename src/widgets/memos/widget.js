import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/v1/{endpoint}",
  proxyHandler: credentialedProxyHandler,
  mappings: {
    stats: {
      endpoint: "users/1/stats",
    },
  },
};
export default widget;
