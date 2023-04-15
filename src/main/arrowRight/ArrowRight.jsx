import style from './ArrowRight.module.scss';

const ArrowRight = ({ onClick }) => {
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
				d='M0 38C0 17.0132 17.0132 0 38 0V0C58.9868 0 76 17.0132 76 38V38C76 58.9868 58.9868 76 38 76V76C17.0132 76 0 58.9868 0 38V38Z'
				fill='white'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M33.056 23.4239C33.6431 22.8587 34.5936 22.8587 35.1792 23.4239L47.5954 35.4055C48.7682 36.5372 48.7682 38.3731 47.5954 39.5048L35.0891 51.5757C34.508 52.135 33.5695 52.1426 32.9809 51.5905C32.3788 51.0269 32.3728 50.0976 32.9644 49.5253L44.4106 38.4803C44.9978 37.9138 44.9978 36.9965 44.4106 36.43L33.056 25.4728C32.4689 24.9077 32.4689 23.9904 33.056 23.4239Z'
				fill='#888888'
			/>
		</svg>
	);
};

export default ArrowRight;
