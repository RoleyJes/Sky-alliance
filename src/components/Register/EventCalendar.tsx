import { useState } from "react";
import Calendar from "react-calendar";

interface Event {
  id: number;
  title: string;
  details: string;
  time: string;
  link: string;
  bell: string;
  arrowForwardUp: string;
  date: string; // Date in "YYYY-MM-DD" format
}

interface EventCalendarProps {
  events: Event[]; // Array of events to filter
  onDateChange: (filteredEvents: Event[], selectedDate: Date | null) => void; // Callback to pass filtered events
}

export default function EventCalendar({
  events,
  onDateChange,
}: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);

    // Format the date to "YYYY-MM-DD" for comparison
    const formattedDate = date.toISOString().split("T")[0];

    // Filter events by the selected date
    const filteredEvents = events.filter(
      (event) => event.date === formattedDate,
    );

    // Pass filtered events and selected date to the parent
    onDateChange(filteredEvents, date);
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-darkGrey rounded-xl border-2 border-[#2e3033] text-neutral100 p-6 ">
      <h2 className="text-lg font-semibold mb-4">Pick a Date</h2>
      <Calendar
        onChange={(date) => handleDateChange(date as Date)}
        value={selectedDate}
        className="react-calendar"
      />
      {selectedDate && (
        <p className="mt-4">
          You selected:{" "}
          <span className="font-bold">{selectedDate.toDateString()}</span>
        </p>
      )}
    </div>
  );
}
