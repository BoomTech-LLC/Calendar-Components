import Description from './lib/Description/index'
import GuestLimit from './lib/GuestLimit/index'
import BlurryLoadableImg from './lib/BlurryLoadableImg/index'
import RegistrationButton from './lib/RegistrationButton/index'
import DateBox from './lib/DateBox/index'
import ListedDetails from './lib/ListedDetails/index'
import Location from './lib/Location/index'
import AddShareIcons from './lib/AddShareIcons/index'

function App() {
  let exampleEvent1 = {"id":343491,"title":"Open Air Poetry Reading and Discussion","start":"2021-04-21","end":"2021-04-27","all_day":1,"image":"https:\/\/static.wixstatic.com\/media\/11062b_b31efefcdf3846849b7fe93d9203f105~mv2_d_6200_4132_s_4_2.jpg","desc":"<p>Four amazing evenings of poetry reading and discussion! We will do a poetry reading from various poets followed by an interactive discussion. Each day there will be three poets whose works will be read and discussed.<br>If you want to attend and listen to some great poetry, please register. Our organizers will get back to you.<\/p>","color":"color-13","venue":{"name":"Virginia Road","address":"1485 Virginia Road, San Marino, CA 91108, USA","city":"","statesList":"","country":"","postal":"","phone":"","email":"","website":"","showMap":"1","showMapLink":"1","lat":"34.1204167","long":"-118.1201348"},"organizer":{"name":"","phone":"","website":"","email":""},"repeat":{"type":"","interval":"","end":"","advanced":"","exclude":""},"kind":"0","categories":[],"guests":[],"registration":null,"tickets":null};
  if(!exampleEvent1.all_day) {
    exampleEvent1.startTime = moment(exampleEvent1.start).format('HH:mm');
    exampleEvent1.endTime = moment(exampleEvent1.end).format('HH:mm');
  }
  
  // let exampleEvent2 = {"id":343490,"title":"Yoga at the Beach","start":"2021-04-26T13:00:00","end":"2021-04-26T14:00:00","all_day":0,"image":"https:\/\/static.wixstatic.com\/media\/11062b_30464ec0744e445198eb1b60f2b594c2~mv2_d_5327_3551_s_4_2.jpg","desc":"Leave your stress at the office! Come join us this Tuesday afternoon for yoga during your lunch break.","color":"color-8","venue":{"name":"Marina del Rey","address":"Marina del Rey, CA, USA","city":"","statesList":"","country":"","postal":"","phone":"","email":"","website":"","showMap":"1","showMapLink":"1","lat":"33.9802893","long":"-118.4517449"},"organizer":{"name":"","phone":"","website":"","email":""},"repeat":{"type":"","interval":"","end":"","advanced":"","exclude":""},"kind":"0","categories":[],"guests":[],"registration":null,"tickets":null};
  // if(!exampleEvent2.all_day) {
  //   exampleEvent2.startTime = moment(exampleEvent2.start).format('HH:mm');
  //   exampleEvent2.endTime = moment(exampleEvent2.end).format('HH:mm');
  // }



  return (
    <div className="App">
      <Description
        title={'132'} 
        
      >
        {exampleEvent1.desc}
      </Description>
      <AddShareIcons
          comp_id={'comp-knoo8ma8'}
          instance={'YBqfV6G8MmNwzv-dQ5ASggk5froH6YF9uReO2n3FbNw.eyJpbnN0YW5jZUlkIjoiMjFmZDIwNzUtYWFiMy00NDc5LWIxZTYtZDk3M2YxNzc2NDFhIiwiYXBwRGVmSWQiOiIxM2I0YTAyOC0wMGZhLTcxMzMtMjQyZi00NjI4MTA2YjhjOTEiLCJzaWduRGF0ZSI6IjIwMjEtMDUtMThUMDY6MDc6NDcuMDY0WiIsImRlbW9Nb2RlIjpmYWxzZSwiYWlkIjoiYTk2ZWI5NzUtM2YyNS00NzQyLTg3MWUtNDJkNDNkMzdiNGJlIiwic2l0ZU93bmVySWQiOiJjZDQ4NmE0Ny0yODA4LTQxYmUtYjA0NS0xMGI2MDdhZTFiZTQifQ'}
          event={exampleEvent1}
          boomEventUrlBase={'https://calendar.boomte.ch/single/'}
          // order='horizontal'
          order='vertical'
      />     
      <ListedDetails
          title='title' 
          id={'id'}
          // title={'venueTitle'}
          values={{
              name: 'name',
              phone: 'phone',
              email: 'email',
              website: 'website'
          }}
          wrapperCustomClassNames={['a']}
      />
      <Location address='dw'/>
      
      <hr/>
      
      <DateBox
        start="09/27/2021T12:30"
        end="09/27/2021T13:30"
        dateFormat='dddd, MMMM DD'
        timeFormat='am/pm'
        all_day={false}
        showIcons={true}
        type='dateBox'
        oneLine={false}
        direction='column'
      />
      <hr/>
      <DateBox
        start="09/27/2021T12:30"
        end="09/27/2021T13:30"
        dateFormat='dddd, MMMM DD'
        timeFormat='am/pm'
        all_day={false}
        showIcons={true}
        oneLine={false}
        direction='row'
        />
        <hr/>
      <DateBox
        start="09/27/2021T12:30"
        end="09/28/2021T13:30"
        dateFormat='dddd, MMMM DD'
        timeFormat='am/pm'
        all_day={false}
        showIcons={true}
        oneLine={false}
        direction='row'
        showYear={true}
        year={2019}
      />

      <GuestLimit
        addons={[
          JSON.parse(test_registration_addon),
          JSON.parse(test_ticket_addon)
        ]}
        eventRegistration={JSON.parse(test_event_registration)}
        eventTicket={JSON.parse(test_event_ticket)}
        eventKind={1}
        eventEndDate='09/30/2021'
        eventStartDate='09/30/2021'
        repeat={{ type: '' }}
        guests={JSON.parse(test_event_guests)}
        wrapperCustomClassNames={['guest_limit']}
      /> 

    </div>
  )
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


export default App