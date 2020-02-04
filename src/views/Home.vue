<template>
  <div class="home">
    <section class="hero pd-font uppercase spacing background">
      <nav class="navbar" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-menu is-active" id="navMenu">
          <div class="navbar-start navbar">
            <div class="kkk navbar is-left">
              <a
                @click="login"
                style="border: 1px solid #898989"
                class="left navbar-item"
              >
                <small>{{user ? "Enter app" : "Log in"}}</small>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <br><br>
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="@/assets/logo_white.png" style="width: 100px;">
          <h1 class="title pd-font has-text-white pd-font">Project Destination</h1>
        </div>
        <div class="container has-text-centered">
          <a
            @click="handleClick(`/companies`)"
            target="_blank"
            class="button is-pd-pink spacing"
          >For Companies</a>

          <a
            @click="handleClick(`/students`)"
            target="_blank"
            class="button is-pd-pink spacing"
          >For Students</a>
        </div>
        <div class="has-text-centered pd-font has-text-white"><br><br><br><h1>Our Main Sponsor</h1><br><img src="../assets/mvb-logo.png" style="width: 24%; padding-left: 3%;"></div>
      </div>
    </section>
    <div class="hero pd-intro is-white">
      <div class="hero-body has-text-centered">
        <div class="section">
          <h1 class="title pd-font uppercase spacing">Upcoming events</h1>
          <div class="container">
            <div class="content pd-font">
              <div class="columns">
                <div class="column is-one-fifth"></div>
                <div class="parent column">
                  <Events/>
                  <div class="section pd-font uppercase spacing">
                    <h3 class="title is-7 pd-font">Follow us at</h3>
                    <a target="_blank" href="https://www.instagram.com/projectdestination/">
                      <img class="icon" width="20px" src="../assets/insta.png">
                    </a>
                    <a target="_blank" href="https://www.facebook.com/projectdestination/">
                      <img class="icon" width="20px" src="../assets/fb.png">
                    </a>
                  </div>
                </div>
                <div class="column is-one-fifth"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--
    <div class="hero pd-intro is-home" >
      <div class="section" style="background-color:#cccccc; overflow: auto;">
        <div class="hero-body has-text-centered">
          <h1 class="title pd-font uppercase spacing">
            What is Project Destination?
          </h1>
          <div class="hero-body has-text-center">
          <div class="columns">
            <div class="column">
              <p>
                <span class=""><strong>Project Destination</strong> is a successful KTH-platform with a focus on displaying the wide range of career paths available to our students. We organize events where students and companies meet and establish contact for future collaborations. Every company wants to hire the best employees, but finding them can be difficult. 
                </span>
              </p>
            </div>
            <div class="column">
              <p>
                <span class=""> 
                Through our wide network and marketing channels, we will reach out to the candidates you are looking for. Project Destination <strong>creates value for both companies and students</strong>. In our product catalog you can read more about our events and choose what suits your company best. All events are tailored to your needs and the audience that you are interested in. We hereby invite you to participate in Project Destination to inspire, discover and connect!
                </span>
              </p>
            </div>
          </div>
        </div>

          </div>
      </div>
    </div>
  -->

    <TheTeam/>
    
  </div>
</template>
<script>
// @ is an alias to /src
/* <section class="hero pd-intro is-medium background3 is-bold">
      <div class="section has-text-centered">
        <h1
          style="background-color: #000; display:inline-block;"
          class="title pd-font has-text-white uppercase spacing"
        >Our destination</h1>
        <div class="hero-body has-text-center">
          <div class="columns">
            <div class="column"></div>
            <div class="column">
              <h1
                style="display: inline-block"
                class="title content2 has-text-white is-4 pd-font uppercase spacing"
              >PROJECT SOUTH AMERICA</h1>
              <p>
                <span class="content2 has-text-white">{{TRIP}}</span>
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </section>
*/
import Hero from "@/components/Hero";
import HeroSmall from "@/components/HeroSmall";
import Level from "@/components/Level";
import Tiles from "@/components/Tiles";
import Columns from "@/components/Columns";
import Intro from "@/components/Intro";
import TheTeam from "@/components/TheTeam";
import Events from "@/components/Events";
import { TRIP } from "@/constants/home";

import { mapState } from "vuex";
const MAGAZINE_LINK =
  "https://firebasestorage.googleapis.com/v0/b/project-destination-file-hosting/o/magazine.pdf?alt=media&token=3931e497-286f-41a7-a50c-0839bbfc81c9";
export default {
  name: "home",
  components: {
    TheTeam,
    Hero,
    Level,
    Events,
    Tiles,
    Columns,
    HeroSmall,
    Intro
  },
  data: () => {
    return {
      MAGAZINE_LINK
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login/openModal");
    },
    handleClick(path) {
      this.$router.push(path);
    },
    navigate() {
      this.$router.push("/event/MB7T0YsFI2Jil7GiQ2xn");
      this.$ga.event("Home page", "Clicked main button");
    }
  },
  computed: {
    ...mapState({
      content: state => state.content.HOME_PAGE_DATA,
      user: state => state.user.userIsAuthenticated
    }),
    TRIP: () => TRIP
  },
  created() {
    this.$store.dispatch("content/getHomePageData");
  }
};
</script>
<style scoped lang="scss">
.margin {
  margin-top: 6% !important;
}

.pd-intro {
  margin-top: 0%;
}
.content-container {
  margin: 7% 0;
  height: 100%;
}
.pd-team {
  margin-top: 7%;
  height: 90vh;
}
.background {
  background: linear-gradient(rgba(#ef9bc1, 0.2), rgba(#ef9bc1, 0.5)),
    url(../assets/team1918.jpeg) center !important;
  background-size: cover !important;
  min-height: 100vh;
}

.background2 {
  background: linear-gradient(rgba(#ffd96a, 0.2), rgba(#ffd96a, 0.8)),
    url(../assets/team/team2.jpg) center fixed !important;
  background-size: cover !important;
}

.background3 {
  background: linear-gradient(rgba(#ffd96a, 0.5), rgba(#ffd96a, 0.2)),
    url(../assets/field.jpg) center !important;
  background-size: cover !important;
}

.content2 {
  background-color: #000;
}

.button {
  text-transform: uppercase;
}

a {
  transition: all 0.3s;
}

.button-modifier:hover {
  background-color: rgba(#ffffff, 0) !important;
}

.button {
  margin: 30px 5px 0 5px;
}

.button:hover {
  transform: scale(1.05);
}

.nav-button {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 10000px !important;
  border-bottom-left-radius: 10000px !important;
  background-color: rgba(#ffffff, 0);
  transition: background-color 0.2s;
}

.arrow-down {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: scale(1.2) translate(-50%, -100%);
}

a:hover {
  background-color: none;
}
.icon {
  margin: 0 5px;
}

.nav-button:hover {
  background-color: rgba(#ffffff, 0.2) !important;
}

.navbar-menu {
  width: 100%;
  margin-top: 10px;
}
.navbar-brand {
  background-color: rgba(#ffffff, 0);
}
.navbar-burger {
  border: none;
  background-color: rgba(#ffffff, 0);
}
.navbar-burger:hover {
  border: none;
  background-color: rgba(#ffffff, 0);
}
.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30px;
  height: 150px;
  width: auto;
}
.navbar {
  border: none;
  box-shadow: 0 0 0 #000 !important;
  filter: drop-shadow(0) !important;
  background-color: rgba(#ebb285, 0);
}

.navbar a:hover {
  background-color: rgba(#ffffff, 0) !important;
  color: #fff !important;
}

.navbar a {
  text-align: center !important;
}
</style>
