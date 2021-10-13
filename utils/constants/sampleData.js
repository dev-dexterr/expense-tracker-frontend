import {income , expense} from "./icon";

const SAMPLE_DATA = [
    {
        id: "baby",
        name: "Baby",
        datetime: "11:35 AM",
        type: "Expense",
        amount: "400",
        icon: expense.baby
    },
    {
        id: "car-maintenance",
        name: "Car Maintenance",
        datetime: "12:00 PM",
        type: "Expense",
        amount: "1260",
        icon: expense.carMaintenance
    },
    {
        id: "movie",
        name: "Movie",
        datetime: "7:00 AM",
        amount: "2",
        type: "Expense",
        icon: expense.movie
    },
    {
        id: "parking",
        name: "Parking",
        datetime: "1:00 PM",
        amount: "5",
        icon: expense.parking
    },
    {
        id: "phone-bill",
        name: "Phone Bill",
        datetime: "1:00 PM",
        amount: "120",
        icon: expense.phoneBill
    },
    {
        id: "gas",
        name: "Gas",
        datetime: "1:00 PM",
        amount: "80",
        icon: expense.gas
    },

]

export default SAMPLE_DATA;