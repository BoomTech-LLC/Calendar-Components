import React from 'react';
import PropTypes from 'prop-types';
import { encodeId } from '../helpers/commons';

const Title = ({
	title,
	titleExtraLink,
	link,
	kind,
	id,
	addDateInUrl,
	dateParams,
	singleEventUrl
}) => {
	if (kind != 1 && !titleExtraLink) return title;

	let titleHref = '';

	if (titleExtraLink) {
		titleHref = titleExtraLink;
	} else {
		titleHref = link
			? link.url
			: `${singleEventUrl}${encodeId(`${id}`)}${addDateInUrl ? `?date=${dateParams.join(',')}` : ''}`;
	}

	return (
		<a
			href={titleHref}
			target='_blank'
			style={{ all: 'unset', cursor: 'pointer' }}
		>
			{title}
		</a>
	);
};

Title.propTypes = {
	title: PropTypes.string,
	titleExtraLink: PropTypes.string,
	link: PropTypes.string,
	kind: PropTypes.string,
	id: PropTypes.string,
	addDateInUrl: PropTypes.string,
	dateParams: PropTypes.string,
	singleEventUrl: PropTypes.string
};

export default Title;
