<template>
  <div class="hero pd-intro is-home">
    <div class="section">
      <div class="hero-body has-text-centered">
        <h1 class="title pd-font uppercase spacing">
          The team
        </h1>
        <h2 class="subtitle pd-font uppercase spacing">
          20/21
        </h2>
        <div class="container">
          <div class="content pd-font">
            <div class="columns content-container">
              <div class="column">
                <Profile :data="team.kristina">
                  <img class="img" src="@/assets/team/hanna.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.anton">
                  <img class="img" src="@/assets/team/vera.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.alex">
                  <img class="img" src="@/assets/team/gabriella.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.ena">
                  <img class="img" src="@/assets/team/anna.png" slot="image" />
                </Profile>
              </div>
            </div>
            <div class="columns content-container">
              <div class="column">
                <Profile :data="team.daniel">
                  <img class="img" src="@/assets/team/maroun.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.philip">
                  <img class="img" src="@/assets/team/josef.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.fatme">
                  <img class="img" src="@/assets/team/lisa.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.michael">
                  <img class="img" src="@/assets/team/julian.png" slot="image" />
                </Profile>
              </div>
          
            </div>
            <div class="columns content-container">
              <div class="column">
              </div>
              <div class="column is-one-quarter">
                <Profile :data="team.alexandra">
                  <img class="img" src="@/assets/team/felix.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
                <Profile :data="team.filip">
                  <img class="img" src="@/assets/team/sofia.png" slot="image" />
                </Profile>
              </div>
              <div class="column">
              </div>
            </div>
            <div class="columns content-container">
              <div class="column">

              </div>
              <div class="column">
              </div>
              <div class="column">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>
import Profile from "@/components/Profile";
// import {
//   PROJECTL,
//   PROJECTV,
//   SALES,
//   MARKETING,
//   EVENT,
//   IR,
//   AD,
//   IT
// } from "@/constants/home";
import { team } from "@/constants/team";

export default {
  components: {
    Profile
  },
  data() {
    return { team };
    // return {
    // team: {
    // projectl: {
    //   name: "PROJECT MANAGER",
    //   text: PROJECTL,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/form/TpbGcxvpz7BJR3DMndum/"
    // },

    // projectv: {
    //   name: "VICE PROJECT MANAGER",
    //   text: PROJECTV,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // sales: {
    //   name: "SALES MANAGER",
    //   text: SALES,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // marketing: {
    //   name: "MARKETING MANAGER",
    //   text: MARKETING,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // event: {
    //   name: "EVENT MANAGER",
    //   text: EVENT,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // ir: {
    //   name: "INTERNATIONAL RELATIONS MANAGER",
    //   text: IR,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // ad: {
    //   name: "ART DIRECTOR",
    //   text: AD,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // it: {
    //   name: "IT MANAGER",
    //   text: IT,
    //   role: "Click To Apply",
    //   linkedin:
    //     "https://www.projectdestination.se/event/MB7T0YsFI2Jil7GiQ2xn/"
    // },
    // anna: {
    //   name: "Anna Phan",
    //   text: "",
    //   role: "Art Director",
    //   linkedin: "https://www.linkedin.com/in/anna-phan-b06750108/"
    // },
    // sofia: {
    //   name: "Sofia Larsson",
    //   text: "",
    //   role: "Project Manager",
    //   linkedin: "https://www.linkedin.com/in/sofia-larsson/"
    // },
    // vera: {
    //   name: "Vera Werner",
    //   text: "",
    //   role: "International Relations Manager",
    //   linkedin: "https://www.linkedin.com/in/vera-werner"
    // },
    // felix: {
    //   name: "Felix Ewert",
    //   text: "",
    //   role: "Vice Project Manager",
    //   linkedin: "www.linkedin.com/in/felixewert"
    // },
    // hanna: {
    //   name: "Hanna Kerek",
    //   text: "",
    //   role: "Event manager",
    //   linkedin: "https://linkedin.com/in/hanna-kerek"
    // },
    // lisa: {
    //   name: "Lisa A. Olsson",
    //   text: "",
    //   role: "Event Manager",
    //   linkedin: "http://linkedin.com/in/lisa-olsson-498b93b7"
    // },
    // gabriella: {
    //   name: "Gabriella Westman",
    //   text: "",
    //   role: "International Relations Manager",
    //   linkedin: "https://www.linkedin.com/in/gabriella-westman-49ba62131/"
    // },
    // maroun: {
    //   name: "Maroun R Nasr",
    //   text: "",
    //   role: "Sales Manager"
    // },
    // julian: {
    //   name: "Julian Jaramillo",
    //   text: "",
    //   role: "Marketing Manager",
    //   linkedin: ""
    // },
    // }
    // };
  }
};
</script>

<style lang="css" scoped>
.img {
  border-radius: 1000000000px !important;
  overflow: hidden;
}
.media {
  margin: 10% 10% !important;
  border: none !important;
}
.content-container {
  margin-top: 80px;
}
</style>
