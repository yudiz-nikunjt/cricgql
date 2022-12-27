import React from "react"
import { BsCalendarEvent } from "react-icons/bs"
import { MdOutlineWatchLater } from "react-icons/md"
import style from "../assets/scss/gridcard.module.scss"
import Clamp from "react-multiline-clamp"
import moment from "moment"
import PropTypes from "prop-types"
import Image from "next/image"
import oImg from "../assets/images/Kevin-Pietersen.webp"
import Link from "next/link"

const GridCard = ({ data, sName }) => {
	const { sTitle, dPublishDate, oImg } = data
	const matchDate = moment(dPublishDate).format("D MMM YYYY")
	const timer = moment(dPublishDate).fromNow()
	const imgURL = oImg?.sUrl

	return (
		<div className={style.gridcard}>
			<Link legacyBehavior passHref href={`/${data?.oSeo?.sSlug}`}>
				<a className={style.link}>
					<div className={style.gridcard_img}>
						<Image
							src={
								imgURL.includes("https://www.crictracker.com/")
									? imgURL
									: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${imgURL}`
							}
							alt="img"
							width={266}
							height={162}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
				</a>
			</Link>
			<Link legacyBehavior passHref href={`/${data?.oSeo?.sSlug}`}>
				<a className={style.link}>
					<Clamp lines={3} ellipsis="..." trimRight className="">
						<span className={style.gridcard_title}>{sTitle}</span>
					</Clamp>
				</a>
			</Link>

			<div className={style.gridcard_footer}>
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

export default GridCard

GridCard.propTypes = {
	data: PropTypes.object,
}
