import style from './Header.module.scss';
import AppAvailable from './appAvailable/AppAvailable';

const Header = () => {
	return (
		<header className={style.main}>
			<div className={style.firstContainer}>
				<AppAvailable />
				<h1 className={style.text}>
					CHOOSE YOUR WINTER{' '}
					<span className={style.hero}>
						LOOK<span className={style.star}>*</span>
					</span>{' '}
					APPAREL
				</h1>
			</div>
			<h2 className={style.creat}>CREATE</h2>
		</header>
	);
};

export default Header;
