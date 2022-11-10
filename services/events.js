const BASE_URL = 'http://localhost:6789/api/v1';
export const getAllEvents = async () => {
	const response = await fetch(`${BASE_URL}/event`).then((res) => res.json());
	return response;
};
