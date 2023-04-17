import AppAvailable from './appAvailable/AppAvailable';
import BlueLine from '../header/blueLine/BlueLine';

import girlPhoto from './image.png';

import style from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
	const [image, setImage] = useState(null);

	const handleImageUpload = (event) => {
		let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.webp|\.svg)$/i;
		const fileInput = document.getElementById('file');
		const filePath = fileInput.value;

		if (!allowedExtensions.exec(filePath)) {
			return;
		} else {
			const file = event.target.files[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				setImage(reader.result);
			};

			reader.readAsDataURL(file);
		}
	};
	return (
		<header className={style.header}>
			<div className={style.firstContainer}>
				<AppAvailable />
				<BlueLine />
				<h1 className={style.text}>
					CHOOSE YOUR WINTER{' '}
					<span className={`${style.hero} animate__hinge`}>
						LOOK<span className={style.star}>*</span>
					</span>{' '}
					APPAREL
				</h1>
			</div>
			<div className={style.girlContainer}>
				<input
					className={style.file}
					type='file'
					id='file'
					onChange={handleImageUpload}
				/>
				<h2
					className={style.creat}
					style={{ backgroundImage: `url(${image || girlPhoto})` }}
				>
					CREATE
				</h2>
				<img className={style.photo} src={girlPhoto} alt='girl face' />
			</div>
		</header>
	);
};

export default Header;
