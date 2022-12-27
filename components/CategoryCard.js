import React from "react"
import style from "../assets/scss/categorycard.module.scss"
import postImg from "../assets/images/Kevin-Pietersen.webp"
import Image from "next/image"
import verified from "../assets/images/verified.svg"
import share from "../assets/images/shareblue.svg"

const CategoryCard = () => {
	return (
		<div className={style.categorycard}>
			<div className={style.categorycard_breadcrumbs}>
				<span>Home &gt; Series &gt; IPL 2021</span>
				<div className={style.share}>
					<span>Share</span>
					<Image src={share} objectFit="contain" alt="share" />
				</div>
			</div>
			<div className={style.categorycard_heading}>
				<span>IPL 2021</span>
				<div className={style.favorite_btn}>Add to Favorite</div>
			</div>
			<p className={style.categorycard_heading_2}>
				Known as The Wizard or The Magician of hockey for his brilliant ball
				control, Chand played internationally from 1926 to 1949, scoring 570
				goals in 185 matches according to his autobiography, Goal. His birthday,
				29 August, is celebrated as National…
			</p>
			<div>
				<button className={style.readmore}>Read More</button>
			</div>
		</div>
	)
}

export default CategoryCard
