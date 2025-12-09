import React from 'react';
import PropTypes from 'prop-types';
import { encodeId, validateUrl } from '../helpers/commons';

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
	if ((kind != 1 && !titleExtraLink) || !link || link.type == 2) return title;

	let titleHref = '';

	if (titleExtraLink) {
		titleHref = titleExtraLink;
	} else {
		titleHref =
			link?.url ||
			`${singleEventUrl}${encodeId(`${id}`)}${addDateInUrl ? `?date=${dateParams.join(',')}` : ''}`;
	}

	return (
		<a
			href={validateUrl(titleHref)}
			target='_blank'
			style={{ all: 'unset', cursor: 'pointer' }}
			onClick={e => {
				e.stopPropagation();
			}}
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
