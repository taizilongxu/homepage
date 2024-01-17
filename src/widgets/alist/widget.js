import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    storage: {
      endpoint: "admin/storage/list",
    },
  },
};

export default widget;
