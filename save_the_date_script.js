import { atcb_action } from "https://cdn.skypack.dev/add-to-calendar-button@1.15";

const config = {
	"name":"Wedding of Soo Chin Chyuan & Phang Wei Sen",
    "description":"Thanks for your time, cant wait to see u there!!",
    "startDate":"2023-05-20",
    "endDate":"2023-05-20",
    "startTime":"18:00",
    "endTime":"22:00",
    "location":"Legend Zong Hua Banquet Hall 中华楼",
    "label":"Add to Calendar",
    "options":[
      "Apple",
      "Google",
      "iCal",
      "Microsoft365",
      "MicrosoftTeams",
      "Outlook.com",
      "Yahoo"
    ],
    "timeZone":"Singapore",
    "trigger":"click",
    "inline":true,
    "listStyle":"modal",
    "iCalFileName":"Reminder-Event"
};
const button = document.querySelector('.card_front_sub_content_6');
button.addEventListener('click', () => atcb_action(config, button));