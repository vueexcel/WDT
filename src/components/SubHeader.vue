<template>
    <div class="navbar-custom active" id="navigation_4">
        <div class="container-fluid" id="fluid">
            <div id="navigation" class="active">
                <ul class="navigation-menu">
                    <li class="has-submenu " v-for="(val,index) in roleContent.subchild" :key="index" v-bind:class="{ active_bg: (pageInfo.index === index)}">
                        <a href="#" @click="getpage(val, index)">{{val.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SubHeader',
  props: ['roleContent', 'pageInfo'],
  methods: {
    ...mapActions(['sendContentInfo']),
    getpage: function (e, index) {
      this.sendContentInfo({
        index: index,
        name: e.name,
        pagetitle: e.pagetitle,
        prefix: e.prefix
      })
      if (e.name === 'Job Postings') {
        this.$router.push('/jobPostingPage')
      }
      if (e.name === 'Create New Job') {
        this.$router.push('/createNewJob')
      }
      if (e.name === 'Candidates') {
        this.$router.push('/clientCandidates')
      }
    }
  }
}
</script>

<style>
#topnav .navigation-menu > li.active_bg{
    background-color: #0097a7 !important;
}
#topnav .navigation-menu > li.active_bg a{
    color: #ffffff !important;
}
#topnav .navigation-menu > li.active_bg a:hover {
    color: #212529  !important;
}
#fluid{
    width: 95%;
}
#topnav .navigation-menu > li{
    float: left;
}
a,a:hover{
    text-decoration: none;
}
#topnav .navbar-custom {
    background-color: #B0DBE9;
    display: -webkit-box;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    padding-left: 0;
}
.btn-primary {
    background-color: #0f9cf3;
    border: 1px solid #0f9cf3;
}
.btn-primary:hover{
    background-color: #0b8ddd;
    border: 1px solid #0b8ddd;
}
@media (min-width: 992px){
#topnav .navigation-menu > li:first-of-type > a {
    padding-left: 25px;
}
}

</style>
