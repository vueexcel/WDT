<template>
  <div class="topbar-main">
    <div class="container-fluid" id="header-nav">
      <!-- header Logo  -->
      <div class="logo">
        <a href="#" class="logo">
          <img :src="getbrandData.exchangeLogo" :alt="getbrandData.exchangeName" height="50px">
        </a>
      </div>
      <!-- end of logo -->
      <!-- <SubHeaderMenu v-on:logoutUser="logout"/> -->
      <!-- components of role -->
      <!--  -->
      <!-- end of components of role -->
      <div class="clearfix">
        <div class="boxMain">
          <!--=============== Large Apps ===============-->
          <div
            :class="[{largebox1: isActiveOne}, {largebox2: isActiveSec}]"
            :key="index"
            v-for="(largeApp, index) in getbrandData.largeAppMenuItems"
          >
            <div class="largeAppCircle">
              <i
                style="font-size:13px; margin: 11px 12px;"
                :class="getbrandData.largeAppMenuItems[index].app_icon"
              ></i>
            </div>
            <div>{{ getbrandData.largeAppMenuItems[index].app }}</div>
          </div>

          <!--============= small Apps =================-->
          <div
            :class="[{smallbox1: isActiveOne}, {smallbox2: isActiveSec}]"
            :key="getbrandData.largeAppMenuItems.length+index"
            v-for="(smallApp, index) in getbrandData.smallMenuItems"
          >
            <div class="smallAppCircle">
              <i
                style="font-size:13px; margin: 0 auto;"
                :class="getbrandData.smallMenuItems[index].app_icon"
              ></i>
            </div>
            <div>{{ getbrandData.smallMenuItems[index].icon }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeaderMenu from "./SubHeaderMenu.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HeaderNav",
  props: ["role", "getRoleJsonData", "roleContent"],
  components: {
    SubHeaderMenu
  },
  computed: {
    ...mapGetters({
      getbrandData: "getbrandData"
    })
  },
  data() {
    return {
      exchangeLogo: "",
      themeColors: {},
      smallMenuItems: "",
      largeAppMenuItems: "",
      isActiveOne: "",
      isActiveSec: ""
    };
  },
  methods: {
    ...mapActions([
      "sendRoleContent",
      "sendContentInfo",
      "dologout",
      "fetchJson"
    ]),
    getContent: function(val) {
      this.sendRoleContent(val);
    },
    logout: function() {
      this.dologout();
      this.$router.push("/");
    },
    updateHoverState: function() {
      if (this.$props.role == "Client") {
        this.isActiveOne = true;
        this.isActiveSec = false;
      } else {
        this.isActiveOne = false;
        this.isActiveSec = true;
      }
    },
    // API call
    jsonApi: function() {
      this.fetchJson({
        role: this.$props.role
      });
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
    this.jsonApi();
    this.updateHoverState();
  }
};
</script>

<style>
.boxMain {
  float: right;
  width: 70%;
}

/* ============== Box CSS hover property===== */
.largebox1 {
  float: left;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  height: 67px;
  width: 70px;
}
.largebox1:hover {
  background-color: #057454;
  color: aliceblue;
}
.largebox2 {
  float: left;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  width: 70px;
  height: 67px;
}
.largebox2:hover {
  background-color: #247b14;
  color: aliceblue;
}

.smallbox1 {
  float: right;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  width: 60px;
  height: 67px;
}
.smallbox1:hover {
  background-color: #057454;
  color: aliceblue;
}
.smallbox2 {
  float: right;
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  width: 60px;
  height: 67px;
}
.smallbox2:hover {
  background-color: #247b14;
  color: aliceblue;
}
/*============== Box CSS hover property ends here ======*/

.largeAppCircle {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 0 auto;
  background: lightgrey;
}
.smallAppCircle {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin: 0 auto;
  background: lightgrey;
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
