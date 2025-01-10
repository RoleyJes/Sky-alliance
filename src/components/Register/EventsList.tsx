import EventCalendar from "./EventCalendar";
import bell from "../../assets/Register/Bell.png";
import arrowForwardUp from "../../assets/Home/Arrow_Right_LG.svg";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "BTC Halving",
    details:
      "mazing things to show you all and b you we have sev era you all and you  mazing things to show you all and b you we have severa you all and you",
    time: "8:00am - 9:00pm",
    link: "View events",
    bell,
    arrowForwardUp,
    date: "2024-11-25",
  },
  {
    id: 1,
    title: "BTC Halving",
    details:
      "mazing things to show you all and b you we have sev era you all and you  mazing things to show you all and b you we have severa you all and you",
    time: "8:00am - 9:00pm",
    link: "View events",
    bell,
    arrowForwardUp,
    date: "2024-11-25",
  },
  {
    id: 1,
    title: "BTC Halving",
    details:
      "mazing things to show you all and b you we have sev era you all and you  mazing things to show you all and b you we have severa you all and you",
    time: "8:00am - 9:00pm",
    link: "View events",
    bell,
    arrowForwardUp,
    date: "2024-11-25",
  },
];

export default function EventsList() {
  // const [filteredEvents, setFilteredEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (filtered: typeof events, date: Date | null) => {
    setFilteredEvents(filtered);
    setSelectedDate(date);
  };

  return (
    <section>
      <div className="w-full flex justify-between items-center mb-10">
        <p className="text-xl md:text-4xl font-bold text-neutral100">
          January 02 2024
        </p>
        {/* <button className="bg-pink text-white px-4 py-2 rounded-md shadow-lg">
          View Calendar
        </button> */}
      </div>

      {/* Calendar Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Display Selected Events */}
        <div className="mt-8">
          {selectedDate ? (
            filteredEvents.length > 0 ? (
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Events on {selectedDate.toDateString()}:
                </h3>
                <ul className="space-y-4">
                  {filteredEvents.map((event) => (
                    <li
                      key={event.id}
                      className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
                      {event.title}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No events found on {selectedDate.toDateString()}.</p>
            )
          ) : (
            <p>Please select a date to view events.</p>
          )}
        </div>

        <EventCalendar events={events} onDateChange={handleDateChange} />
      </div>
    </section>
  );
}
