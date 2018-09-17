<template>
    <div>
        <JobDescriptionContent :sendName="getLeftMenuName.title"></JobDescriptionContent>
        <SkillsNeeded :sendName="getLeftMenuName.title"></SkillsNeeded>
        <JobPaymentInfo :sendName="getLeftMenuName.title"></JobPaymentInfo>
        <TransactionalDetail :sendName="getLeftMenuName.title"></TransactionalDetail>
        <SubmitInfo :sendName="getLeftMenuName.title"></SubmitInfo>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import JobDescriptionContent from './../components/JobDescriptionContent.vue'
import SkillsNeeded from './../components/SkillsNeeded.vue'
import JobPaymentInfo from './../components/JobPaymentInfo.vue'
import TransactionalDetail from './../components/TransactionalDetails.vue'
import SubmitInfo from './../components/SubmitInfo.vue'
export default {
  name: 'CreateNewJobContainer',
  components: {
    JobDescriptionContent,
    SkillsNeeded,
    JobPaymentInfo,
    TransactionalDetail,
    SubmitInfo
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
