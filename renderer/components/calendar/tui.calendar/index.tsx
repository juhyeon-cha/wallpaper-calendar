import dynamic from "next/dynamic";
// import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
    ssr: false,
});

const view = "month";

export default function tuiCalendar() {
    return <Calendar usageStatistics={false} height="600px" view={view} events={[]} />;
}
