<template>
  <div class="home">
    <NavBar/>
    <div class="wrapper">
      <div class="container-fluid" id="contaiiner">
        <PageTitle/>
        <div class="row" style="min-height: 400px;" id="container-content">
          <div class="col-lg-12">
            <div class="tab-container">
              <LeftMenuBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './../container/NavBar.vue'
import PageTitle from './../container/PageTitle.vue'
import LeftMenuBar from './../container/LeftMenuBar.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    PageTitle,
    LeftMenuBar
  }
  // beforeMount () {
  //   if(this.$store.state.login.user.email === '' ) {
  //     this.$router.push('/')
  //   }
  // }
}
</script>

<style>
  #contaiiner {
    width: 95%;
  }
  #container-content{
    margin-top: 15px;
  }
</style>
