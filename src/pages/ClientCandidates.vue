<template>
    <div>
        <NavBar/>
        <div class="wrapper" id="wrapperId">
            <div class="container-fluid" id="contaiiner">
                <PageTitle/>
                <div class="row" style="min-height: 400px;" id="container-content">
                    <div class="col-lg-12">
                        <div class="tab-container">
                            <leftMenuCandidatedata/>
                            <candidates/>
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
import leftMenuCandidatedata from './../container/LeftMenuCandidateData.vue'
import candidates from './../components/Candidates.vue'
import Footer from './../components/Footer.vue'
export default {
  name: 'ClientCandidates',
  components: {
    NavBar,
    PageTitle,
    leftMenuCandidatedata,
    candidates,
    Footer
  }
}
</script>

<style>
#wrapperId{
    margin-bottom: 16.5em;
}
</style>
