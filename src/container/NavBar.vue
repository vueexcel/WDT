<template>
    <div id="topnav">
      <TopNav :role="getUser.role"></TopNav>
      <HeaderNav :role="getUser.role" :getRoleJsonData="getRoleJson" :roleContent="getRoleContent"></HeaderNav>
      <SubHeader :roleContent="getRoleContent" :pageInfo="getPageInfo"></SubHeader>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TopNav from './../components/TopNav.vue'
import HeaderNav from './../components/HeaderNav.vue'
import SubHeader from './../components/SubHeader.vue'
export default {
  name: 'NavBar',
  components: {
    TopNav,
    HeaderNav,
    SubHeader
  },
  computed: {
    ...mapGetters({
      getUser: 'getUser',
      getRoleContent: 'getRoleContent',
      getRoleJson: 'getRoleJson',
      getPageInfo: 'getPageInfo'
    })
  }
}
</script>

<style>
</style>
