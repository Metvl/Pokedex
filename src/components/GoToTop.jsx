import React, { useEffect, useState } from 'react'

export const GoToTop = () => {

	const [isVisible, setIsVisible] = useState(false);

	const goToBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}

	const listenToScroll = () => {
		let height = 100;
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > height) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', listenToScroll);
		return () => window.removeEventListener('scroll', listenToScroll);
	}, [])

	return (
		<div>
			{isVisible && (
				<div className="top-btn" onClick={goToBtn}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" /></svg>
				</div>
			)
			}
		</div>
	)
}
