export function downloadSharer(e, type, event) {
    e.stopPropagation();
    let desc = `${event.desc ? `${event.desc.replace(/&lt;/g , "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")}  ` : ""}${(event.venue.name || event.venue.phone || event.venue.email || event.venue.website) ? "<p><b>Venue Details.</b></p>  " : ""}${event.venue.name ? `${event.venue.name},<br/>  ` : ""}${event.venue.phone ? `${event.venue.phone},<br/>  ` : ""}${event.venue.email ? `${event.venue.email},<br/>  ` : ""}${event.venue.website ? `${event.venue.website}.<br/>  ` : ""}${(event.organizer.name || event.organizer.phone || event.organizer.email || event.organizer.website) ? "<p><b>Organizer</b></p>  " : ""}${event.organizer.name ? `${event.organizer.name},<br/>  ` : ""}${event.organizer.phone ? `${event.organizer.phone},<br/>  ` : ""}${event.organizer.email ? `${event.organizer.email},<br/>  ` : ""}${event.organizer.website ? `${event.organizer.website}.<br/>  ` : ""}`
    let icsSharer = `https://calendar.boomte.ch/createIcsFile?title=${event.title}&desc=${encodeURIComponent(type==='icalendar' ? desc.replace(/(<([^>]+)>)/ig, '') : desc)}&start=${event.start}&end=${event.end}&address=${encodeURIComponent(event.venue.address)}`
    window.location.href = icsSharer;
}

export function openAddToUrl(e, type, event) {
    e.stopPropagation();
    let eventDescription = event.desc ? createDesc(event) : "";
    let url;
    switch (type) {
        case 'google':
            if (event.all_day)
                url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + "/" + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD') + '&details=' + encodeURIComponent(event.desc ? eventDescription : "") + '&location' + setLocation(event, 'encode') + '&sprop=name';
            else
                url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + '/' + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&details=' + encodeURIComponent(event.desc ? eventDescription : "") + '&location' + setLocation(event, 'encode') + '&sprop=name';
            break;
        case 'yahoo':
            if (event.all_day)
                url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=' + (event.all_day ? 'all_day' : '') + '&TITLE=' + encodeURIComponent(event.title) + '&ST=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + "&ET=" + moment(formatForAddtoCalendar(event, 'end', 'yahoo')).format('YYYYMMDD') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);
            else
                url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=' + encodeURIComponent(event.title) + '&ST=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + "&ET=" + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);
            break;
        default:
            console.error('undefined calendar type');
    }
    window.open(url, '_blank');
    return;
}

function formatForAddtoCalendar(event, key, type) {
    let fullStart,
        fullEnd;
    if (event.all_day) {
        fullStart = moment(event.start).format('YYYY-MM-DD');
        if (event.end !== event.start) {
            fullEnd = moment(event.end).add(1, 'days').format('YYYY-MM-DD');
        } else {
            fullEnd = moment(event.end).format('YYYY-MM-DD');
            if (type !== "yahoo") fullEnd = moment(event.end).add(1, 'days').format('YYYY-MM-DD');
        }
    } else {
        fullStart = moment(event.start).format('YYYY-MM-DDTHH:mm:ss');
        fullEnd = moment(event.end).format('YYYY-MM-DDTHH:mm:ss');
    }
    if (type === 'yahoo' && event.end !== event.start) fullEnd = moment(fullEnd).subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss');

    return key === 'start' ? fullStart : fullEnd
}

export function setLocation(event, key) {
    let toGmapLinkBase = 'http://maps.google.com/?q=';
    if (event.location) {
        if (key === 'encode')
            return encodeURI(toGmapLinkBase + event.location);
        else
            return event.location;
    }

    let venue = event.venue;
    if (venue && venue.address) {
        if (key === 'encode')
            return encodeURI(toGmapLinkBase + venue.address + "+" + venue.city + "+" + venue.statesList + "+" + venue.postal + "+" + venue.country + "+");
        else
            return venue.address + ' ' + venue.city + ' ' + venue.statesList + ' ' + venue.postal + ' ' + venue.country;
    }

    return ''
}

