import style from './Navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={style.nav}>
			<ul className={style.ulTop}>
				<li className={style.landing}>LANDING</li>
				<li className={style.nest}>
					<ul className={style.ulNest}>
						<li>Clothes</li>
						<li>Sneakers</li>
						<li>Bags</li>
						<li>Accessorize</li>
						<li className={style.hero}>BUY</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
