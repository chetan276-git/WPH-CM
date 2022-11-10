const Iframe = ({ propData }) => {
	return (
		<>
			<iframe
				src={propData[0].url}
				name='test'
				width='100%'
				style={{ height: '100vh' }}
			>
				You need a Frames Capable browser to view this content.
			</iframe>
		</>
	);
};

export default Iframe;
