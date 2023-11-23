import axios from 'axios';

export interface Post {
	id: number;
	userId: number;
	title: string;
	body: string;
}

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// araya girip request gönderilmeden önce yapılacak değer
		console.log('request öncesi', config);
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		console.log('apiden response döndükten sonraki aşama', response);

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

let controller!: AbortController;
console.log('controller0', controller);

// yani signal işlemi ile başlatılan bir request iptal edilebilir.
export const FetchPosts = async (endpoint: string) => {
	console.time('FetchPosts');

	controller = new AbortController();
	console.log('controller1', controller);

	return await axios
		.get<Post[]>(`${baseUrl}/${endpoint}`, {
			headers: { Authorization: 'Bearer asdsadsadsad' },
			signal: controller.signal,
		})
		.then((response) => response.data);
};

export const FetchPostById = async (endpoint: string, id: number) => {
	controller = new AbortController();

	return await axios
		.get<Post>(`${baseUrl}/${endpoint}?id=${id}`, { signal: controller.signal })
		.then((response: any) => {
			return response.data[0];
		});
};

export const cancelSignal = () => {
	console.log('controller2', controller);
	controller.abort(); //sinyali kes
};
