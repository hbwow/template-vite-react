// const freeSwagger = require('free-swagger');
import freeSwagger from 'free-swagger';

freeSwagger({
  // --- fht ---
  source: 'http://192.168.18.212:30978/afas/v3/api-docs?group=fht',
  root: 'src/services/interfaces/fht',

  lang: 'ts',
  typeOnly: true,

  header: `import axios from '@/services/axios';`,
  //   templateFunction: ({
  //     url, // 完整路径 {string}
  //     summary, // 注释 {string}
  //     method, // 请求方法 {string}
  //     name, // api 函数名 {string}
  //     responseType, // 响应值种类，同 axios responseType {string}
  //     pathParams, // 路径参数 {Array<string>}
  //     IQueryParams, // 请求查询参数 ts 类型
  //     IBodyParams, // 请求体参数 ts 类型
  //     IPathParams, // 请求路径参数 ts 类型
  //     IResponse, // 响应参数 ts 类型
  //   }) => {
  //     console.log({
  //       url,
  //       summary,
  //       method,
  //       name,
  //       responseType,
  //       pathParams,
  //       IQueryParams,
  //       IBodyParams,
  //       IPathParams,
  //       IResponse,
  //     });
  //     /**
  //      * ts 代码模版
  //      **/

  //     // debugger
  //     // 可通过 debugger 调试模版

  //     // 处理路径参数 `/pet/{id}` => `/pet/${id}`
  //     const parsedUrl = url.replace(/{(.*?)}/g, '${$1}');

  //     // 有 query 和 body 参数
  //     const multipleParamsCondition = ({ IQueryParams, IBodyParams }) => IQueryParams && IBodyParams;

  //     const firstParamCodeMap = new Map()
  //       // 只有 query 参数，可能有 path 参数
  //       .set(
  //         ({ IQueryParams, IBodyParams }) => IQueryParams && !IBodyParams,
  //         ({ IQueryParams }) => `params: ${IQueryParams},`,
  //       )
  //       // 只有 body 参数，可能有 path 参数
  //       .set(
  //         ({ IQueryParams, IBodyParams }) => IBodyParams && !IQueryParams,
  //         ({ IBodyParams }) => `params: ${IBodyParams},`,
  //       )
  //       // 有 query 和 body 参数，可能有 path 参数
  //       .set(multipleParamsCondition, ({ IQueryParams }) => `queryParams: ${IQueryParams},`)
  //       // 没有 query body 参数，有 path 参数
  //       .set(
  //         ({ IQueryParams, pathParams, IBodyParams }) =>
  //           !IBodyParams && !IQueryParams && pathParams.length,
  //         '_NOOP: Record<string,never>,',
  //       )
  //       // 只有 path 参数
  //       .set(
  //         ({ pathParams }) => pathParams.length,
  //         ({ pathParams, IPathParams }) => `{${pathParams.join(',')}}: ${IPathParams},`,
  //       );

  //     const secondParamCodeMap = new Map()
  //       // 有 path 参数
  //       .set(
  //         ({ pathParams }) => pathParams.length,
  //         ({ pathParams, IPathParams }) => `{${pathParams.join(',')}}: ${IPathParams},`,
  //       )
  //       // 有 query 和 body 参数，有 path 参数
  //       .set(multipleParamsCondition, `_NOOP:{[key:string]: never},`);

  //     const thirdParamCodeMap = new Map()
  //       // 有 query 和 body 参数，有 path 参数
  //       .set(multipleParamsCondition, ({ IBodyParams }) => `bodyParams: ${IBodyParams},`);

  //     const paramCodeMap = new Map()
  //       .set(multipleParamsCondition, 'queryParams,')
  //       .set(({ IQueryParams }) => !!IQueryParams, 'params,');

  //     const dataCodeMap = new Map()
  //       .set(multipleParamsCondition, 'bodyParams,')
  //       .set(({ IBodyParams }) => !!IBodyParams, 'params,');

  //     const createParamCode = (conditionMap, defaultCode = '') => {
  //       let code = defaultCode;
  //       for (const [condition, codeFunction] of conditionMap.entries()) {
  //         const res = condition({
  //           IQueryParams,
  //           IBodyParams,
  //           pathParams,
  //         });
  //         if (res) {
  //           code =
  //             typeof codeFunction === 'string'
  //               ? codeFunction
  //               : codeFunction({
  //                   IQueryParams,
  //                   IBodyParams,
  //                   IPathParams,
  //                   pathParams,
  //                 });
  //           break;
  //         }
  //       }
  //       return code;
  //     };

  //     return `
  //  ${summary ? `// ${summary}` : ''}
  //  export const ${name} = (
  //    ${createParamCode(firstParamCodeMap) /* query | body | NOOP */}
  //    ${createParamCode(secondParamCodeMap) /* path | null */}
  //    ${createParamCode(thirdParamCodeMap) /* body | null */}
  // ) => axios.request<${IResponse || 'any'}>({
  //     url: \`${parsedUrl.replace('//', '/')}\`,
  //     method: "${method}",
  //     params: ${createParamCode(paramCodeMap, '{},')}
  //     data: ${createParamCode(dataCodeMap, '{},')}
  //     ${responseType === 'json' ? '' : `responseType: ${responseType},`}
  // })`;
  //   },
});
