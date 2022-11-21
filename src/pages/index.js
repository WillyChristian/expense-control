import useSWR from 'swr';

// components
import { Body } from './styles/_index';
import Content from './components/regions/Content';
import Sidebar from './components/regions/Sidebar';

import LoadPage from './components/Load';
import ErrorPage from './components/Error/erro';

function Home() {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error } = useSWR('/api/get-data', fetcher);

	if (error) return <ErrorPage err={error} />;
	if (!data) return <LoadPage />;
	if (data) {
		return (
			<Body>
				<Sidebar data={data} />
				<Content />
			</Body>
		);
	}
}
export default Home;
