import { Event } from "../ensemble"

export const EVENTS: Event[] = [
    {
        id: 1,
        ensembleID: 1,
        name: "St Paul Feast",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        location: {lat:35.929777, lng:14.441126} ,
        date: "2022-03-24",
        time: "12:00:00"
    },
    {
        id: 2,
        ensembleID: 1,
        scores: [3],
        name: "Summer Concert",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Practice",
        location: {lat:20, lng:20} ,
        date: "2022-03-24",
        time: "09:00:00"
    },
    {
        id: 3,
        ensembleID: 1,
        name: "Good Friday procession",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        location:{lat:20, lng:150} ,
        date: "2022-03-24",
        time: "18:15:00"
    },
    {
        id: 4,
        ensembleID: 2,
        name: "President Concert",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        location: {lat:20, lng:20} ,
        date: "2022-03-24",
        time: "10:30:00"
    },
    {
        id: 5,
        ensembleID: 3,
        name: "President Concert",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        date: "2022-03-24",
        time: "15:45:00",
        location: {lat:35.899526, lng:14.518251} ,
        scores:[4,5]
    }
]