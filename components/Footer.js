import React from "react"
import style from "../assets/scss/footer.module.scss"
import logo from "../assets/images/cric.webp"
import appstore from "../assets/images/appstore.svg"
import googleplay from "../assets/images/googleplay.svg"
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import twitter from "../assets/images/twitter.svg"
import linkedin from "../assets/images/linkedin.svg"
import telegram from "../assets/images/telegram.svg"
import youtube from "../assets/images/youtube.svg"
import Image from "next/image"

const Footer = ({ result }) => {
	return (
		<div className={style.footer}>
			<div className={style.footer_sections}>
				{
					result?.map((item, index) => {
						return (
						<div key={index} className={style.footer_topSeries}>
							<div className={style.footer_heading}>
								<div className={style.footer_heading_line}></div>
								<div className={style.footer_heading_lbl}>
									<span className={style.lbl}>{item?.eType.replace('_', ' ')}</span>
								</div>
								<div className={style.footer_heading_line}></div>
							</div>
							<div className={style.footer_links}>
									{ 
										item?.aResults?.map((menuItem, index) => {
											return (
									<span key={index} className={style.footer_link}>{menuItem?.sTitle}</span>
										)
										})
									}
							</div>
						</div>
					)})
				}
			</div>
			<div className={style.footer_divider}></div>
			<div className={style.footer_bottom}>
				<div className={style.footer_bottom_up}>
					<Image src={logo} alt="logo" width={176} objectFit="contain" />
					<div className={style.footer_nav}>
						<span>About</span>
						<span>Contact</span>
						<span>Careers</span>
						<span>Advertise with Us</span>
						<span>Write For Us</span>
						<span>DMCA</span>
						<span>Disclaimer</span>
					</div>
				</div>

				<div className={style.footer_bottom_middle}>
					<div className={style.footer_bottom_middle__left}>
						<Image src={appstore} alt="logo" objectFit="contain" />
						<Image src={googleplay} alt="logo" objectFit="contain" />
					</div>
					<div className={style.footer_social_nav}>
						<Image src={facebook} alt="logo" objectFit="contain" />
						<Image src={instagram} alt="logo" objectFit="contain" />
						<Image src={twitter} alt="logo" objectFit="contain" />
						<Image src={linkedin} alt="logo" objectFit="contain" />
						<Image src={telegram} alt="logo" objectFit="contain" />
						<Image src={youtube} alt="logo" objectFit="contain" />
					</div>
				</div>
				<div className={style.footer_bottom_down}>
					<div className={style.footer_bottom_down__left}>
						© 2013-2021 CricTracker Pvt Ltd All rights reserved.
					</div>
					<div className={style.footer_nav}>
						<span>Terms and Conditions</span>
						<span>Privacy Policy</span>
						<span>Copyrights Notice</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
