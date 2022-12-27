import React from "react"
import { BsCalendarEvent } from "react-icons/bs"
import { MdOutlineWatchLater } from "react-icons/md"
import PropTypes from "prop-types"
import style from "../assets/scss/smallcard.module.scss"
import moment from "moment"
import Image from "next/image"
import oImg from "../assets/images/Kevin-Pietersen.webp"
import Link from "next/link"

const SmallCard = ({ data, sName }) => {
	const { sTitle, dPublishDate, oImg } = data
	const matchDate = moment(dPublishDate).format("D MMM YYYY")
	const timer = moment(dPublishDate).fromNow()
	const imgURL = oImg?.sUrl

	return (
		<div className={style.smallcard}>
			<Link legacyBehavior passHref href={`/${data?.oSeo?.sSlug}`}>
				<a className={style.link}>
					<div className={style.smallcard_img}>
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
							objectFit="cover"
							sizes="(max-width: 767px) 120px, (max-width: 991px) 180px, (max-width: 1190px) 200px, 240px"
						/>
					</div>
				</a>
			</Link>

			<div className={style.smallcard_content}>
				<div className={style.smallcard_label}>
					<span>{sName}</span>
				</div>
				<Link legacyBehavior passHref href={`/${data?.oSeo?.sSlug}`}>
					<a className={style.link}>
						<span className={style.smallcard_content_title}>{sTitle}</span>
					</a>
				</Link>
				<div className={style.smallcard_content_footer}>
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
		</div>
	)
}

export default SmallCard

SmallCard.propTypes = {
	data: PropTypes.object,
}
