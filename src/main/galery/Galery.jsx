import { useEffect, useRef, useState } from 'react';
import style from './Galery.module.scss';

import firstGal from './photos/firstCaros.png';
import secondGal from './photos/secondCaros.png';
import thirdGal from './photos/thirdCaros.png';
import forthGal from './photos/image.png';
import fifthGal from './photos/fifthCaros.png';
import seventhGal from './photos/sixthCaros.jpeg';
import eigthGal from './photos/eighthCaros.png';

const Galery = ({ left, right }) => {
	const [box, setBox] = useState(null);
	let boxRef = useRef(null);

	useEffect(() => {
		if (box) {
			let width = box.clientWidth;
			box.scrollLeft = box.scrollLeft + width / 1.5;
		}
	}, [right, box]);

	useEffect(() => {
		if (box) {
			let width = box.clientWidth;
			box.scrollLeft = box.scrollLeft - width / 1.5;
		}
	}, [left, box]);

	useEffect(() => {
		const element = boxRef.current;
		setBox(element);
	}, []);

	return (
		<div className={style.productCarousel}>
			<div
				className={style.productContainer}
				ref={boxRef}
			>
				<img src={firstGal} alt='walking on clean sand' />
				<img src={secondGal} alt='white tshirt on grey table' />
				<img
					src={thirdGal}
					alt='North woods in front of cowered with snow mountains'
				/>
				<img src={forthGal} alt='girls face' />
				<img src={fifthGal} alt='old leather boots' />
				<img src={seventhGal} alt='old leather boots' />
				<img src={eigthGal} alt='old leather boots' />
			</div>
		</div>
	);
};

export default Galery;
