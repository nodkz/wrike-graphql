import axios from 'axios';
import debug from 'debug';
import qs from 'qs';
import { isObject } from 'util';
import { dedent } from 'graphql-compose';

const loggerRequest = debug('axios:request');
const loggerData = debug('axios:data');

if (!process.env.AUTH_TOKEN) {
  throw new Error(dedent`
    You need to provide AUTH_TOKEN env variable. 
    Get your token here: https://www.wrike.com/frontend/apps/index.html#/api
    Docs: https://developers.wrike.com/oauth-20-authorization/
  `);
}

export const client = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
  headers: {
    Authorization: process.env.AUTH_TOKEN,
  },
  paramsSerializer: (params) => {
    Object.keys(params).forEach((key) => {
      if (Array.isArray(params[key]) || isObject(params[key])) {
        params[key] = JSON.stringify(params[key]);
      }
    });
    return qs.stringify(params);
  },
  validateStatus: () => true,
});

client.interceptors.request.use((request) => {
  let msg = `⬜️  ${request.method} ${request.baseURL}${request.url}`;
  if (request.params && request.paramsSerializer) {
    msg += `?${request.paramsSerializer(request.params)}`;
  }
  loggerRequest(msg);
  return request;
});

client.interceptors.response.use((res) => {
  const { status, config } = res;
  const { url, method, params } = config;
  const colorStatus = status === 200 ? `✅ ` : `❌ ${status}`;
  let msg = `${colorStatus} ${method} ${url}`;
  if (params) {
    Object.keys(params).forEach((paramName) => {
      const val = params[paramName];
      msg += `\n    ${paramName}=${val}`;
    });
  }

  loggerRequest(msg);
  if (status !== 200 && loggerRequest.enabled) {
    // display error with regular request
    loggerRequest(JSON.stringify(res?.data, null, 2));
  } else {
    loggerData(JSON.stringify(res?.data, null, 2));
  }

  if (res.status !== 200) {
    if (res?.data?.errorDescription) {
      throw new Error(`WrikeServerError: ${res?.data?.errorDescription}`);
    }
    if (res?.data?.error) {
      throw new Error(res?.data?.error);
    }
    throw new Error(res.statusText);
  }

  return res;
});

export default client;