export const encodeShareUrl = (str) => {
    let id = str.split("");
    let i;
    for (i = 0; i < id.length; i++) {
        switch (id[i]) {
            case "1":
                id[i] = "H9";
                break;
            case "2":
                id[i] = "A8";
                break;
            case "3":
                id[i] = "J7";
                break;
            case "4":
                id[i] = "M6";
                break;
            case "5":
                id[i] = "R5";
                break;
            case "6":
                id[i] = "O4";
                break;
            case "7":
                id[i] = "L3";
                break;
            case "8":
                id[i] = "W2";
                break;
            case "9":
                id[i] = "U1";
                break;
            case "0":
                id[i] = "K0";
                break;
            default:
                return
        }
    }
    let l = id.length;
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (i = 0; i < l * 2 + 2; i = i + Math.ceil(Math.random() * 3)) {
        id.splice(i, 0, chars[Math.ceil(Math.random() * 26)]);
    }
    return id.join('');
};

const createDesc = event => `${event.desc ? `${event.desc}%0D%0A%0D%0A` : ""}${(event.venue.name || event.venue.phone || event.venue.email || event.venue.website) ? "Venue Details%0D%0A%0D%0A" : ""}${event.venue.name ? `${event.venue.name}%0D%0A` : ""}${event.venue.phone ? `${event.venue.phone}%0D%0A` : ""}${event.venue.email ? `${event.venue.email}%0D%0A` : ""}${event.venue.website ? `${event.venue.website}%0D%0A%0D%0A` : ""}${(event.organizer.name || event.organizer.phone || event.organizer.email || event.organizer.website) ? "Organizer%0D%0A%0D%0A" : ""}${event.organizer.name ? `${event.organizer.name}%0D%0A` : ""}${event.organizer.phone ? `${event.organizer.phone}%0D%0A` : ""}${event.organizer.email ? `${event.organizer.email}%0D%0A` : ""}${event.organizer.website ? `${event.organizer.website}%0D%0A` : ""}`;

export function openShareUrl(e, type, eventUrl) {
    e.stopPropagation();
    let base;
    switch (type) {
        case 'facebook':
            base = 'https://facebook.com/sharer/sharer.php?u=';
            break;
        case 'linkedin':
            base = 'https://www.linkedin.com/sharing/share-offsite/?url=';
            break;
        case 'twitter':
            base = 'http://twitter.com/share?url=';
            break;
        default:
            console.error('undefined share url type')
    }
    window.open(base + eventUrl, "_blank");
    return;
}

export function generateEventUrl(event, encode, boomEventUrlBase, comp_id, instance) {
    if (event.kind === 4) {
        return event.eventPageUrl || '';
    } else {
        return `${boomEventUrlBase}${encodeShareUrl(`${event.id}`)}?${encode ? encodeURIComponent(`comp_id=${comp_id}&instance=${instance}&startDate=${event.repeat.type ? moment(event.start).format('YYYY-MM-DD') : ""}`) : `comp_id=${comp_id}&instance=${instance}`}&startDate=${event.repeat.type ? moment(event.start).format('YYYY-MM-DD') : ""}`
    }
}

export function copyLink(e, event, setCopyTooltipText, copiedTooltipText = DEFAULTS.copiedTooltipText, boomEventUrlBase, comp_id, instance) {
    e.stopPropagation();
    let a = document.createElement('textarea');
    a.innerText = generateEventUrl(event, false, boomEventUrlBase, comp_id, instance);
    document.body.appendChild(a);
    a.setSelectionRange(0, 99999);
    a.select();
    document.execCommand('copy');
    a.remove();
    setCopyTooltipText(copiedTooltipText);
}

export function checkProps(props) {
    if(props.showAddToIcons === false && props.showShareIcons === false)  {
        console.warn('AddShareIcons component is called, but both showAddToIcons and showShareIcons properties are falsy');
        return;
    }

    if(!props.comp_id) {
        console.error('component is not rendered as comp_id was missing in props or a falsy value is assagned to it');
        return;
    }

    if(!props.instance) {
        console.error('component is not rendered as instance was missing in props or a falsy value is assagned to it');
        return;
    }

    if(!props.event || !props.event.hasOwnProperty('id')) {
        console.error('component is not rendered as event object was missing in props or doesn\'t match to event object skeleton');
        return;
    }

    if(!props.boomEventUrlBase) {
        console.error('component is not rendered as boomEventUrlBase was missing in props or a falsy value is assagned to it');
        return;
    }
    
    return true
}

export const DEFAULTS = {
    addToSectionTitle: 'Add to calendar',
    shareSectionTitle: 'Share Event',
    copyActionTooltipText: 'Copy event url',
    copiedTooltipText: 'Copied',
    sequence: ['vertical', 'horizontal']
}