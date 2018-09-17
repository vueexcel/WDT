<template>
    <div>
        <NavBar/>
        <div class="wrapper picClass">
            <div class="container-fluid" id="contaiiner">
                <PageTitle/>
                <div class="row" style="min-height: 400px;" id="container-content">
                    <div class="col-lg-12">
                        <Progress/>
                        <div class="tab-container">
                            <LeftMenuBar/>
                            <UpdateProfile/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import NavBar from './../container/NavBar.vue'
import PageTitle from './../container/PageTitle.vue'
import UpdateProfile from './../container/UpdateProfile.vue'
import Progress from './../components/Progress.vue'
import LeftMenuBar from './../container/LeftMenuBar.vue'
import Footer from './../components/Footer.vue'
export default {
  name: 'TeamMemberPage',
  components: {
    NavBar,
    PageTitle,
    Progress,
    UpdateProfile,
    LeftMenuBar,
    Footer
  }
}
</script>

<style>
.picClass{
    margin-bottom: 10em;
}
</style>
