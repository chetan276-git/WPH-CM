import Layout from '../layout';
import Footer from '../common/Footer';
import { getAllEvents } from '../../services/events';
import Iframe from './iframe';

export async function getStaticProps({ params }) {
	const allEvents = await getAllEvents();
	let propData = allEvents.events.filter((event) => event.slug === params.slug);
	return {
		props: {
			propData
		}
	};
}

export async function getStaticPaths() {
	let paths = await getAllEvents();
	paths = paths.events;
	return {
		paths: paths.map((event) => ({
			params: { slug: event.slug }
		})),
		fallback: false
	};
}

const Event = ({ propData }) => {
	return (
		<>
			<Layout>
				<Iframe propData={propData} />
				<Footer />
			</Layout>
		</>
	);
};

export default Event;
