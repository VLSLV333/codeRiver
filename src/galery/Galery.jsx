import style from './Galery.module.scss';

import firstGal from './photos/firstCaros.png';
import secondGal from './photos/secondCaros.png';
import thirdGal from './photos/thirdCaros.png';
import forthGal from './photos/image.png';
import fifthGal from './photos/fifthCaros.png';

const Galery = ({ move }) => {
	return (
		<div className={style.container}>
			<div className={`${style.arr} ${style.leftArr}`}></div>
			<div
				className={style.slider}
				style={{
					transform: `translateX(-${move}%)`,
				}}
			>
				<img src={firstGal} alt='walking on clean sand' />
				<img src={secondGal} alt='white tshirt on grey table' />
				<img
					src={thirdGal}
					alt='North woods in front of cowered with snow mountains'
				/>
				<img src={forthGal} alt='girls face' />
				<img src={fifthGal} alt='old leather boots' />
			</div>
			<div className={`${style.arr} ${style.rightArr}`}></div>
		</div>
	);
};

export default Galery;
