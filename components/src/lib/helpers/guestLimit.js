import { encodeId } from './commons';
import momenttimezone from 'moment-timezone';
import { isRegistrationClosed } from './dateBox';

const findAddon = (addons, addonName) => addons?.find(({ name }) => addonName === name);

export const getRegistrationProperties = ({
	addons,
	eventRegistration,
	eventKind,
	planGuestLimit
}) => {
	const registration_addon = findAddon(addons, 'registration');

	if (!registration_addon || eventKind === 4) return null;

	let registration_properties = {};
	if (eventKind === 4) {
		if (eventRegistration) {
			registration_properties = eventRegistration;
		}
	} else {
		const registration =
			eventRegistration?.value ||
			registration_addon?.value?.registration ||
			registration_addon?.value;

		if (registration?.general?.limit === 0) {
			registration.general.limit = planGuestLimit || 500;
		}

		const { texts, general, open } = registration;
		const { page_url, site_type, limit, limit_type, hide_reg_button } = general;
		registration_properties.registration_enabled = open;
		registration_properties.page_url = page_url;
		registration_properties.site_type = site_type;
		registration_properties.rsvp = texts.rsvp;
		registration_properties.guest_limit = limit;
		registration_properties.guest_limit_type = limit_type;
		registration_properties.hide_reg_button = !!hide_reg_button;
		registration_properties.show_guest_limit =
			eventRegistration?.value?.general?.show_guest ??
			registration_addon?.value?.registration?.general?.show_guest;
	}

	return registration_properties;
};

export const getGuestLimitProperties = props => {
	const {
		eventKind,
		eventPageUrl,
		planGuestLimit = 0,
		eventEndDate,
		addons,
		eventTicket,
		guests,
		eventStartDate,
		eventId = '',
		registrationPageUrl = '',
		text,
		allDay,
		timeZone,
		convertDate,
		addDateInUrl
	} = props;
	const button_properties = {};

	const registration = getRegistrationProperties(props);
	if (!registration || eventKind === 5) return {};

	if (eventKind === 4) {
		if (registration) {
			const { status, external } = registration;
			if (!status) {
				// In case of registration url as an external link from EventBrite or Wix
				if (typeof registration === 'string') {
					button_properties.showButton = true;
					button_properties.buttonText = text;
					button_properties.page_url = registration;
				}
			} else {
				if (['NA_REGISTRATION_STATUS', 'CLOSED', 'CLOSED_MANUALLY'].includes(status)) {
					button_properties.showButton = false;
				} else {
					button_properties.showButton = true;
					button_properties.buttonText = text;
					button_properties.page_url =
						status === 'OPEN_EXTERNAL' ? external.registration : eventPageUrl + '/form';
				}
			}
		}
	} else {
		const { registration_enabled, page_url, rsvp, site_type } = registration;

		if (registration_enabled) {
			button_properties.showButton = true;
			button_properties.buttonText = rsvp === 'Register' ? text : rsvp;
			if (page_url && site_type === 2) {
				button_properties.page_url = page_url;
			} else {
				button_properties.page_url = `${registrationPageUrl}${encodeId(String(eventId))}${
					addDateInUrl ? `?date=${eventStartDate},${eventEndDate},${+allDay}` : ''
				}`;
			}
		}
	}

	const format = allDay ? 'YYYY-MM-DD' : 'YYYY-MM-DD[T]HH:mm:ss';

	if (
		momenttimezone(eventEndDate.replace('T', ' ')).isBefore(
			momenttimezone(momenttimezone().format(format))
		)
	) {
		button_properties.showButton = false;
	}

	const ticket_addon = findAddon(addons, 'ticket');
	const { value: ticket } = eventTicket || ticket_addon || {};
	const guest_limit_properties = {
		guest_limit: 0,
		show_guest_limit: true
	};

	if (ticket_addon && ticket?.general.open) {
		if (!ticket.general.showTicketLimit) guest_limit_properties.show_guest_limit = false;
		ticket?.fields?.forEach(({ limitNumber, limit }) => {
			if (limit) guest_limit_properties.show_guest_limit = false;
			if (typeof guest_limit_properties.guest_limit === 'string') return;
			guest_limit_properties.guest_limit = limit
				? 'unlimited'
				: guest_limit_properties.guest_limit + limitNumber;
		});
	} else {
		guest_limit_properties.show_guest_limit =
			button_properties.showButton &&
			registration.registration_enabled &&
			registration.guest_limit_type !== 'unlimited' &&
			registration.show_guest_limit &&
			eventKind !== 4 &&
			registration.site_type === 1;
		guest_limit_properties.guest_limit = registration
			? registration.guest_limit_type !== 'unlimited'
				? planGuestLimit !== 0
					? Math.min(+registration.guest_limit, planGuestLimit)
					: +registration.guest_limit
				: 'unlimited'
			: null;
	}

	if (registration.hide_reg_button && eventKind === 1 && button_properties.showButton) {
		const showButton = isRegistrationClosed(timeZone, eventStartDate, convertDate, allDay);

		button_properties.showButton = !showButton;
	}

	return {
		...button_properties,
		...guest_limit_properties,
		guestsCount: getGuestsCount(addons, eventTicket, guests, eventStartDate)
	};
};

export const getGuestsCount = (addons, eventTicket, guests = [], startDate) => {
	const ticket_addon = findAddon(addons, 'ticket');
	const ticketAddonEnabled = ticket_addon && ticket_addon.value.general.open;
	let allGuests = 0;

	const formats = ['YYYY-MM-DD', 'YYYY-MM-DD[T]HH:mm'];

	const compareDates = ({ guestDate, guestId }) => {
		// LAST GUEST ID BEFORE ADDING ADDITIONAL DATES
		if (guestId < 80420) {
			return (
				momenttimezone(guestDate).format(formats[0]) ===
				momenttimezone(startDate).format(formats[0])
			);
		} else {
			return (
				momenttimezone(guestDate).format(formats[+guestDate.includes('T')]) ===
				momenttimezone(startDate).format(formats[+startDate.includes('T')])
			);
		}
	};

	if (typeof guests === 'number') {
		allGuests = guests;
	} else {
		if (Array.isArray(guests)) {
			for (const guest of guests) {
				if (guest.date && compareDates({ guestDate: guest.date, guestId: guest.id })) {
					let guestCount = Number(guest?.value?.person) || 1;
					allGuests += guestCount;
				}
			}
		}
	}

	let soldTicketsCount = 0;
	if (
		(ticket_addon && !eventTicket && ticketAddonEnabled) ||
		(eventTicket && eventTicket.value.general.open)
	) {
		Array.isArray(guests) &&
			guests.forEach(({ date, sold_tickets, id }) => {
				if (
					sold_tickets &&
					sold_tickets.length &&
					(!date || compareDates({ guestDate: date, guestId: id }))
				) {
					soldTicketsCount += +sold_tickets.length;
				}
			});
	} else {
		soldTicketsCount = allGuests;
	}

	return soldTicketsCount || 0;
};
