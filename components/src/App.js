import Description from './lib/Description/index';
import GuestLimit from './lib/GuestLimit/index';
import BlurryLoadableImg from './lib/BlurryLoadableImg/index';
import RegistrationButton from './lib/RegistrationButton/index';
import DateBox from './lib/DateBox/index';
import ListedDetails from './lib/ListedDetails/index';
import Location from './lib/Location/index';
import AddShareIcons from './lib/AddShareIcons/index';
import CategoryItem from './lib/CategoryItem';
import momenttimezone from 'moment-timezone';
import Categories from './lib/Categories';
import ImagesSlider from './lib/ImagesSlider';
import { useState } from 'react';
import Title from './lib/Title';

function App() {
	const [showSlider, setShowSlider] = useState(true);
	let event = {
		addons: [
			{
				value: {
					fields: [
						{
							id: 0,
							label: 'Example',
							price: '1',
							limit: 0,
							limitNumber: 500,
							type: 'paid'
						}
					],
					general: {
						open: true,
						showPrices: true,
						fee: 0,
						format: { id: 8, value: '$100' },
						currency: { id: 0, code: 'USD', value: '$ Dollars' },
						showTicketLimit: true
					},
					payment: {
						cash: { enable: true },
						paypal: { enable: false, email: '' },
						stripe: { enable: false, account_id: '' }
					},
					promoCodes: []
				},
				title: 'Ticket',
				name: 'ticket',
				open_in: 0,
				image: 'Ticket.svg',
				description:
					'Add different types of tickets to your events and sell them online or for cash.'
			},
			{
				value: {
					registration: {
						open: true,
						general: {
							limit_type: 'limited',
							page_url: '',
							site_type: 1,
							limit: 500,
							adminInfo: '',
							show_guest: true
						},
						fields: [
							{
								id: 1,
								type: 'phone',
								placeholder: 'Phone Number',
								label: '',
								required: false,
								active: false
							},
							{
								id: 2,
								type: 'address',
								placeholder: 'Address',
								label: '',
								required: false,
								active: false
							},
							{
								id: 3,
								type: 'date',
								placeholder: 'Date',
								label: '',
								required: false,
								active: false
							},
							{
								id: 4,
								type: 'text',
								placeholder: 'Your comments',
								label: '',
								required: false,
								active: false
							},
							{
								id: 5,
								type: 'person',
								placeholder: 'How many guests?',
								label: '',
								required: false,
								active: false
							},
							{
								id: 6,
								type: 'comment',
								placeholder: 'Anything else we need to know? ',
								label: '',
								required: false,
								active: false
							}
						],
						defFields: {
							form_title: '',
							form_desc: '',
							first_name: '',
							last_name: '',
							email: ''
						},
						texts: {
							rsvp: 'Register',
							submit: 'Submit',
							thank_title: 'Registration completed successfully!',
							thank_body: 'Please check your registered email address'
						},
						emails: { notif: true, remind: true, cancel: true }
					},
					confirmation: {
						subject: 'Thank you for registering',
						desc: "<p style='color:black'>Hi {guestname},</p><p style='color:black'>Thanks for registering to our event. You can check your registration details below.</p><p style='color:black'>Looking forward to seeing you!</p>"
					},
					reminder: {
						subject: 'You have an event coming up!',
						desc: '<p>Hi,</p><p>A friendly reminder on the upcoming event:</p><p>If there are any changes in your plans you can just hit reply to let us know.</p>',
						remTime: { id: 'time_option_2', value: '1 day before' }
					},
					cancelation: {
						subject: 'An upcoming event has been canceled',
						desc: '<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>'
					}
				},
				title: 'Registration',
				name: 'registration',
				open_in: 0,
				image: 'Registration.svg',
				description:
					'Collect and manage event registrations with a customizable form and email template.'
			}
		],
		id: 447,
		comp_id: 'comp-lxu55swz',
		instance: '75ee6b6e-8cb9-4c96-aafc-b2eb68929e55',
		title: '1',
		start: '2024-07-10',
		end: '2024-07-10',
		time_zone: 'Asia/Yerevan',
		all_day: 1,
		image: '[]',
		desc: '',
		color: '#3899EC',
		venue: {
			email: '',
			name: '',
			phone: '',
			website: '',
			address: '',
			lat: '',
			lng: '',
			long: ''
		},
		organizer: {
			email: '',
			name: '',
			phone: '',
			website: ''
		},
		repeat: {
			type: 'Day',
			advanced: '',
			end: '720',
			interval: '1',
			exclude: [],
			additionalDates: [
				{
					allDay: true,
					start: '2024-07-10',
					end: '2024-07-10',
					all_day: 1
				}
			]
		},
		kind: '1',
		categories: [],
		guests: [
			{
				id: 124,
				date: '2024-07-10',
				event_id: '447',
				passed: 0,
				sold_tickets: [
					{
						id: 227,
						created_at: '2024-07-03T06:15:19.000000Z',
						updated_at: '2024-07-03T06:15:19.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '124',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10'
					},
					{
						id: 228,
						created_at: '2024-07-03T06:15:19.000000Z',
						updated_at: '2024-07-03T06:15:19.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '124',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10'
					},
					{
						id: 229,
						created_at: '2024-07-03T06:15:19.000000Z',
						updated_at: '2024-07-03T06:15:19.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '124',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10'
					},
					{
						id: 230,
						created_at: '2024-07-03T06:15:19.000000Z',
						updated_at: '2024-07-03T06:15:19.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '124',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10'
					}
				]
			},
			{
				id: 125,
				date: '2024-07-10T13:30',
				event_id: '447',
				passed: 0,
				sold_tickets: [
					{
						id: 231,
						created_at: '2024-07-03T06:15:44.000000Z',
						updated_at: '2024-07-03T06:15:44.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '125',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10T13:30'
					},
					{
						id: 232,
						created_at: '2024-07-03T06:15:44.000000Z',
						updated_at: '2024-07-03T06:15:44.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '125',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10T13:30'
					},
					{
						id: 233,
						created_at: '2024-07-03T06:15:44.000000Z',
						updated_at: '2024-07-03T06:15:44.000000Z',
						option_id: '394',
						event_id: '447',
						guest_id: '125',
						passed: 0,
						label: 'Example',
						price: '1 $',
						date: '2024-07-10T13:30'
					}
				]
			}
		],
		registration: null,
		tickets: null
	};

	const exampleEvent2 = {
		id: 353,
		comp_id: 'comp-m2t0znvm',
		instance: '31219966-5b2f-4d31-8049-0b0828686a87',
		title: 'Event 1',
		start: '2024-11-26',
		end: '2024-11-27',
		time_zone: 'Asia/Yerevan',
		all_day: 1,
		image: [],
		desc: '',
		color: '#3899EC',
		venue: {
			email: '',
			name: '',
			phone: '',
			website: '',
			address: '',
			lat: '',
			lng: '',
			long: ''
		},
		organizer: {
			email: '',
			name: '',
			phone: '',
			website: ''
		},
		repeat: {
			type: '',
			advanced: '',
			end: '720',
			interval: '1',
			exclude: [],
			additionalDates: [
				{
					allDay: true,
					start: '2024-11-26',
					end: '2024-11-26',
					all_day: 1
				}
			]
		},
		kind: '1',
		categories: [],
		registration: null,
		tickets: null,
		additional: true,
		key: '_353_2024-11-26_2024-11-27',
		allDay: true,
		startMs: 1732564800000,
		endMs: 1732651200000,
		textColor: '#3899EC',
		borderColor: '#3899EC',
		backgroundColor: '#3899EC',
		guests: []
	};

	//   {
	//     "start": "2024-12-04",
	//     "end": "2024-12-05",
	//     "eventTimeZone": "Asia/Yerevan",
	//     "eventKind": "1",
	//     "type": "dateBox",
	//     "wrapperCustomClassNames": [
	//         "datebox",
	//         "bc-agenda-desc-color"
	//     ],
	//     "direction": "row",
	//     "repeat": {
	//         "type": "",
	//         "advanced": "",
	//         "end": "720",
	//         "interval": "1",
	//         "exclude": [],
	//         "additionalDates": []
	//     },
	// }

	return (
		<div className='App'>
			<Location
				address={"facebook.com"}
				displayName={"Halabyan 5432543"}
				showIcon={false}
				wrapperCustomClassNames={['mb-3']}
				linkClassName='bc-link-color agenda-desc-and-other-info-container'
				textClassName='bc-agenda-desc-color'
				oneLine={true}
			/>
			{/* <DateBox
				start="2025-01-13T03:30"
				end='2025-01-13T04:30'
				eventKind='1'
				eventTimeZone='Asia/Yerevan'
				dateFormat='DD MMMM, YYYY'
				timeFormat='am/pm'
				allDay={false}
				showIcons={false}
				type='timeBox'
				dayNumberSize={80}
				wrapperCustomClassNames={['bc-agenda-desc-color', 'timebox', 'seperateDates']}
				oneLine={true}
				agenda={true}
				showTimeOnly={true}
				makeDatesCenter={false}
			/> */}

			{/* <Title
				title={exampleEvent2.title}
				link={exampleEvent2.link}
				titleExtraLink={exampleEvent2.titleExtraLink}
				kind={exampleEvent2.kind}
				id={exampleEvent2.id}
				addDateInUrl={exampleEvent2.additional || exampleEvent2.repeat.type}
				dateParams={[exampleEvent2.start, exampleEvent2.end, +exampleEvent2.all_day]}
				singleEventUrl='https://singleevent.boomtechdev.com/single/'
			/>

			<AddShareIcons
				title='asd'
				comp_id='sdfdsf'
				instance='asdfsdfs'
				instanceShort='asdasdad'
				event={exampleEvent2}
				boomEventUrlBase='https://singleevent.boomtechdev.com/single/'
				addToSectionName='sdfsdfsdf'
				shareSectionName='sdsdf'
				copyActionTooltipText='sdfsdfsd'
				copiedTooltipText='sdfsfsdf'
				wrapperCustomClassNames={[]}
				titleCustomClassNames={[]}
				contentCustomClassNames={[]}
				copyTooltipCustomClassNames={[]}
				order='horizontal'
				timeZone='+02:00'
			/> */}

			{/* 
      <Categories
        categories={[
          { id: 19412, name: "Opening Reception", color: "#005FB0" },
          { id: 19413, name: "Opening Reception 2", color: "#000" },
        ]}
      /> */}

			{/*  */}

			{/* <RegistrationButton
        addons={addons}
        wrapperCustomClassNames={""}
        text="Some texsdfsdfsdt"
        specialButtonUrl="https://facebook.com"
        onClick={console.log}
        eventKind={1}
        eventRegistration={null}
        eventPageUrl=""
        planGuestLimit={26}
        eventStartDate="2028-05-27"
        eventEndDate="2028-05-29"
        repeat={{}}
        guests={[]}
        comp_id="asdasd"
        instance="asdadadas"
        eventId="46"
        registrationPageUrl=""
        timeZone="GMT-11"
        allDay={true}
        convertDate={false}
        disableButton={undefined}
        alwaysShowButton={undefined}
        buttonLinkTarget="_self"
      /> */}

			{/* <RegistrationButton
        addons={addons}
        wrapperCustomClassNames={""}
        text="asdasd"
        onClick={console.log}
        eventKind={1}
        eventRegistration={test_event_registration}
        eventPageUrl=""
        planGuestLimit={26}
        eventStartDate="2023-04-10T11:20"
        eventEndDate="2023-04-10T13:38"
        repeat={{}}
        guests={[]}
        comp_id="asdasd"
        instance="asdadadas"
        eventId="46"
        registrationPageUrl=""
        timeZone="GMT+4"
        allDay={false}
        convertDate={true}
      /> */}
			{/*  */}
			{/* {event.start} */}
			{/* <GuestLimit
                eventRegistration={{
                    id: 38839,
                    comp_id: "comp-lst5354x",
                    instance: "0cffd8fa-453e-469b-853b-e3998d3d8fd0",
                    event_id: "2240246",
                    value: {
                        open: true,
                        general: {
                            limit_type: "limited",
                            page_url:
                                "https://www.judoplanner.com/danubedeltajudochallenge",
                            site_type: 2,
                            limit: 25,
                            adminInfo: "",
                            show_guest: false,
                        },
                        fields: [
                            {
                                id: 1,
                                type: "phone",
                                placeholder: "Phone Number",
                                label: "",
                                required: false,
                                active: false,
                            },
                            {
                                id: 2,
                                type: "address",
                                placeholder: "Address",
                                label: "",
                                required: false,
                                active: false,
                            },
                            {
                                id: 3,
                                type: "date",
                                placeholder: "Date",
                                label: "",
                                required: false,
                                active: false,
                            },
                            {
                                id: 4,
                                type: "text",
                                placeholder: "Your comments",
                                label: "",
                                required: false,
                                active: false,
                            },
                            {
                                id: 5,
                                type: "person",
                                placeholder: "How many guests?",
                                label: "",
                                required: false,
                                active: false,
                            },
                            {
                                id: 6,
                                type: "comment",
                                placeholder: "Anything else we need to know?",
                                label: "",
                                required: false,
                                active: false,
                            },
                        ],
                        defFields: {
                            form_title: "",
                            form_desc: "",
                            first_name: "",
                            last_name: "",
                            email: "",
                        },
                        texts: {
                            rsvp: "Register",
                            submit: "Submit",
                            thank_title: "Registration completed successfully!",
                            thank_body:
                                "Please check your registered email address",
                        },
                        emails: {
                            notif: true,
                            remind: true,
                            cancel: true,
                        },
                    },
                }}
                allDay={true}
                eventTicket={null}
                eventKind={"1"}
                eventStartDate={"2024-11-20"}
                eventEndDate={"2024-11-21"}
                repeat={{
                    type: "",
                    interval: "",
                    end: "",
                    advanced: "",
                    additionalDates: [],
                }}
                guests={[]}
                wrapperCustomClassNames={[]}
                planGuestLimit={25}
                label="fasdfs"
                addons={[
                    {
                        value: {
                            registration: {
                                open: true,
                                general: {
                                    limit_type: "limited",
                                    page_url: "",
                                    site_type: 1,
                                    limit: 500,
                                    adminInfo: "",
                                    show_guest: true,
                                    hide_reg_button: false,
                                },
                                fields: [
                                    {
                                        id: 1,
                                        type: "phone",
                                        placeholder: "Phone Number",
                                        label: "",
                                        required: false,
                                        active: false,
                                    },
                                    {
                                        id: 2,
                                        type: "address",
                                        placeholder: "Address",
                                        label: "",
                                        required: false,
                                        active: false,
                                    },
                                    {
                                        id: 3,
                                        type: "date",
                                        placeholder: "Date",
                                        label: "",
                                        required: false,
                                        active: false,
                                    },
                                    {
                                        id: 4,
                                        type: "text",
                                        placeholder: "Your comments",
                                        label: "",
                                        required: false,
                                        active: false,
                                    },
                                    {
                                        id: 5,
                                        type: "person",
                                        placeholder: "How many guests?",
                                        label: "",
                                        required: false,
                                        active: false,
                                    },
                                    {
                                        id: 6,
                                        type: "comment",
                                        placeholder:
                                            "Anything else we need to know? ",
                                        label: "",
                                        required: false,
                                        active: false,
                                    },
                                ],
                                defFields: {
                                    form_title: "",
                                    form_desc: "",
                                    first_name: "",
                                    last_name: "",
                                    email: "",
                                },
                                texts: {
                                    rsvp: "Register",
                                    submit: "Submit",
                                    thank_title:
                                        "Registration completed successfully!",
                                    thank_body:
                                        "Please check your registered email address",
                                },
                                emails: {
                                    notif: true,
                                    remind: true,
                                    cancel: true,
                                },
                            },
                            confirmation: {
                                subject: "Thank you for registering",
                                desc: "<p style='color:black'>Hi {guestname},</p><p style='color:black'>Thanks for registering to our event. You can check your registration details below.</p><p style='color:black'>Looking forward to seeing you!</p>",
                            },
                            reminder: {
                                subject: "You have an event coming up!",
                                desc: "<p>Hi,</p><p>A friendly reminder on the upcoming event:</p><p>If there are any changes in your plans you can just hit reply to let us know.</p>",
                                remTime: {
                                    id: "time_option_2",
                                    value: "1 day before",
                                },
                            },
                            cancelation: {
                                subject: "An upcoming event has been canceled",
                                desc: "<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>",
                            },
                        },
                        title: "Registration",
                        name: "registration",
                        open_in: 0,
                        image: "Registration.svg",
                        description:
                            "Collect and manage event registrations with a customizable form and email template.",
                    },
                    {
                        value: null,
                        title: "Mobile App",
                        name: "mobileapp",
                        open_in: 1,
                        image: "MobileApp.svg",
                        description:
                            "Simply search and install our Boom Calendar app from App Store and Play Market.",
                    },
                    {
                        value: {
                            enabled: "0",
                            showPrice: "1",
                            email: "",
                            format: "(+$100)",
                            showTotal: "1",
                            currency: "USD",
                            defQuantity: "1",
                            defCost: "0",
                            quantityLabel: "Quantity",
                            tax: "0",
                            payable: [],
                        },
                        title: "Boom",
                        name: "boom",
                        open_in: 1,
                        image: "Boom.svg",
                        description:
                            "Connect all your Boom calendars available on your website.",
                    },
                ]}
            /> */}

			{/* <BlurryLoadableImg
        url={
          "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
        }
        color={""}
        title={""}
        showColorAsBackground={false}
        wrapperCustomClassNames={["mb-3", "mt-3"]}
      /> */}

			{/* <BlurryLoadableImg
        url={
          "https://buffer.com/library/content/images/2023/10/free-images.jpg"
        }
        color={""}
        title={""}
        showColorAsBackground={false}
        wrapperCustomClassNames={["mb-3", "mt-3"]}
      /> */}

			{/* <button
        onClick={() => {
          setShowSlider(!showSlider);
        }}
      >
        TOGGGGGGGGGGLLELELELEELELELL
      </button> */}

			{/* {showSlider && (
        <ImagesSlider
          image={[
            "https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg",
            "https://static.wixstatic.com/media/08f04ba501c5443dadc671324eda69b9.jpg",
            "https://static.wixstatic.com/media/11062b_6cec22ea138947a398b14ebf3a9477a7~mv2.jpg",
            "https://static.wixstatic.com/media/11062b_9874b9821b9a4c92a07b1349883fbc42~mv2_d_3000_4507_s_4_2.jpg",
          ]}
          navigation
          imgWrapperCustomClassNames={["dasdasdasdsadsd"]}
        />
      )} */}
		</div>
	);
}

export default App;
