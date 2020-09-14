<template>
  <div>
    <div class="hero-body screen-header has-text-centered is-pd-pink-invert background">
      <div class="has-text-centered header-div">
        <img src="@/assets/logo.png" style="width: 100px;">
        <h1 class="title pd-font uppercase spacing" style="color: black">Project Destination</h1>
        <div class="has-text-black" style="font-style: italic; font-size: 150%;">For students</div>
        <i class="fa fa-angle-down" style="font-size: 150%;" @click="scroll('intro')"></i>
      </div>
    </div>

    <div id="intro" class="container information" style="overflow: hidden;">
      <div class="columns has-text-centered">
        <div class="column">
          <h1 class="h11">What is Project Destination?</h1>
          <p class="textcolumn">Project Destination is the most exciting and inspiring student project at KTH. To sum it up, Project Destination is a course (15hp) that 10 people get to take based on interviews. The course stretches from period 1 to period 4 with the goal to host different company events at KTH for students. Later on the team gets to go on a trip, of their choosing, for the money earned.</p>
        </div>
        <div class="column">
          <h1 class="h11">Upcoming events</h1>
          <Events/>
        </div>
      </div>
    </div>
    
    <!-- <div>
      <h1 class="h11" style="text-align: center;">Roles you can apply for</h1>

      <div>
        <div class="columns has-text-centered">
          <div class="column">
            <p id="role">Project Manager</p>
          </div>
          <div class="column">
            <p id="role">Vice Project Manager</p>
          </div>
          <div class="column">
            <p id="role">Sales Manager</p>
          </div>
        </div>
         <div class="columns has-text-centered">
          <div class="column">
             <p id="role">Marketing Manager</p>
          </div>
          <div class="column">
            <p id="role">IT Manager</p>
          </div>
          <div class="column">
            <p id="role">Art Director</p>
          </div>
        </div>
        <div class="columns has-text-centered">
          <div class="column">
          </div>
          <div class="column">
            <p id="role">International relations Manager</p>
          </div>
          <div class="column">
          </div>
        </div>
      </div>
      
    </div> -->

    <hr>
    <div class="has-text-centered trip" style="overflow: hidden;"> 
      <h1 class="h11">Last years trip, South America</h1>
      <p style="width: 70%; margin: auto;" class="textcolumn">In March 2019 the team behind Project Destination flew to South America on a journey. A journey to explore the opportunities of a continent far, far away. They explored some of the largest cities and deepest forests of South America. They visit companies in Buenos Aires, Sao Paolo and Rio De Janeiro, three immensely large cities with many previously unexplored opportunities. Further, they visited a university and strengthened the relations with our home university that is KTH. The trip lasted for a total of three weeks. The team had a blast and brought back a lot of what they learned to Sweden.</p>
      <div class="hero-body">
        <img class="picture" v-for="image in images" :src="image.image" v-bind:key="image.id"/>
      </div>
        
    </div>
  </div>
</template>

<script>
import Events from "@/components/Events";

export default {
  name: "students",
  components: {
    Events
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  },
  data() {
    return {
      images: [
        {
          image: require("@/assets/beach.jpg"),
          id: 1
        },
        {
          image: require("@/assets/field.jpg"),
          id: 2
        },
        {
          image: require("@/assets/sky.jpg"),
          id: 3
        },
        {
          image: require("@/assets/beach2.jpg"),
          id: 4
        },
        {
          image: require("@/assets/penguin.jpg"),
          id: 5
        },
        {
          image: require("@/assets/walk.jpg"),
          id: 6
        },
        {
          image: require("@/assets/workshop.jpg"),
          id: 7
        },
        {
          image: require("@/assets/classroom.jpg"),
          id: 8
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.background {
  background: linear-gradient(rgba(#ef9bc1, 0.5), rgba(#ef9bc1, 0.2)),
    url(../assets/Students/World2.png) center !important;
  image-rendering: pixelated;
}
.background2 {
  min-height: 60vh;
}
.header-div {
  padding-top: 30vh;
}
.header {
  font-size: 200%;
  color: white;
  -webkit-text-stroke: 0.2px black;
}
.header-inverted {
  font-size: 200%;
  color: white;
  font-family: "Times New Roman";
  font-weight: 800;
}
.information {
  padding-top: 60px;
  padding-bottom: 40px;
}
.trip {
  padding-top: 40px;
  padding-bottom: 40px;
}
.screen-header {
  height: 100vh;
  background-color: #ef9bc1;
}
#role {
  margin: auto;
  border: 3px solid pink;
  padding: 10px;
}
@media screen and (min-width: 0px) and (max-width: 767px) {
  .textcolumn {
    font-size: 100%;
  }
  .pd1920 {
    width: 60%;
  }
  .background {
    min-height: 50vh;
    background-size: cover !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .textcolumn {
    font-size: 120%;
  }
  .pd1920 {
    width: 30%;
  }
  .background {
    min-height: 90vh;
    background-size: cover !important;
  }
}
@media screen and (min-width: 1024px) {
  .textcolumn {
    font-size: 120%;
  }
  .pd1920 {
    width: 25%;
  }
  .background {
    min-height: 90vh;
    background-size: cover !important;
  }
}
.picture {
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  width: 350px;
  height: 200px;
}
</style>
