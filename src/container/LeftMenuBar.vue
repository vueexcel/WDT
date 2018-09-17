<template>
  <div id="sidebar-wrapper">
    <div class="tab">
      <button class="tablinks" v-for="(val, index) in getLeftMenuData[getPageInfo.name]" :key="index" v-bind:class="{ active: (getLeftMenuName.index === index)}" @click="openPageContent(val,index)" id="defaultOpen"><span class="step-num" v-if="getUser.role != 'Team Member'">{{index+1}}</span> <span class="title titleClass"> <i v-if="getUser.role === 'Team Member'" class="fa fa-dot-circle-o dotCircle" aria-hidden="true"></i> {{val.title}} </span><i class="tick fa fa-check-square-o" id="leftMenuIcon" v-if="getUser.role != 'Team Member' && getLeftMenuName.title === val.title" aria-hidden="true"></i></button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'LeftMenuBar',
  computed: {
    ...mapGetters({
      getUser: 'getUser',
      getLeftMenuData: 'getLeftMenuData',
      getPageInfo: 'getPageInfo',
      getLeftMenuName: 'getLeftMenuName'
    })
  },
  methods: {
    ...mapActions(['LeftMenuContentName']),
    openPageContent: function (e, index) {
      this.LeftMenuContentName({
        subtitle: e.subtitle,
        title: e.title,
        index: index
      })
    }
  }
}
</script>

<style>
.tab button.active {
  background-color: #0097a7;
  color: #fff;
  display: flex;
  border-radius: .25rem;
}

.tab button.active {
  background-color: #0097a7;
  color: #fff;
  display: flex;
  border-radius: .25rem;
}

.tab-container .title {
  font-size: 15.5px;
}

#leftMenuIcon {
  font-size: 21px;
}
.dotCircle{
  margin-top: 5px;
}
.titleClass{
  margin-left: 6px !important;
}
</style>
