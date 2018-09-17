<template>
    <div>
        <Information :sendName="getLeftMenuName.title"></Information>
        <PicsComponent :sendName="getLeftMenuName.title"></PicsComponent>
        <SkillsNeeded :sendName="getLeftMenuName.title"></SkillsNeeded>
        <PortfolioComponent :sendName="getLeftMenuName.title"></PortfolioComponent>
        <SocialComponent :sendName="getLeftMenuName.title"></SocialComponent>
        <EducationComponent :sendName="getLeftMenuName.title"></EducationComponent>
        <VideoComponent :sendName="getLeftMenuName.title"></VideoComponent>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Information from './../components/Information.vue'
import PicsComponent from './../components/PicsComponent.vue'
import SkillsNeeded from './../components/SkillsNeeded.vue'
import PortfolioComponent from './../components/Portfolio.vue'
import SocialComponent from './../components/SocialComponent.vue'
import EducationComponent from './../components/EducationComponent.vue'
import VideoComponent from './../components/VideoComponent.vue'
export default {
  name: 'UpdateProfile',
  components: {
    Information,
    PicsComponent,
    SkillsNeeded,
    PortfolioComponent,
    SocialComponent,
    EducationComponent,
    VideoComponent
  },
  computed: {
    ...mapGetters({
      getLeftMenuName: 'getLeftMenuName'
    })
  }
}
</script>

<style>

</style>
