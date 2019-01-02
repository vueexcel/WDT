<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="page-title-box">
        <div class="btn-group pull-right">
          <ol class="breadcrumb hide-phone p-0 m-0" id="background">
            <li class="breadcrumb-item">
              <a href="#">{{getPageInfo.prefix}}</a>
            </li>
            <li class="breadcrumb-item active">{{getPageInfo.pagetitle}}</li>
          </ol>
        </div>
        <h4 class="page-title" id="title">{{getPageInfo.pagetitle}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PageTitle",
  data() {
    return {
      showSearchMenu: false
    };
  },
  computed: {
    ...mapGetters({
      getPageInfo: "getPageInfo"
    })
  },
  methods: {
    showSearch: function() {
      this.showSearchMenu = !this.showSearchMenu;
    }
  }
};
</script>

<style>
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: #868e96;
  content: "/";
}
#title {
  float: left;
  font-weight: bold;
}
#background {
  background: transparent;
}
.breadcrumb-item.active {
  color: #868e96;
}
.search-icn {
  padding: 8px 10px 8px;
  border-radius: 5px;
  background: #b9dce8;
  color: #343a40 !important;
  text-align: left;
  width: 100%;
  font-size: 16px;
}
#SearchCard {
  margin-top: 25px;
}
.search-btn {
  border: 1px solid #0f9cf3;
  padding: 5px 8px 4px;
  border-radius: 5px;
  background: #fff;
  color: #0f9cf3 !important;
  text-align: left;
  width: 100%;
}
</style>
