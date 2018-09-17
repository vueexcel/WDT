<template>
    <div id="sidebar-wrapper">
        <div class="tab tab-intrv">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" name="search" style="height: 2.5rem;">
                <div class="input-group-btn">
                    <button class="btn btn-default" type="submit" style="line-height: 2.5rem;padding: 12px;margin-top: 0;"><i class="fa fa-search"></i></button>
                </div>
            </div>
            <div v-for="(val, index) in getLeftMenuData[getPageInfo.name]" :key="index">
                <button class="tablinks pad" onclick="">
                    <div class="media-body">
                     <h5 class="client">{{val.title}}</h5>
                        <h5 class="job">Budget: {{val.subtitle}}</h5>
                        <span class="badge" v-bind:class="{ primary: (val.button === 'New'), success: (val.button === 'Active'), info: (val.button === 'Open'), info: (val.button === 'Offer Job'), warning: (val.button === 'Saved'),warning: (val.button === 'Hold'),secondary: (val.button === 'Closed'), danger: (val.button === 'Submitted') }">{{val.button}}</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LeftMenuForCandidate',
  computed: {
    ...mapGetters({
      getLeftMenuData: 'getLeftMenuData',
      getPageInfo: 'getPageInfo',
      getUser: 'getUser'
    })
  },
  methods: {
    ...mapActions(['sendContentInfo'])
  },
  mounted () {
    let role = this.$store.state.headers.roleContentJson[this.getUser.role]
    this.sendContentInfo({
      name: role[0].subchild[1].name,
      pagetitle: role[0].subchild[1].pagetitle,
      prefix: role[0].subchild[1].prefix,
      index: 1
    })
  }
}
</script>

<style>
.primary{
    background-color: #0f9cf3;
    color: #ffffff;
}
.success{
    background-color: #6fd088;
    color: white;
}
.info{
    background-color: #0097a7;
    color:white;
}
.warning{
    background-color: #ffbb44;
    color: white;
}
.secondary{
    background-color: #868e96;
    color: #ffffff;
}
.danger{
    background-color: #f32f53;
    color: #ffffff;
}
</style>
