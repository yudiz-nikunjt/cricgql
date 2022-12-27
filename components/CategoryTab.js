import Image from "next/image"
import React from "react"
import liveicon from "../assets/images/ic_live.svg"
import downarrow from "../assets/images/ic_drop_down.svg"
import style from "../assets/scss/categorytab.module.scss"
import ScrollContainer from "react-indiana-drag-scroll"

const CategoryTab = () => {
	return (
		<div className={style.header}>
			<ScrollContainer horizontal={true} className={style.header_container}>
				<span className={style.active}>Home</span>
				<span>News</span>
				<span>Videos</span>
				<span>Photos</span>
				<span>Fixtures</span>
				<span>Results</span>
				<span>Standings</span>
				<span>Stats</span>
				<span>Teams</span>
				<span>Archive</span>
				<span>Fantasy Tips</span>
			</ScrollContainer>
		</div>
	)
}

export default CategoryTab
