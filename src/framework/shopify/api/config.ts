import { ApiConfig } from "@/framework/common/types/api";
import fetchApi from "../utils/fetch-api";

class Config {
  private config: ApiConfig;

  constructor(config: any) {
    this.config = config;
  }
  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchApi,
});

//this returns the config rapper
//which helps returned fetch queries
export function getConfig() {
  return configWrapper.getConfig();
}
