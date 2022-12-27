import React from "react"
import PropTypes from "prop-types"
import style from "../assets/scss/divider.module.scss"
import Link from "next/link"

const Divider = ({ label }) => {
	return (
		<div className={style.divider}>
			<div className={style.divider_line}></div>

			<div className={style.divider_lbl}>
				<span className={style.lbl}>{label}</span>
			</div>

			<div className={style.divider_line}></div>
		</div>
	)
}

export default Divider

Divider.propTypes = {
	label: PropTypes.string,
}
