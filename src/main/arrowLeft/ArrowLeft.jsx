import style from './ArrowLeft.module.scss';

const ArrowLeft = ({ onClick }) => {
	return (
		<svg
			width='76'
			height='76'
			viewBox='0 0 76 76'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={style.arr}
			onClick={onClick}
		>
			<path
				d='M76 38C76 17.0132 58.9868 0 38 0V0C17.0132 0 0 17.0132 0 38V38C0 58.9868 17.0132 76 38 76V76C58.9868 76 76 58.9868 76 38V38Z'
				fill='white'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M42.944 23.4239C42.3569 22.8587 41.4064 22.8587 40.8208 23.4239L28.4046 35.4055C27.2318 36.5372 27.2318 38.3731 28.4046 39.5048L40.9109 51.5757C41.492 52.135 42.4305 52.1426 43.0191 51.5905C43.6212 51.0269 43.6272 50.0976 43.0356 49.5253L31.5894 38.4803C31.0022 37.9138 31.0022 36.9965 31.5894 36.43L42.944 25.4728C43.5311 24.9077 43.5311 23.9904 42.944 23.4239Z'
				fill='#888888'
			/>
		</svg>
	);
};

export default ArrowLeft;
