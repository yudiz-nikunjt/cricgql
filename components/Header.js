import React from "react"
import style from "../assets/scss/header.module.scss"
import ScrollContainer from "react-indiana-drag-scroll"

const Header = ({ results }) => {
	return (
		<div className={style.header}>
			<ScrollContainer horizontal={true} className={style.header_container}>
				{
        results?.map((item, index) => {
          return (
            <p key={index}>
              {item?.sTitle}
            </p>
          )
        })
      }
			</ScrollContainer>
		</div>
	)
}

export default Header
