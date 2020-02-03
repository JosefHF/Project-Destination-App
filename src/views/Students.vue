<template>
  <div>
    <div class="home background">
      <div class="hero-body">
        <div class="has-text-centered header-div">
          <img src="../assets/Students/pd1920.png" class="pd1920" style="width: 25%;">
          <!--<h1 class="header">PROJECT DESTINATION 19/20</h1>-->
          <h1 class="header-inverted">What is your destination?</h1>
        </div>
      </div>
    </div>

    <div class="background2">
      <div class="container information">
        <div class="columns has-text-centered">
          <div class="column">
            <h1>What is Project Destination?</h1>
            <p class="textcolumn">Project Destination is just one of the most exciting and inspiring student project at KTH. It is a course (15hp) that 10 people get to take based on interviews. The course stretches from period 1 to period 4 with the goal to host different company events at KTH for students. Later on the team gets to go on a trip, of their choosing, for the money earned.
              <br><br>
              Does this sound interesting? Don't hesitate to sign up for a great experience. The applications will open shortly. 
            </p>
          </div>
          <div class="column">
            <h1>Upcoming events</h1>
            <Events/>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="background3">
      <CoolLightBox 
        :items="items" 
        :index="index"
        loop
        @close="index = null">
      </CoolLightBox>
      <div class="images-wrapper">
        <div
          class="image"
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="setIndex(imageIndex)"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>

      
    </div>
    <!-- <div class="background3">
      <div class="hero-body">
        <div class="has-text-centered">
          <h1>Last years trip, South America</h1>
          <div class="columns">
            <div class="column">
              <img src="../assets/field.jpg" style="width: 50%; border:solid;">
            </div>
            <div class="column">
              <img class="zoomA" src="../assets/beach.jpg" style="width: 50%; border:solid;">
            </div>
          </div>
          
        </div>
      </div>

    </div> -->
  </div>
</template>
<script>
import Events from "@/components/Events";
export default {
  name: "students",
  components: {
    Events
  }
};
</script>
<style scoped lang="scss">
.background {
  background: linear-gradient(rgba(#ef9bc1, 0.2), rgba(#ef9bc1, 0.5)),
    url(../assets/Students/World2.png) center !important;
  min-height: 90vh;
  background-size: cover !important;
}
.background2 {
  min-height: 60vh;
}
.background3 {
  min-height: 60vh;
}
.header-div {
  padding-top: 11%;
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
.pd1920 {
  width: 20%;
}
.information {
  padding-top: 10%;
}
.textcolumn {
  font-size: 1.4vw;
}
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
