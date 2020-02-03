<template>
  <div class="Companies">
    <meta name="viewport" content= "width=device-width, user-scalable=no">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

<!--     <section class="background">
        <div class="hero-body">
          <div class="columns">
            <div class="column">sa</div>
            <div class="column">sa</div>
            <div class="column">sa</div>
          </div>
        </div>
    </section> -->

    <section class="background">
      <div class="hero-body">
        <div class="columns test">
            <div class="column test2">
              <br><br><br>
              <div class="column has-text-centered"><img src="../assets/forCompanies/SJ.png" style="width: 100px;"></div>
              <br><br>
              <div class="column"><img src="../assets/forCompanies/sverigesIn.png" style="width: 100px;">
              </div>
            </div>

            <div class="column has-text-centered intro">
              <img src="../assets/logo.png" style="width: 20%;">
              <br><br>
              <h1 class="uppercase hero pd-font has-text-black" style="font-size: 200%;">Project Destination
              </h1>
              <div class="has-text-black" style="font-style: italic; font-size: 150%;">For companies
              </div>
              <i class="fa fa-angle-down" style="font-size: 150%;" @click="scroll('intro')"></i>
            </div>

            <div class="column test2">
              <div class="columns test">
                <div class="column"><br><img src="../assets/forCompanies/seb.png" style="width: 100px;">
                </div>
                <div class="column">
                  <img src="../assets/forCompanies/riskPilot.png" style="width: 250px; padding-top: 130%;">
                </div>
              </div>
            </div>
          </div>

          <div class="columns test test2">
            <div class="column has-text-centered">
              <img src="../assets/forCompanies/hemso.png" style="width: 200px;">
            </div>
            <div class="column has-text-centered">
              <br><br><br><br><br>
              <img src="../assets/mvb-logo.png" style="width: 200px; padding-left: 4%;">
            </div>
            <div class="column has-text-centered">
              <img src="../assets/forCompanies/westForest.png" style="width: 100px;">
            </div>
          </div>
        </div>
    </section>


    <section class="blank" style="overflow: hidden;" id="intro">
      <div class="hero-body">
        <div class="container information">
          <div class="columns has-text-centered">
            <div class="column has-text-black">
              <h1 style="font-size: 200%; text-decoration: underline;" data-aos="fade-left">What is project destination?</h1>
              <p class="textcolumn" data-aos="fade-up">Project Destination (PD) is one of few Employer Branding projects at KTH that reach all kind of different students. Its focus is on the international market, where students and companies meet and  establish contact for future worldwide collaborations. Every company wants to hire the best employees, but finding them can be difficult. Through our wide network and marketing channels, we will reach the candidates your company are looking for.
            </p>
            </div>
            <div class="column has-text-black">
              <h1 style="font-size: 200%; text-decoration: underline;" data-aos="fade-right">What we offer you</h1>
              <p class="textcolumn" data-aos="fade-up">
                We offer <b>custom-made</b> and <b>cost-effective</b><b> EVENTS</b>, which will help your company to reach your target students at KTH. The events will be customized according to your desire and PD will use its wide network and marketing channels to find the candidates that your company is searching for. 
                <br>
                <br>
                We tailor everything accordning to your needs, but to give you some inspiration, we have listed some standard events below
                <br><br>
              </p>

            </div>
          </div>
        </div>

        <div class="columns has-text-centered">
          <div class="column">
            <p>Contact</p>
            Project Manager: <a href="mailto:contact@test.com">sofia@projectdestination.se</a>
            <br>
            Sales Manager: <a href="mailto:contact@test.com">maroun@projectdestination.se</a>
            <br>
          </div>
        </div>
    </div>
  </section>

  <section class="background2" style="overflow: hidden;">
    <div data-aos="fade-up">
      <br>
      <h1 class="has-text-white" style="font-size: 500%; background-color: black;">Morning Events</h1>
    </div>
    <br>
    <div class="hero-body">
      <div class="columns titles">
        <div data-aos="fade-left" class="column has-text-white" style=" background-color: black;">
        Morning events are a great way to brand your company to students on their way to their first lecture of the day.
        </div>

        <div class="column">
        </div>
      </div>
      <br><br><br><br><br>
      <div class="columns titles2" >
        <div class="column"></div>
        <div class="column has-text-white" style="background-color: black;" data-aos="fade-right">
        Catch them in the early hours and be sure you’ll stay in their minds for the rest of the day. If desired, we can target any students you’re interested in, no matter their education.
        </div>
      </div>
    </div>
  </section>


  
  <section class="background3" style="overflow: hidden;">
    <br><br><br>
    <div class="hero-body">
    <div class="columns" style="text-align: center;">
      <div class="column has-text-white">
      </div>
      <div class="column">
        <div>
          <h1 style="background: #cebf98; font-size: 200%"> Meet the Early Birds</h1>
          <br><br>
          <div class="text" style="background: #ded4bb; font-size: 150%; border-radius: 25px;padding: 10px;">
            A breakfast seminar at KTH campus or your office will give your representatives the time for a short presentation about the opportunities at your company. Combine the most important meal of the day with mingle and by giving the students a closer look at your company’s culture in a relaxed setting. We will gather students who match your company’s profile and arrange breakfast for all participants
          </div> 
        </div>
      </div>
      <div class="column" style="text-align: center;">
        <div>
          <h1 style="background: #cebf98; font-size: 200%">Walk and Talk
          </h1>
          <br><br>
          <div class="text" style="background: #ded4bb; font-size: 150%; border-radius: 25px;padding: 10px;">Does your company likes to follow the latest trends? Then this event is something for you. Walk and talk gives you the opportunity to meet students in a natural and fun way. Studies shows that walk and talk meetings gives better personal connection, decreases stress and increases creativity compared to a normal meeting. The event ends with a healthy and delicious breakfast. <!-- Title: #e3be89 body: #dec39e -->
          </div>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
  </section>

  <section class="background4" style="overflow: hidden;">
    <div class="columns" data-aos="fade-up">
      <div class="column has-text-white">
        <br>
        <h1 style="font-size: 500%; background-color: black;">Lunch Events</h1>
      </div>
    </div>
    <div class="hero-body">
      <div class="columns titles" data-aos="fade-left">
        <div class="column has-text-white" style="background-color: black;">
          We promise to deliver outstanding events and the lunch presentation is no exception. A fun presentation in combination with great food is an unforgettable way to present your company as a future employer.
        </div>
        <div class="column">
        </div>
      </div>
      <br><br><br><br><br><br>
    <div class="columns titles2">
      <div class="column">
      </div>
      <div class="column has-text-white" style="background-color: black;" data-aos="fade-right">
        Through our years of holding lunch presentation we are in a great position to assist your representatives on how to deliver the best presentation they can and ways to optimize their time when speaking to up to 100 attentive and curious students.
      </div>
    </div>
  </div>
  </section>

  <section class="background5" style="overflow: hidden;">
    <br><br><br>
    <div class="hero-body">
    <div class="columns" style="text-align: center;">
      <div class="column has-text-white">
      </div>
      <div class="column">
        <div>
          <h1 style="background: #e6a1a1; font-size: 200%">Eat and Meet
          </h1>
          <br><br>
          <div class="text" style="background: #f1c9c9; font-size: 150%; border-radius: 25px;padding: 10px;">
            Present your company’s career opportunities and culture, while the students are treated with a lunch they will remember. We would be happy to work together with your company representatives in order to create an inspiring and successful lunch event. 
          </div> 
        </div>
        
      </div>
      <div class="column" style="text-align: center;">
        <div>
          <h1 style="background: #e6a1a1; font-size: 200%">Pitch Perfect
          </h1>
          <br><br>
          <div class="text" style="background: #f1c9c9; font-size: 150%; border-radius: 25px;padding: 10px;">Together with other companies and a moderator, you get the chance to meet students during lunch. While you pitch your company in a fun and original setting, we aim to open up a dialogue with the students. This can be especially cost-effective for companies who want to showcase a smaller part of their organisation. Example of themes: gender equality, innovation, international opportunities, sustainability and career opportunities.
          </div>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
  </section>


  <section class="background6" style="overflow: hidden;">
    <div class="columns" data-aos="fade-up" >
      <div class="column has-text-white">
        <br>
        <h1 style="font-size: 500%; background-color: black;">Afternoon Events
        </h1>
      </div>
    </div>
    <div class="hero-body">
        <div class="columns titles" data-aos="fade-left">
      <div class="column has-text-white" style="background-color: black;">
        Let students get to know a new side of your company, during a relaxing meeting. This is a good opportunity to present your company, talk about something you are passionate about and get to know the students skills.
      </div>
      <div class="column">
      </div>
    </div>
  </div>
  </section>

  <section class="background7" style="overflow: hidden;">
    <br><br><br>
    <div class="hero-body">
    <div class="columns" style="text-align: center;">
      <div class="column has-text-white">
      </div>
      <div class="column">
        <div>
          <h1 style="background: #fde19c; font-size: 200%">Swedish Fika
          </h1>
          <br><br>
          <div class="text2" style="background: #fef0ce; font-size: 150%; border-radius: 25px;padding: 10px;">Meet the students and talk about your company’s culture while getting to know what they are passionate about. With smoothies, coffee or something else that could reflect the environment at your company they will have a better understanding of which possibilities lies within your sphere.
          </div> 
        </div>
        
      </div>
      <div class="column" style="text-align: center;">
        <div>
          <h1 style="background: #fde19c; font-size: 200%">Mock Interview
          </h1>
          <br><br>
          <div class="text2" style="background: #fef0ce; font-size: 150%; border-radius: 25px;padding: 10px;">Together with some afternoon fika you get the opportunity to meet students one by one. A mock interview is a great opportunity to get to know students in an undisturbed and relaxed environment. The students can apply with their CV and your company have free hands to design the conversation. This will be an interactive afternoon where both you and the students learn about each other. We will book rooms at KTH Campus and you can enjoy an afternoon with handpicked students who are looking forward to meeting you.
          </div>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
  </section>

  <section class="background8" style="overflow: hidden;">
    <div data-aos="fade-up">
      <br>
      <h1 class="has-text-white" style="font-size: 500%; background-color: black;">Evening Events</h1>
    </div>

    <div class="hero-body">
          <div class="columns titles" data-aos="fade-left">
            <div class="column has-text-white" style="background-color: black;">
            The ultimate event to get the students closer to your company culture by escaping the normal campus routine and presenting your company from the heart of your office or at a planned public place.
          </div>
          <div class="column">
        </div>
      </div>
    </div>
  </section>
    


  <section class="background9">
    <div class="hero-body">
      <br><br><br><br>
      <div class="columns">
        <div class="column"> 
          <h1 class="has-text-centered" style="background: #fde19c; font-size: 160%"> Office Fun Time </h1>
          <br><br>
          <div style="background: #fef0ce; font-size: 180%; border-radius: 25px;padding: 10px;">We offer custom-made and cost-effective events, which will help your company to reach your target students at KTH. The events will be customized according to your desire and PD will use its wide network and marketing channels to find the candidates that your company is searching for. 
          </div> 
        </div>
        <div class="column">
          <h1 class="has-text-centered" style="background: #fde19c; font-size: 160%"> Case Solving</h1>
          <br><br>
          <div style="background: #fef0ce; font-size: 180%; border-radius: 25px;padding: 10px;">We offer custom-made and cost-effective events, which will help your company to reach your target students at KTH. The events will be customized according to your desire and PD will use its wide network and marketing channels to find the candidates that your company is searching for. 
          </div> 
        </div>
        <div class="column">
          <h1 class="has-text-centered" style="background: #fde19c; font-size: 160%"> Activity outside the Office and Campus </h1>
          <br><br>
          <div style="background: #fef0ce; font-size: 180%; border-radius: 25px;padding: 10px;">We offer custom-made and cost-effective events, which will help your company to reach your target students at KTH. The events will be customized according to your desire and PD will use its wide network and marketing channels to find the candidates that your company is searching for. 
          </div> 
        </div>
      </div>
    </div>

  </section>



  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    handleClick(path) {
      this.$router.push(path);
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style scoped lang="scss">
.blank {
  min-height: 100vh;
}
.background {
  background: url(../assets/forCompanies/titlepic.jpg) center !important;
  background-size: cover !important;
  min-height: 100vh;
  width: 100%;
}
.background2 {
  background: url(../assets/forCompanies/eventpic2.jpg) center !important;
  background-size: cover !important;
  min-height: 102vh;
  width: 100%;
}
.background3 {
  background: url(../assets/forCompanies/eventpic3.jpg) center !important;
  background-size: cover !important;
  min-height: 110vh;
  width: 100%;
}
.background4 {
  background: url(../assets/forCompanies/eventpic4.jpg) center !important;
  background-size: cover !important;
  min-height: 100vh;
  width: 100%;
}
.background5 {
  background: url(../assets/forCompanies/eventpic5.jpg) center !important;
  background-size: cover !important;
  min-height: 110vh;
  width: 100%;
}
.background6 {
  background: url(../assets/forCompanies/eventpic6.jpg) center !important;
  background-size: cover !important;
  min-height: 110vh;
  width: 100%;
}
.background7 {
  background: url(../assets/forCompanies/eventpic7.jpg) center !important;
  background-size: cover !important;
  min-height: 110vh;
  width: 100%;
}
.background8 {
  background: url(../assets/forCompanies/eventpic8.jpg) center !important;
  background-size: cover !important;
  min-height: 120vh;
  width: 100%;
}
.background9 {
  background: url(../assets/forCompanies/eventpic9.jpg) center !important;
  background-size: cover !important;
  min-height: 100vh;
  width: 100%;
}

/* Container holding the image and the text */
.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: white;
}
.intro {
  padding-top: 15%;
}
/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}
/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#art {
  width: 100%;
  height: 2px;
  margin-top: -17px;
  position: relative;
  top: 0px;
  left: 0px;
  background-color: #000;
}
@media screen and (min-width: 0px) and (max-width: 767px) {
  .text .text2 {
    width: 100%;
  }
  .test {
    text-align: center;
    padding-left: 0%;
  }
  .test2 {
    display: none;
  }
  .titles .titles2 {
    font-size: 200%;
    padding-left: 0%;
    padding-right: 0%;
  }
  .textcolumn {
    font-size: 120%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .text .text2 {
    width: 100%;
  }
  .test {
    text-align: center;
    padding-left: 0%;
  }
  .titles .titles2 {
    font-size: 200%;
    padding-left: 0%;
    padding-right: 0%;
  }
  .textcolumn {
    font-size: 1.8vw;
  }
}
@media screen and (min-width: 1024px) {
  .text {
    width: 400px;
  }
  .text2 {
    width: 500px;
  }
  .titles {
    font-size: 200%;
    padding-left: 4%;
  }
  .titles2 {
    font-size: 200%;
    padding-right: 4%;
  }
  .textcolumn {
    font-size: 1.8vw;
  }
}
.information {
  padding-top: 5%;
}
</style>
