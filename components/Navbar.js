import Image from "next/image"
import React from "react"
import logo from "../assets/images/cric.webp"
import search from "../assets/images/ic_search.svg"
import editpen from "../assets/images/editpen.svg"
import hamburger from "../assets/images/hamburger.svg"
import notification from "../assets/images/ic_notification.svg"
import style from "../assets/scss/navbar.module.scss"
import Link from "next/link"

const Navbar = () => {
	return (
		<div className={`${style.navbar}`}>
			<div className={style.navbar_left}>
				<Link legacyBehavior href="/">
					<Image
						src={logo}
						alt="crictracker"
						objectFit="contain"
						width={160}
						className={style.navbar_logo}
					/>
				</Link>
				<div className={style.navbar_dropdown__container}>
					<select className={style.navbar_dropdown}>
						<option value="">Eng</option>
					</select>
				</div>
			</div>
			<div className={style.navbar_right}>
				<div className={style.navbar_btn__filled}>
					<span>SignIn</span>
				</div>
				<Image src={search} alt="search" />
				<div className={style.navbar_hamburger}>
					<Image src={hamburger} alt="hamburger" />
				</div>
			</div>
		</div>
	)
}

export default Navbar
