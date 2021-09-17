import Description from './lib/Description/index';
import GuestLimit from './lib/GuestLimit/index';
import BlurryLoadableImg from './lib/BlurryLoadableImg/index';
import RegistrationButton from './lib/RegistrationButton/index';

function App() {

  return (
    <div className="App">
      <Description wrapperCustomClassNames={['dawda']}>
        {`<a href='#'>Lorem Ipsum</a>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.`}
      </Description>
      <br/>
      <GuestLimit
        addons={[
          JSON.parse(test_registration_addon),
          JSON.parse(test_ticket_addon)
        ]}
        eventRegistration={JSON.parse(test_event_registration)}
        eventTicket={JSON.parse(test_event_ticket)}
        eventKind={1}
        eventEndDate='09/20/2021'
        eventStartDate='09/01/2021'
        repeat={{ type: '' }}
        guests={JSON.parse(test_event_guests)}
        plan='starter'
        wrapperCustomClassNames={['guest_limit']}
      /> 
      <br/>
      <RegistrationButton
          addons={[
            JSON.parse(test_registration_addon),
            JSON.parse(test_ticket_addon)
          ]}
          eventRegistration={JSON.parse(test_event_registration)}
          eventTicket={JSON.parse(test_event_ticket)}
          eventKind={1}
          eventEndDate='09/20/2021'
          eventStartDate='09/01/2021'
          repeat={{ type: '' }}
          guests={JSON.parse(test_event_guests)}
          plan='starter'
          comp_id="comp-ktmt6bgo"
          instance="NwFyXu1vq_Khn6MZESJ3qC_hr6Pr2pO5nGms1q1Ixm4.eyJpbnN0YW5jZUlkIjoiZTllMTMzOWQtYWVkNy00MTUyLWE3OGItNDdlNjBlZTZmNjRlIiwiYXBwRGVmSWQiOiIxM2I0YTAyOC0wMGZhLTcxMzMtMjQyZi00NjI4MTA2YjhjOTEiLCJzaWduRGF0ZSI6IjIwMjEtMDktMTdUMDY6MTM6MjYuNDgwWiIsImRlbW9Nb2RlIjpmYWxzZSwiYWlkIjoiNDRmMjI1MjItNmI0OS00MmI1LTkxYzMtODhkYThkZWUyY2ZhIiwic2l0ZU93bmVySWQiOiI5MDliMTIzOC1lYjFiLTQ5MWYtYTMxMy1mZGMyNzk4OGU0YmIifQ"
          eventId="628002"
          registrationPageUrl="https://calendar.boomte.ch/registration/"
      />
      <br/>
      <BlurryLoadableImg 
        url='https://static.wixstatic.com/media/11062b_22f044821b38496fb51b39eb2ac1e257~mv2.jpg'
        color='aqua'
        title='img title'
        wrapperCustomClassNames={[]} 
        imgCustomClassNames={[]}

      />
    </div>
  );
}

const test_registration_addon =
  '{"value":{"registration":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":0,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}},"confirmation":{"subject":"Thank you for registering","desc":"<p>Hi {guestname},</p>\\n<p>Thanks for registering to our event. You can check your registration details below.</p>\\n<p>Looking forward to seeing you!</p>"},"reminder":{"subject":"You have an event coming up!","desc":"<p>Hi, {guestname}{guestname}</p>\\n<p>A friendly reminder on the upcoming event:</p>\\n<p>If there are any changes in your plans you can just hit reply to let us know.</p>","remTime":{"id":"time_option_2","value":"1 day before"}},"cancelation":{"subject":"An upcoming event has been canceled","desc":"<p>Hi,</p><p>We are sorry to inform you that the below event has been canceled.</p><p>Please accept our sincerest apologies for any inconvenience this may cause. We are looking forward to hosting you in the future.</p>"}},"title":"Registration","name":"registration","open_in":0,"image":"Registration.svg","description":"Collect and manage event registrations with a customizable form and email template."}'

