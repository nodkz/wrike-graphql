import axios from 'axios';
import debug from 'debug';
import qs from 'qs';
import { isObject } from 'util';

const loggerRequest = debug('axios:request');
const loggerData = debug('axios:data');

export const client = axios.create({
  baseURL: 'https://www.wrike.com/api/v4',
  timeout: 10000,
  headers: {
    Authorization:
      'Bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjM1NjAxNTYsXCJpXCI6Njk0MTc4MixcImNcIjo0NjE3MTU5LFwidVwiOjc3NDcxMDQsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkRcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1ODM1MDYzNTZ9.ibFznZ-A5vEmQX8JyegCf_YoSwkDiHG_P5m2qx8HdKo',
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
