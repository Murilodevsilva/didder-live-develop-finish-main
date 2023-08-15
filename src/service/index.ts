import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';

const noAuthLink = createHttpLink({
	/* uri: 'http://localhost:4000', */
	uri: 'http://165.232.150.240',
});

const authorization = setContext(async (_, { headers }) => {
	async function getStorageToken() {
		let token;

		try {
			// get the authentication token from local storage if it exists
			token = await AsyncStorage.getItem('token');
		} catch(e) {
			token = null;
		}

		// return the headers to the context so httpLink can read them
		return token;
	}

	let token = await getStorageToken();

	return {
		headers: {
			Authorization: token ? `Bearer ${token}` : "",
		}
	};
});

// Initialize Apollo Client
const client = new ApolloClient({
    link: authorization.concat(noAuthLink),
    cache: new InMemoryCache()
});

export default client;
