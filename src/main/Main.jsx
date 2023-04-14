import style from './Main.module.scss';
import AppAvailable from './appAvailable/AppAvailable';

const Main = () => {
	return (
		<main className={style.main}>
			<div className={style.firstContainer}>
				<AppAvailable />
				<h1 className={style.text}>
					CHOOSE YOUR WINTER <span className={style.hero}>LOOK<span className={style.star}>*</span></span> APPAREL
				</h1>
			</div>
			<h2 className={style.creat}>CREATE</h2>
		</main>
	);
};

export default Main;
