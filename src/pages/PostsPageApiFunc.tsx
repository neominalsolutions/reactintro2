import { useEffect, useState } from 'react';
import { FetchPosts, Post, cancelSignal } from '../apiclient/PostFuncApi';
import { PostApiClient } from '../apiclient/PostApiClient';

export default function PostsPageApiFunc() {
	const [posts, setPosts] = useState<Post[]>([]);
	const postClient = new PostApiClient('https://jsonplaceholder.typicode.com');

	const loadData = async () => {
		//  FetchPosts('/posts').then((data: any) => {
		// 	setPosts(data || []);
		// 	console.log('data', data);
		// });

		// let data = await FetchPosts('/posts'); Func ile veri çekme
		let data = await postClient.getPosts('/posts');

		console.log('api-class-data', data);
		setPosts(data || []);
	};

	useEffect(() => {
		// reusability
		// direkt olarak fetch veya axios koadlrını component içinde yazmıyoruz
		loadData();
		console.log('useEffect');

		// setTimeout(() => {
		// 	cancelSignal();
		// }, 1000);

		return () => {
			// componetten çıkarken network isteği atmış bulundum bu durumda bu isteği sonladırmam lazım
			// componentin domdan çıkış anı clean up function kısmı oludğu için cancelSignal ile var olan network request kopardım.
			// cancelSignal();
		};
	}, []);

	return <>Çekilen Veri adeti: {posts.length}</>;
}
