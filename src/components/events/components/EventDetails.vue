<template>
  <div>
    <h1>Event Schedule</h1>
    <h2>Tuesday, March 21</h2>
    <hr class="mb-5" />
    <div v-for="(event, index) in eventDetails" class="py-3 pr-1" :key="index">
      <event-shedule-card :event="event" />
    </div>
  </div>
</template>

<script>
import EventSheduleCard from "./EventSheduleCard.vue";
export default {
  components: { EventSheduleCard },
  data: () => ({
    eventDetails: [
      {
        time: "8:00 - 9:00 AM",
        venueDetials: [
          { name: "Venue-1", title: "Registration", subTitle: "" },
        ],
      },
      {
        time: "9:00 - 9:30 AM",
        venueDetials: [
          {
            name: "Venue-1",
            title: "Kickoff for AWS User Group",
            subTitle: "",
          },
        ],
      },
      {
        time: "9:30 - 10:30 AM",
        venueDetials: [
          { name: "Venue-1", title: "AWS", subTitle: "Speaker from AWS" },
        ],
      },
      {
        time: "10:30 - 11:30 AM",
        venueDetials: [
          { name: "Venue-1", title: "AWS Speaker from AWS", subTitle: "" },
        ],
      },
      {
        time: "11:30 - 12:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "ULTS CTO", subTitle: "" },
        ],
      },
      {
        time: "12:00 - 12:30 PM",
        venueDetials: [
          { name: "Venue-1", title: "Faizal", subTitle: "" },
        ],
      },
      {
        time: "12:30 - 1:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Amal Mathew", subTitle: "" },
        ],
      },
      {
        time: "1:00 - 2:00 PM",
        break:true,
        name:"Lunch Break"
      },
      {
        time: "2:00 - 2:30 PM",
        venueDetials: [
          { name: "Venue-1", title: "Sreerag Mohan", subTitle: "" },
          { name: "Venue-2", title: "Hackathon", subTitle: "" },
        ],
      },
      {
        time: "2:30 - 3:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Vijay Sai", subTitle: "" },
          { name: "Venue-2", title: "Hackathon", subTitle: "" },
        ],
      },
      {
        time: "3:00 - 3:30 PM",
        venueDetials: [
          { name: "Venue-1", title: "Anoop", subTitle: "" },
        ],
      },
      {
        time: "3:30 - 4:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Iqbal", subTitle: "" },
        ],
      },
      {
        time: "4:00 - 4:30 PM",
        break:true,
        name:"Teak Break"
      },
      {
        time: "4:30 - 5:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Navaneeth Mohan", subTitle: "" },
        ],
      },
      {
        time: "5:30 - 6:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Navaneeth Mohan", subTitle: "" },
        ],
      },
      {
        time: "6:00 - 6:30 PM",
        venueDetials: [
          { name: "Venue-1", title: "Vote of Thanks", subTitle: "" },
        ],
      },
    ],
  }),
};
</script>

<style >
</style>