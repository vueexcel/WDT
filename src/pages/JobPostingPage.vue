<template>
    <div class="JobPostingPage">
        <NavBar/>
        <div class="wrapper" id="wrapperId1">
            <div class="container-fluid" id="contaiiner">
                <PageTitle id="JobPostingTitle"/>
                <div class="row" >
                    <div class="col-12">
                        <div class="tab-container">
                            <LeftMenuForCandidate/>
                            <JobPosting/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer id="footerId"/>
  </div>
</template>

<script>
import NavBar from './../container/NavBar.vue'
import PageTitle from './../container/PageTitle.vue'
import LeftMenuForCandidate from './../container/LeftMenuForCandidate.vue'
import JobPosting from './../components/JobPosting.vue'
import Footer from './../components/Footer.vue'
export default {
  name: 'JobPostingPage',
  components: {
    NavBar,
    PageTitle,
    LeftMenuForCandidate,
    JobPosting,
    Footer
  }
}
</script>

<style>
#JobPostingTitle{
    padding-bottom: 20px;
}
#wrapperId1{
    margin-bottom: 8em;
}
#contaiiner{
   width: 95%;
}
#footerId{
  position: relative;
}
</style>
