import React, { memo, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import {
	decreaseImgQuality,
	isImgCached,
	isImgDecreasable,
	isImgfromDropBox
} from '../helpers/blurryLoadableImage';
import { combineClassNames } from '../helpers/commons';
import { IMAGE_FIT_MODES } from '../helpers/constants';

const BlurryLoadableImg = ({
	url,
	color,
	title,
	wrapperCustomClassNames = [],
	imgCustomClassNames = [],
	eventKind = 1,
	opacity = 1,
	imageFitMode = 0
}) => {
	const [isOrigLoaded, setIsOrigLoaded] = useState(isImgCached(url));
	const [imgLoadingFailed, setImgLoadingFailed] = useState(false);
	const wrapperClassNames = useMemo(
		() => combineClassNames([styles.imgWrapper, ...wrapperCustomClassNames]),
		[wrapperCustomClassNames]
	);

	const processImageFitMode = useMemo(() => {
		return IMAGE_FIT_MODES[imageFitMode] || IMAGE_FIT_MODES[0];
	}, [imageFitMode]);

	return (
		<div
			className={wrapperClassNames}
			style={{ backgroundColor: imgLoadingFailed ? color : 'transparent' }}
		>
			{+eventKind === 5 ? (
				<iframe
					src={url}
					height='auto'
					width='100%'
					allowFullScreen
					style={{ border: 'none' }}
				></iframe>
			) : (
				!imgLoadingFailed && (
					<>
						{isImgDecreasable(url) && !isOrigLoaded && !isImgfromDropBox(url) && (
							<img
								className={combineClassNames([
									styles.blurred,
									...imgCustomClassNames
								])}
								src={decreaseImgQuality(url)}
								title={title}
								alt={title}
								onError={() => setImgLoadingFailed(true)}
								style={{ opacity, objectFit: processImageFitMode }}
							/>
						)}

						<img
							className={combineClassNames([
								...imgCustomClassNames,
								!isImgDecreasable(url) || isOrigLoaded || isImgfromDropBox(url)
									? styles.shown
									: styles.hidden
							])}
							onLoad={() => setIsOrigLoaded(true)}
							src={url}
							title={title}
							alt={title}
							onError={() => setImgLoadingFailed(true)}
							style={{ opacity, objectFit: processImageFitMode }}
						/>
					</>
				)
			)}
		</div>
	);
};

BlurryLoadableImg.propTypes = {
	url: PropTypes.string,
	color: PropTypes.string,
	title: PropTypes.string,
	wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
	imgCustomClassNames: PropTypes.arrayOf(PropTypes.string),
	eventKind: PropTypes.number,
	opacity: PropTypes.number,
	imageFitMode: PropTypes.number
};

export default memo(BlurryLoadableImg);
