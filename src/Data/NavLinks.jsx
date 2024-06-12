import SummarizeIcon from '@mui/icons-material/Summarize';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';

const navigations = [
    {
        title: "Overview",
        icon: <SummarizeIcon />,
        route: "/"
    },
    {
        title: "Appointment History",
        icon: <HistoryIcon />,
        route: "/appointment history"
    },
    {
        title: "My Reviews",
        icon: <ReviewsIcon />,
        route: "/my reviews"
    },
    {
        title: "Bills and Payments",
        icon: <PaymentsIcon />,
        route: "/bills and payments"
    },
    {
        title: "Notifications",
        icon: <NotificationsIcon />,
        route: "/notifications"
    }
]

export {navigations}