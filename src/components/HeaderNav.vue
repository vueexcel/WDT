<template>
  <div class="topbar-main">
    <div class="container-fluid" id="header-nav">
      <!-- header Logo  -->
      <div class="logo">
        <a href="#" class="logo">
          <img :src="this.exchangeLogo" alt="brand_logo" height="50px">
        </a>
      </div>
      <!-- end of logo -->
      <!-- <SubHeaderMenu v-on:logoutUser="logout"/> -->
      <!-- components of role -->
      <!--  -->
      <!-- end of components of role -->
      <div class="clearfix">
        <div
          class="box"
          :key="index"
          v-for="(color, index) in themeColors"
          :style="{ backgroundColor: color}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import brandCommonData_ from "./../json/brandCommonData.json";
import fake from "./../json/UserData.json";
import SubHeaderMenu from "./SubHeaderMenu.vue";
import { mapActions } from "vuex";
export default {
  name: "HeaderNav",
  props: ["role", "getRoleJsonData", "roleContent"],
  components: {
    SubHeaderMenu
  },
  data() {
    return {
      exchangeLogo: "",
      themeColors: {},
      brandCommonData: brandCommonData_
    };
  },
  methods: {
    ...mapActions(["sendRoleContent", "sendContentInfo", "dologout"]),
    getContent: function(val) {
      this.sendRoleContent(val);
    },
    logout: function() {
      this.dologout();
      this.$router.push("/");
    },
    getBrandDataFromJson: function() {
      for (var i = 0; i < this.brandCommonData.length; i++) {
        if (this.brandCommonData[i].role === this.$props.role) {
          this.exchangeLogo = this.brandCommonData[i].exchangeLogo;
          this.themeColors = this.brandCommonData[i].themeColors;
        }
      }
    }
  },
  mounted() {
    let role = this.$store.state.headers.roleContentJson[this.role];
    this.sendRoleContent(role[0]);
    this.sendContentInfo({
      name: role[0].subchild[0].name,
      pagetitle: role[0].subchild[0].pagetitle,
      prefix: role[0].subchild[0].prefix,
      index: 0
    });
    this.getBrandDataFromJson();
  }
};
</script>

<style>
.box {
  height: 40px;
  width: 40px;
  float: right;
  margin: 10px 10px 0 0;
  border-radius: 50%;
}
#header-nav {
  width: 95%;
}
#breadcrumbs-two .active {
  background: #b9dce8;
  color: #343a40;
}
#breadcrumbs-two .active a {
  background: #b9dce8;
  color: #343a40;
}
#breadcrumbs-two .active a:after {
  border-left-color: #b9dce8;
}
#breadcrumbs-two .active a:before {
  border-color: #b9dce8 #b9dce8 #b9dce8 transparent;
}
</style>
