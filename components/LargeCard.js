import React from "react"
import { BsCalendarEvent } from "react-icons/bs"
import { MdOutlineWatchLater } from "react-icons/md"
import style from "../assets/scss/largecard.module.scss"
import Clamp from "react-multiline-clamp"
import PropTypes from "prop-types"
import moment from "moment"
import Image from "next/image"
import oImg from "../assets/images/Kevin-Pietersen.webp"
import Link from "next/link"

const LargeCard = ({ data, sName }) => {
	const { sTitle, dPublishDate, oImg } = data
	const matchDate = moment(dPublishDate).format("D MMM YYYY")
	const timer = moment(dPublishDate).fromNow()
	const imgURL = oImg?.sUrl

	return (
		<div className={style.largecard}>
			<Link legacyBehavior passHref href={`/${data?.oSeo?.sSlug}`}>
				<a className={style.link}>
					<div className={style.largecard_img}>
						<Image
							src={
								imgURL.includes("https://www.crictracker.com/")
									? imgURL
									: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
							}
							alt="img"
							height="80"
							width="128"
							layout="responsive"
							sizes="(max-width: 767px) 120px, (max-width: 991px) 180px, (max-width: 1190px) 200px, 240px"
						/>
					</div>
				</a>
			</Link>
			<div className={style.largecard_label}>
				<span>{sName}</span>
			</div>
			<Link legacyBehavior passHref href={`/${data?.oSeo?.sSlug}`}>
				<a className={style.link}>
					<Clamp lines={3} ellipsis="..." trimRight className="">
						<span className={style.largecard_title}>{sTitle}</span>
					</Clamp>
				</a>
			</Link>

			<div className={style.largecard_footer}>
				<div className={style.date}>
					<BsCalendarEvent />
					<span>{matchDate}</span>
				</div>
				<div className={style.time}>
					<MdOutlineWatchLater />
					<span>{timer}</span>
				</div>
			</div>
		</div>
	)
}

export default LargeCard

LargeCard.propTypes = {
	data: PropTypes.object,
}
