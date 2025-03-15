"use client";

import { useState, useEffect } from "react";

import Modal from "./modal";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    // Fetch events for the current month when currentDate changes
    useEffect(() => {
    fetchCurrentMonthEvents();
    }, [currentDate]);

    const fetchCurrentMonthEvents = async () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const start = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, daysInMonth, 23, 59, 59);

    let datesToGet = {
        start: start.toISOString(),
        end: end.toISOString(),
    }

    try {
        const response = await fetch('api/events', {
        method: 'POST',
        body: JSON.stringify(datesToGet),
        headers: {
            'Content-Type': 'application/json'
        }
        });

        const data = await response.json();
        console.log(data)
        setEvents(data.array);

    } catch (error) {
        console.error("Error fetching events:", error);
    }
    };

    const previousMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month + 1, 1));
    };

    // Build the calendar grid
    const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // Sunday = 0, Monday = 1, etc.
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendarDays = [];
    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(new Date(year, month, day));
    }
    // Pad the end of the calendar grid
    while (calendarDays.length % 7 !== 0) {
        calendarDays.push(null);
    }
    return calendarDays;
    };

    const isSameDay = (d1, d2) => {
    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
    };

    const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    openModal();
    };

    //   const closeModal = () => {
    //     setSelectedEvent(null);
    //   };

    // Helper: Format date for calendar links in "YYYYMMDDTHHmmssZ" format
    const formatDateForCalendar = (date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const generateGoogleCalendarLink = (event) => {
    const start = formatDateForCalendar(new Date(event.start));
    const end = formatDateForCalendar(new Date(event.end));
    const text = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
    };

    const generateICS = (event) => {
    const pad = (n) => (n < 10 ? "0" + n : n);
    const formatICSDate = (date) => {
        const d = new Date(date);
        return (
        d.getUTCFullYear().toString() +
        pad(d.getUTCMonth() + 1) +
        pad(d.getUTCDate()) +
        "T" +
        pad(d.getUTCHours()) +
        pad(d.getUTCMinutes()) +
        pad(d.getUTCSeconds()) +
        "Z"
        );
    };

    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        `UID:${Date.now()}@mycalendar`,
        `DTSTAMP:${formatICSDate(new Date())}`,
        `DTSTART:${formatICSDate(event.start)}`,
        `DTEND:${formatICSDate(event.end)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description || ""}`,
        `LOCATION:${event.location || ""}`,
        "END:VEVENT",
        "END:VCALENDAR",
    ];

    return lines.join("\r\n");
    };

    const downloadICS = (event) => {
    const icsContent = generateICS(event);
    const blob = new Blob([icsContent], {
        type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.title}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

    const calendarDays = getCalendarDays();

    return (
    <>
        <Modal isOpen = {isModalOpen} onClose={closeModal}>
            {selectedEvent && (
                <div>
                    <h2 className="text-xl underline">{selectedEvent.title}</h2>
                    <p>
                        <strong>Start:</strong>{" "}
                        {new Date(selectedEvent.start).toLocaleString()}
                    </p>
                    <p>
                        <strong>End:</strong>{" "}
                        {new Date(selectedEvent.end).toLocaleString()}
                    </p>
                    {selectedEvent.description && (
                        <p><strong>Description:</strong> {selectedEvent.description}</p>
                    )}
                    {selectedEvent.location && (
                        <p><strong>Location:</strong> {selectedEvent.location}</p>
                    )}

                    <div style={{ marginTop: "20px" }}>
                        <h3 className="text-xl underline">Add to Calendar:</h3>
                        <p>
                            <a
                            href={generateGoogleCalendarLink(selectedEvent)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-200 hover:underline"
                            >
                            Google Calendar
                            </a>
                        </p>
                        <p>
                            <button 
                            className="text-blue-500 hover:text-blue-200 hover:underline"
                            onClick={() => downloadICS(selectedEvent)}
                            >
                            Download (.ics)
                            </button>
                        </p>
                    </div>
                </div>    
            )}
        </Modal>

        <div>
        {/* Calendar Navigation */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button onClick={previousMonth}>Previous</button>
            <span style={{ margin: "0 15px", fontWeight: "bold" }}>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
            </span>
            <button onClick={nextMonth}>Next</button>
        </div>

        {/* Calendar Grid */}
        {/* <table style={{ width: "100%", borderCollapse: "collapse" }}> */}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
            <tr>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <th
                    key={d}
                    style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    background: "#f0f0f0",
                    }}
                >
                    {d}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {Array.from({ length: calendarDays.length / 7 }, (_, weekIndex) => (
                <tr key={weekIndex}>
                {calendarDays
                    .slice(weekIndex * 7, weekIndex * 7 + 7)
                    .map((day, index) => (
                    <td
                        key={index}
                        // style={{
                        //   border: "1px solid #ccc",
                        //   verticalAlign: "top",
                        //   height: "100px",
                        //   padding: "5px",
                        // }}
                        className="w-[100px] h-[100px] border-2 border-[#cccccc] align-top"
                    >
                        {day && (
                        <div>
                            <div style={{ fontWeight: "bold" }}>
                            {day.getDate()}
                            </div>
                            <div>
                            {events
                                .filter((e) => {
                                const eventDate = new Date(e.start);
                                return isSameDay(eventDate, day);
                                })
                                .map((event, i) => (
                                <div
                                    key={i}
                                    style={{
                                    background: "#eee",
                                    margin: "2px 0",
                                    padding: "2px",
                                    cursor: "pointer",
                                    borderRadius: "2px",
                                    }}
                                    onClick={() => handleSelectEvent(event)}
                                >
                                    {event.title}
                                </div>
                                ))}
                            </div>
                        </div>
                        )}
                    </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </>
    );
};

export default Calendar;
