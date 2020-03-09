import axios from 'axios';
import debug from 'debug';

const loggerRequest = debug('axios:request');
const loggerData = debug('axios:data');

export const client = axios.create({
  baseURL: 'https://www.wrike.com/api/v4/',
  timeout: 10000,
  headers: {
    Origin: 'https://nod.kz',
    Authorization:
      'Bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjM1NjAxNTYsXCJpXCI6Njk0MTc4MixcImNcIjo0NjE3MTU5LFwidVwiOjc3NDcxMDQsXCJyXCI6XCJVU1wiLFwic1wiOltcIldcIixcIkZcIixcIklcIixcIlVcIixcIktcIixcIkNcIixcIkRcIixcIkFcIixcIkxcIl0sXCJ6XCI6W10sXCJ0XCI6MH0iLCJpYXQiOjE1ODM1MDYzNTZ9.ibFznZ-A5vEmQX8JyegCf_YoSwkDiHG_P5m2qx8HdKo',
  },
  validateStatus: () => true,
});

// client.interceptors.request.use((request) => {
//   console.log('[axios]', request.method, request.url);
//   const paramNames = Object.keys(request.params);
//   paramNames.forEach((paramName) => {
//     console.log('      ', paramName, '=', request.params[paramName]);
//   });
//   return request;
// });
client.interceptors.response.use((res) => {
  const { status, config } = res;
  const { url, method, params } = config;
  const colorStatus = status === 200 ? `✅ 200` : `❌ ${status}`;
  let msg = `${colorStatus} ${method} ${url}`;
  if (params) {
    const paramNames = Object.keys(params);
    paramNames.forEach((paramName) => {
      msg += `\n    ${paramName}=${params[paramName]}`;
    });
  }
  loggerRequest(msg);
  loggerData(JSON.stringify(res?.data, null, 2));

  if (res.status !== 200) {
    if (res?.data?.errorDescription) {
      throw new Error(`WrikeError: ${res?.data?.errorDescription}`);
    }
    if (res?.data?.error) {
      throw new Error(res?.data?.error);
    }
    throw new Error(res.statusText);
  }

  return res;
});

export default client;
