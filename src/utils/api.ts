import cookies from "./cookies";
import config from "../config.json";

function request(route: string, options: RequestInit, extended?: boolean):Promise<Response>{
    if (!options.headers)
        options.headers = {};
    if (options.body && (options.headers as any)['type'] !== 'multipart/form-data')
        options.headers = {...options.headers, 'Content-Type':'application/json'};
    const auth=cookies.get('auth');

    if(auth)
        options.headers = {...options.headers, 'Authorization': `${auth}`};

    return fetch(`${config.backendURL}/${route}`,options);
}

export default {
    get: (route: string,  options?: RequestInit)=>{
        return request(route,  {...options, method:'GET'})
    },
    post: async(route: string,  options?: RequestInit)=>{
        return request(route,  {...options, method:'POST'})
    },
    delete: async(route: string,  options?: RequestInit)=>{
        return request(route,  {...options, method:'DELETE'})
    },
    patch: async(route: string,  options?: RequestInit)=>{
        return request(route,  {...options, method:'PATCH'})
    },

}