const test_event_registration =
  '{"id":10,"comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"806070","value":{"open":true,"general":{"limit_type":"limited","page_url":"","site_type":1,"limit":10,"adminInfo":"","show_guest":true},"fields":[{"id":1,"type":"phone","placeholder":"Phone Number","label":"","required":false,"active":false},{"id":2,"type":"address","placeholder":"Address","label":"","required":false,"active":false},{"id":3,"type":"date","placeholder":"Date","label":"","required":false,"active":false},{"id":4,"type":"text","placeholder":"Your comments","label":"","required":false,"active":false},{"id":5,"type":"person","placeholder":"How many guests?","label":"","required":false,"active":false},{"id":6,"type":"comment","placeholder":"Anything else we need to know?","label":"","required":false,"active":false}],"defFields":{"form_title":"bjghgfhjghj","form_desc":"","first_name":"","last_name":"","email":""},"texts":{"rsvp":"Register","submit":"Submit","thank_title":"Registration completed successfully!","thank_body":"Please check your registered email address"},"emails":{"notif":true,"remind":true,"cancel":true}}}'

const test_ticket_addon =
  '{"value":{"fields":[{"id":0,"label":"tesxt","price":1,"limit":0,"type":"paid","limitNumber":2}],"general":{"open":true,"showPrices":true,"fee":0,"format":{"id":8,"value":"$100"},"currency":{"id":0,"code":"USD","value":"$ Dollars"},"showTicketLimit":true},"payment":{"cash":{"enable":true},"paypal":{"enable":false,"email":""},"stripe":{"enable":true,"account_id":""}},"promoCodes":[]},"title":"Ticket","name":"ticket","open_in":0,"image":"Ticket.svg","description":"Add different types of tickets to your events and sell them online or for cash."}'

const test_event_ticket =
  '{"id":28,"comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"fields":[{"id":0,"label":"tesxt","type":"paid","price":1,"limit":0,"limitNumber":3,"sold":[]}],"general":{"open":false,"showPrices":true,"fee":0,"format":{"id":8,"value":"$100"},"currency":{"id":0,"code":"USD","value":"$ Dollars"},"showTicketLimit":true},"payment":{"cash":{"enable":true},"stripe":{"enable":true},"paypal":{"enable":false}},"promoCodes":[]}}'

const test_event_guests =
  '[{"id":144,"created_at":"2021-09-02 13:14:49","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":2,"ticket_label":"tesxt"}],"first_name":"gd","last_name":"gdfg","email":"dfgdfg@fs.fd"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":360,"created_at":"2021-09-02T13:14:49.000000Z","updated_at":"2021-09-02T13:14:49.000000Z","option_id":"12","event_id":"808367","guest_id":"144","passed":0,"label":"tesxt"},{"id":361,"created_at":"2021-09-02T13:14:49.000000Z","updated_at":"2021-09-02T13:14:49.000000Z","option_id":"12","event_id":"808367","guest_id":"144","passed":0,"label":"tesxt"}]},{"id":145,"created_at":"2021-09-02 13:15:27","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":1,"ticket_label":"tesxt"}],"first_name":"sdfsd","last_name":"sdfsd","email":"fsdf@fsd.sdf"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":362,"created_at":"2021-09-02T13:15:27.000000Z","updated_at":"2021-09-02T13:15:27.000000Z","option_id":"12","event_id":"808367","guest_id":"145","passed":0,"label":"tesxt"}]},{"id":146,"created_at":"2021-09-02 13:15:48","comp_id":"comp-kr1zjlxk","instance":"67f3a243-b89c-4c58-96f4-87e2ebcdaac7","event_id":"808367","value":{"ticket":[{"quantity":1,"ticket_label":"tesxt"}],"first_name":"dfgdf","last_name":"gdf","email":"gdfgd@fsdf.sdf"},"passed":0,"date":"2021-09-04","time_zone":"Asia/Yerevan","info":{"boom_type":"cash","boom_status":"unpaid"},"status":"unpaid","type":"cash","sold_tickets":[{"id":363,"created_at":"2021-09-02T13:15:48.000000Z","updated_at":"2021-09-02T13:15:48.000000Z","option_id":"12","event_id":"808367","guest_id":"146","passed":0,"label":"tesxt"}]}]'


export default App;