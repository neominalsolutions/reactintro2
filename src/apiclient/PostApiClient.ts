import { AxiosHeaders } from 'axios';
import { BaseClient } from './BaseHttpClient';
import { Post } from './PostFuncApi';

export class PostApiClient extends BaseClient {
	/**
	 *
	 */
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(baseUrl: string) {
		super(baseUrl);
	}

	getPosts(endPoint: string, headers?: AxiosHeaders) {
		console.log('getPosts');
		return super.get(endPoint, headers).then((response) => {
			return response.data as Post[];
		});
	}

    getPostWitComments(){
        
    }

    createPost() {

    }
}
