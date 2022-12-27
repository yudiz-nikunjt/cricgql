import React from "react"
import Divider from "./Divider"
import GridCard from "./GridCard"
import LargeCard from "./LargeCard"
import SmallCard from "./SmallCard"
import style from "../assets/scss/home.module.scss"

const ArticleSection = ({ articleData }) => {
	const { aArticle, sSlug, sName } = articleData

	return (
		<div className={style.home_middle_articles}>
			<Divider label={sName} sSlug={sSlug} />

			{aArticle.map((bCard) =>
				bCard.sType == "nBig" ? (
					<LargeCard key={bCard._id} data={bCard} sSlug={sSlug} sName={sName} />
				) : bCard.sType == "nSmall" ? (
					<SmallCard key={bCard._id} data={bCard} sSlug={sSlug} sName={sName} />
				) : bCard.sType == "nMedGrid" ? (
					<SmallCard key={bCard._id} data={bCard} sSlug={sSlug} sName={sName} />
				) : null
			)}

			<div className={style.gridcard_container}>
				{aArticle.map(
					(gCard) =>
						gCard.sType == "nGrid" && (
							<GridCard key={gCard._id} data={gCard} sName={sSlug} />
						)
				)}
			</div>
		</div>
	)
}

export default ArticleSection
