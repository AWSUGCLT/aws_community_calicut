<template>
  <div>
    <h1>Event Schedule</h1>
    <h2>Monday, March 27</h2>
    <hr class="mb-5" />
    <div v-for="(event, index) in eventDetails" class="py-3 px-1" :key="index">
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
          {
            name: "Venue-1",
            title: "Aparajithan Vaidyanathan",
            subTitle: "Principal Solutions Architect at AWS, Bangalore, India",
            topic: [
              "Envisioning customer identity and access management using Amazon Cognito. Overview + Short Demo",
              "Overview of Data Analytics and AI/ML offerings and capabilities from AWS. Covers the services used for e2e DA & ML including data ingestion, storage, processing, query, visualization and ML. a. Can be one or two session covering DA and AI/ML separately or together. b. Can also do a simple demo",
            ],
          },
        ],
      },
      {
        time: "10:30 - 11:30 AM",
        venueDetials: [
          {
            name: "Venue-1",
            title: "Gaurav Gupta",
            subTitle: "Principal Solutions Architect at AWS, Bangalore, India",
            topic: ["Overview of Serverless on AWS" ,"Event-Driven Architectures" ,"Serverless use cases "],
          },
        ],
      },
      {
        time: "11:30 - 12:00 PM",
        venueDetials: [{ name: "Venue-1", title: "Dijeesh Padinharethil", subTitle: "Director of Engineering, AWS Container Hero, Organizer - AWSUGKOCHI / CNCFKOCHI, Sedai" ,topic: ["Running Containers on AWS"],}],
      },
      {
        time: "12:00 - 12:30 PM",
        venueDetials: [{ name: "Venue-1", title: "Faizal", subTitle: "Manager, Database Administration, Rybbon",topic: ["RDS - Aurora"], }],
      },
      {
        time: "12:30 - 1:00 PM",
        venueDetials: [{ name: "Venue-1", title: "Vijay Sai", subTitle: "Sr. Software QA Engineer, Rybbon",topic: ["Distributed Load testing on AWS with Jmeter"], }],
      },
      {
        time: "1:00 - 2:00 PM",
        break: true,
        name: "Lunch Break",
      },
      {
        time: "2:00 - 2:30 PM",
        venueDetials: [
          { name: "Venue-1", title: "Vishnu Ks", subTitle: "" ,topic: ["Migrate VMs from anywhere to AWS using open source / Setting up EKS cluster using terraform and fluxcd"],},
          { name: "Venue-2", title: "Hackathon", subTitle: "" },
        ],
      },
      {
        time: "2:30 - 3:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Amal Mathew", subTitle: "Sr. Software Engineer, QBurst",topic: ["Amazon S3 Glacier for Long-Term Data Storage"], },
          { name: "Venue-2", title: "Hackathon", subTitle: "" },
        ],
      },
      {
        time: "3:00 - 3:30 PM",
        venueDetials: [{ name: "Venue-1", title: "Anoop", subTitle: "Sr. Software Engineer, Rybbon",topic: ["AWS SageMaker Canvas"], }],
      },
      {
        time: "3:30 - 4:00 PM",
        venueDetials: [{ name: "Venue-1", title: "Praveesh V", subTitle: "Cloud Architect",topic: ["Cost Optimization in AWS: Best Practices and Strategies"], }],
      },
      {
        time: "4:00 - 4:30 PM",
        break: true,
        name: "Teak Break",
      },
      // {
      //   time: "4:30 - 5:00 PM",
      //   venueDetials: [
      //     { name: "Venue-1", title: "Praveesh", subTitle: "" ,topic: ["Cost Optimization in AWS: Best Practices and Strategies"],},
      //   ],
      // },
      {
        time: "4:30 - 5:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "Sreerag Mohan", subTitle: "Full Stack Engineer at ACTC",topic:["Amazon Code Catalyst"] },
        ],
      },
      {
        time: "5:00 - 5:30 PM",
        venueDetials: [
          { name: "Venue-1", title: "Open discussion", subTitle: "" },
        ],
      },
      {
        time: "5:30 - 6:00 PM",
        venueDetials: [
          { name: "Venue-1", title: "vote of thanks", subTitle: "" },
        ],
      },
    ],
  }),
};
</script>

<style >
</style>