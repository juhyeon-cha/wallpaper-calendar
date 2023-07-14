import tuiCalendar from "@/components/calendar/tui.calendar";
import fullCalendar from "@/components/calendar/fullcalendar";
import React from "react";

type CalendarType = "tui.calendar" | "fullcalendar";

const useLib: CalendarType = "tui.calendar";

export default function Calendar() {
    const CalendarComponent = useLib == "tui.calendar" ? tuiCalendar : fullCalendar;

    return (
        <div>
            <CalendarComponent />
        </div>
    );
}
