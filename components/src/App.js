import Description from "./lib/Description/index";
import GuestLimit from "./lib/GuestLimit/index";
import BlurryLoadableImg from "./lib/BlurryLoadableImg/index";
import RegistrationButton from "./lib/RegistrationButton/index";
import DateBox from "./lib/DateBox/index";
import ListedDetails from "./lib/ListedDetails/index";
import Location from "./lib/Location/index";
import AddShareIcons from "./lib/AddShareIcons/index";
import CategoryItem from "./lib/CategoryItem";
import momenttimezone from "moment-timezone";
import Categories from "./lib/Categories";
import ImagesSlider from "./lib/ImagesSlider";

function App() {
  let event = {
    addons: [
      {
        value: {
          fields: [
            {
              id: 0,
              label: "Example",
              price: "1",
              limit: 0,
              limitNumber: 500,
              type: "paid",
            },
          ],
          general: {
            open: true,
            showPrices: true,
            fee: 0,
            format: { id: 8, value: "$100" },
            currency: { id: 0, code: "USD", value: "$ Dollars" },
            showTicketLimit: true,
          },
          payment: {
            cash: { enable: true },
            paypal: { enable: false, email: "" },
            stripe: { enable: false, account_id: "" },
          },
          promoCodes: [],
        },
        title: "Ticket",
        name: "ticket",
        open_in: 0,
        image: "Ticket.svg",
        description:
          "Add different types of tickets to your events and sell them online or for cash.",
      },
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
                placeholder: "Anything else we need to know? ",
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
              thank_body: "Please check your registered email address",
            },
            emails: { notif: true, remind: true, cancel: true },
          },
          confirmation: {
            subject: "Thank you for registering",
            desc: "<p style='color:black'>Hi {guestname},</p><p style='color:black'>Thanks for registering to our event. You can check your registration details below.</p><p style='color:black'>Looking forward to seeing you!</p>",
          },
          reminder: {
            subject: "You have an event coming up!",
            desc: "<p>Hi,</p><p>A friendly reminder on the upcoming event:</p><p>If there are any changes in your plans you can just hit reply to let us know.</p>",
            remTime: { id: "time_option_2", value: "1 day before" },
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
    ],
    id: 447,
    comp_id: "comp-lxu55swz",
    instance: "75ee6b6e-8cb9-4c96-aafc-b2eb68929e55",
    title: "1",
    start: "2024-07-10",
    end: "2024-07-10",
    time_zone: "Asia/Yerevan",
    all_day: 1,
    image: "[]",
    desc: "",
    color: "#3899EC",
    venue: {
      email: "",
      name: "",
      phone: "",
      website: "",
      address: "",
      lat: "",
      lng: "",
      long: "",
    },
    organizer: {
      email: "",
      name: "",
      phone: "",
      website: "",
    },
    repeat: {
      type: "Day",
      advanced: "",
      end: "720",
      interval: "1",
      exclude: [],
      additionalDates: [
        {
          allDay: true,
          start: "2024-07-10",
          end: "2024-07-10",
          all_day: 1,
        },
      ],
    },
    kind: "1",
    categories: [],
    guests: [
      {
        id: 124,
        date: "2024-07-10",
        event_id: "447",
        passed: 0,
        sold_tickets: [
          {
            id: 227,
            created_at: "2024-07-03T06:15:19.000000Z",
            updated_at: "2024-07-03T06:15:19.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "124",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10",
          },
          {
            id: 228,
            created_at: "2024-07-03T06:15:19.000000Z",
            updated_at: "2024-07-03T06:15:19.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "124",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10",
          },
          {
            id: 229,
            created_at: "2024-07-03T06:15:19.000000Z",
            updated_at: "2024-07-03T06:15:19.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "124",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10",
          },
          {
            id: 230,
            created_at: "2024-07-03T06:15:19.000000Z",
            updated_at: "2024-07-03T06:15:19.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "124",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10",
          },
        ],
      },
      {
        id: 125,
        date: "2024-07-10T13:30",
        event_id: "447",
        passed: 0,
        sold_tickets: [
          {
            id: 231,
            created_at: "2024-07-03T06:15:44.000000Z",
            updated_at: "2024-07-03T06:15:44.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "125",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10T13:30",
          },
          {
            id: 232,
            created_at: "2024-07-03T06:15:44.000000Z",
            updated_at: "2024-07-03T06:15:44.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "125",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10T13:30",
          },
          {
            id: 233,
            created_at: "2024-07-03T06:15:44.000000Z",
            updated_at: "2024-07-03T06:15:44.000000Z",
            option_id: "394",
            event_id: "447",
            guest_id: "125",
            passed: 0,
            label: "Example",
            price: "1 $",
            date: "2024-07-10T13:30",
          },
        ],
      },
    ],
    registration: null,
    tickets: null,
  };

  return (
    <div className="App">
      {/* <DateBox
        start="2024-03-26T11:00"
        end="2024-03-26T12:00"
        dateFormat="dddd, DD MMMM, YYYY"
        timeFormat="am/pm"
        timeZone="Europe/Moscow"
        eventTimeZone="Europe/Moscow"
        allDay={0}
        eventKind={1}
        type="timeBox"
        monthNameType="short"
        repeat={{
          type: "",
          interval: "",
          end: "",
          advanced: "",
          exclude: "",
        }}
        showTimeZone={true}
        changeRepeatDate={(key) => console.log(key, " - key")}
      />

      <Categories
        categories={[
          { id: 19412, name: "Opening Reception", color: "#005FB0" },
          { id: 19413, name: "Opening Reception 2", color: "#000" },
        ]}
      /> */}

      {/* <AddShareIcons
        title="asd"
        comp_id="sdfdsf"
        instance="asdfsdfs"
        instanceShort="asdasdad"
        event={exampleEvent2}
        boomEventUrlBase="sdfsdf"
        addToSectionName="sdfsdfsdf"
        shareSectionName="sdsdf"
        copyActionTooltipText="sdfsdfsd"
        copiedTooltipText="sdfsfsdf"
        wrapperCustomClassNames={[]}
        titleCustomClassNames={[]}
        contentCustomClassNames={[]}
        copyTooltipCustomClassNames={[]}
        order="horizontal"
        timeZone="+02:00"
      /> */}

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

      {/*
      <RegistrationButton
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
      />

      
    */}
      {event.start}
      <GuestLimit
        eventRegistration={event.registration}
        allDay={!!event.all_day}
        eventTicket={event.tickets}
        eventKind={event.kind}
        eventStartDate={event.start}
        eventEndDate={event.end}
        repeat={event.repeat}
        guests={event.guests}
        wrapperCustomClassNames={[]}
        planGuestLimit={25}
        label="fasdfs"
        addons={event.addons}
      />

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

      <div styles={{ width: 200 }}>
        <ImagesSlider
          image={[
            "https://buffer.com/library/content/images/2023/10/free-images.jpg",
            "https://buffer.com/library/content/images/2023/10/free-images.jpg",
          ]}
          navigation={false}
          imgWrapperCustomClassNames={["dasdasdasdsadsd"]}
        />
      </div>
    </div>
  );
}

export default App;
