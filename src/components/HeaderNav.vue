<template>
    <div class="topbar-main">
        <div class="container-fluid" id="header-nav">
            <!-- header Logo  -->
            <div class="logo">
                <a href="#" class="logo">
                    Exchange Logo
                </a>
            </div>
            <!-- end of logo -->
            <SubHeaderMenu v-on:logoutUser="logout"/>
            <!-- components of role -->
            <div class="menu-extras topbar-custom main-nav">
                <ul class="list-inline float-right mb-0" id="breadcrumbs-two">
                    <li style="padding-top: 10px;"><span class="service"> SERVICES <i class="fa fa-angle-double-right" aria-hidden="true" id="roleIcon"></i></span></li>
                    <li v-for="(val, index) in getRoleJsonData[role]" :key="index" v-bind:class="{active: (roleContent.title === val.title)}" >
                        <a href="#" data-target="navigation_1" @click="getContent(val)">
                            {{val.title}}
                        </a>
                    </li>
                </ul>
            </div>
            <!--  -->
            <!-- end of components of role -->
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import SubHeaderMenu from './SubHeaderMenu.vue'
import {mapActions} from 'vuex'
export default {
  name: 'HeaderNav',
  props: ['role', 'getRoleJsonData', 'roleContent'],
  components: {
    SubHeaderMenu
  },
  methods: {
    ...mapActions(['sendRoleContent', 'sendContentInfo', 'dologout']),
    getContent: function (val) {
      this.sendRoleContent(val)
    },
    logout: function () {
      this.dologout()
      this.$router.push('/')
    }
  },
  mounted () {
    let role = this.$store.state.headers.roleContentJson[this.role]
    this.sendRoleContent(role[0])
    this.sendContentInfo({
      name: role[0].subchild[0].name,
      pagetitle: role[0].subchild[0].pagetitle,
      prefix: role[0].subchild[0].prefix,
      index: 0
    })
  }
}
</script>

<style>
#header-nav{
    width: 95% ;
}
#breadcrumbs-two .active {
    background: #B9DCE8;
    color: #343a40;
}
#breadcrumbs-two .active a{
    background: #B9DCE8;
    color: #343a40;
}
#breadcrumbs-two .active a:after {
    border-left-color: #B9DCE8;
}
#breadcrumbs-two .active a:before {
    border-color: #B9DCE8 #B9DCE8 #B9DCE8 transparent;
}
</style>
