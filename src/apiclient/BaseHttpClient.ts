import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from 'axios';

// interface HttpClient {
// 	get(endPoint: string, headers: AxiosHeaders): Promise<AxiosResponse>;
// 	post(
// 		endPoint: string,
// 		param: any,
// 		headers: AxiosHeaders
// 	): Promise<AxiosResponse>;
// 	put(
// 		endPoint: string,
// 		param: any,
// 		headers: AxiosHeaders
// 	): Promise<AxiosResponse>;

// 	delete(endPoint: string, headers: AxiosHeaders): Promise<AxiosResponse>;
// }

export abstract class BaseClient {
	private axiosRef!: AxiosInstance;
	private baseUrl!: string;

	constructor(baseUrl: string) {
		this.axiosRef = axios;
		this.baseUrl = baseUrl;

		// bütün baseClient dan türüyen http clientların tüm isteklerini araya girip bu sınıf üzerinden dinleyebilirim.
		this.axiosRef.interceptors.request.use(
			function (response: any) {
				// Any status code that lie within the range of 2xx cause this function to trigger
				// Do something with response data
				console.log('baseclient api request sonrası', response);

				if (response.status === 200) {
					// alert('Veri Yüklendi');
					console.timeEnd('FetchPosts');
				}

				return response;
			},
			function (error) {
				// Any status codes that falls outside the range of 2xx cause this function to trigger
				// Do something with response error
				return Promise.reject(error);
			}
		);
	}

	protected get(endPoint: string, headers?: AxiosHeaders) {
		if (headers === undefined) {
			headers = new AxiosHeaders();
			headers = headers?.set('Authorization', `Bearer Token`);
			// tüm get isteklerine merkezi olarak müdehale etmiş olduk
		}

		console.log('headers', headers);
		return this.axiosRef.get(`${this.baseUrl}/${endPoint}`).then((data) => {
			// response yakaladık ara işlem uygulanabilir
			console.log('ara işlem');
			return Promise.resolve(data);
		});
	}

	protected post(endPoint: string, param: any, headers?: AxiosHeaders) {
		return this.axiosRef.post(`${this.baseUrl}/${endPoint}`, param, {
			headers: headers,
		});
	}

	protected put(endPoint: string, param: any, headers?: AxiosHeaders) {
		return this.axiosRef.put(`${this.baseUrl}/${endPoint}`, param, {
			headers: headers,
		});
	}

	protected delete(endPoint: string, headers?: AxiosHeaders) {
		return this.axiosRef.delete(`${this.baseUrl}/${endPoint}`, {
			headers: headers,
		});
	}
}
