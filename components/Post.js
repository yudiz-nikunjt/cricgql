import React from "react"
import style from "../assets/scss/post.module.scss"
import postImg from "../assets/images/Kevin-Pietersen.webp"
import Image from "next/image"
import verified from "../assets/images/verified.svg"
import view from "../assets/images/view.svg"
import clap from "../assets/images/clap.svg"
import chat from "../assets/images/chat.svg"
import bookmark from "../assets/images/bookmark.svg"
import share from "../assets/images/share.svg"
import typo from "../assets/images/typo.svg"

const Post = ({ data }) => {
	const createMarkup = () => {
		return { __html: data?.sContent }
	}
	console.log("data?.oDisplayAuthor?.sUrl", data?.oDisplayAuthor?.sUrl)
	return (
		<div className={style.post}>
			<div className={style.post_breadcrumbs}>
				Home &gt; Series &gt; IPL 2021
			</div>
			<h2 className={style.post_heading}>{data?.sTitle}</h2>
			<h2 className={style.post_heading_2}>{data?.sSubtitle}</h2>

			<div className={style.post_image}>
				<Image
					src={
						data?.oImg?.sUrl?.includes("https://www.crictracker.com/")
							? data?.oImg?.sUrl
							: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${data?.oImg?.sUrl}`
					}
					width={300}
					height={180}
					alt="post"
					objectFit="cover"
					layout="responsive"
				/>
			</div>
			<div className={style.post_author}>
				<div className={style.post_author_profile}>
					<Image
						src={
							data?.oDisplayAuthor?.sUrl === "" ||
							data?.oDisplayAuthor?.sUrl === null
								? "https://image.crictracker.com/wp-content/uploads/2022/04/Faf-du-Plessis-3-370x231.jpg"
								: data?.oDisplayAuthor?.sUrl?.includes(
										"https://www.crictracker.com/"
								  )
								? data?.oDisplayAuthor?.sUrl
								: `https://crictracker-admin-panel.s3.ap-south-1.amazonaws.com/${data?.oDisplayAuthor?.sUrl}`
						}
						alt="post"
						width={40}
						height={40}
						objectFit="cover"
						className={style.post_author_profile_image}
					/>

					<div className={style.post_author_profile_name}>
						<div className={style.name}>
							<span>{data?.oDisplayAuthor?.sDisplayName}</span>
							<Image src={verified} alt="verified" />
							<div className={style.follow}>Follow</div>
						</div>
						<span className={style.designation}>Author</span>
					</div>
				</div>
				<div className={style.post_view}>
					<Image src={view} alt="verified" />
					<span>View : {data?.nViewCount}</span>
				</div>
			</div>
			<div className={style.post_published}>
				Published - 16 Jan 2020, 16:00 IST | Updated - 26 Jan 2020, 16:00 IST |{" "}
				<span>2 min Read</span>
			</div>
			<div className={style.post_activity}>
				<div className={style.post_activity_clap}>
					<div className={style.post_activity_clap_icon}>
						<Image src={clap} alt="clap" />
					</div>
					<span>{data?.nClaps}</span>
				</div>
				<div className={style.post_activity_clap}>
					<div className={style.post_activity_clap_icon}>
						<Image src={chat} alt="clap" />
					</div>
					<span>{data?.nCommentCount}</span>
				</div>
				<div className={style.post_activity_clap}>
					<div className={style.post_activity_clap_icon}>
						<Image src={share} alt="clap" />
					</div>
					<span>Share</span>
				</div>
				<div className={style.post_activity_clap}>
					<div className={style.post_activity_clap_icon}>
						<Image src={bookmark} alt="clap" />
					</div>
				</div>
				<div className={style.post_activity_clap}>
					<div className={style.post_activity_clap_icon}>
						<Image src={typo} alt="clap" />
					</div>
				</div>
			</div>
			<div
				dangerouslySetInnerHTML={createMarkup()}
				className={style.post_content}
			/>
		</div>
	)
}

export default Post
