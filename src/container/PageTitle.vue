<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="page-title-box">
        <div class="btn-group pull-right">
          <ol class="breadcrumb hide-phone p-0 m-0" id="background">
            <li class="breadcrumb-item"><a href="#">{{getPageInfo.prefix}}</a></li>
            <li class="breadcrumb-item active">{{getPageInfo.pagetitle}}</li>
          </ol>
        </div>
        <h4 class="page-title" id="title">{{getPageInfo.pagetitle}}
          <a class="search-icn" data-toggle="collapse" href="#" aria-expanded="false" @click="showSearch" aria-controls="collapseExample">
          <i class="fa fa-search" v-if="getPageInfo.pagetitle === 'Candidates'"></i> </a>
        </h4>
      </div>
      <div class="collapse" id="collapseExample" v-bind:class="{show: (this.showSearchMenu === true)}">
        <div class="card" style="margin-bottom:1rem;" id="SearchCard">
          <div class="row" style="padding:1rem 1rem 0 1rem">
            <div class="col-sm-3">
              <div class="form-group">
                <input maxlength="" type="text" required="required" class="search-btn form-control" placeholder="Search by">
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <div class="dropdown mo-mb-2">
                  <button class="search-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Filter
                    </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"></a>
                    <a class="dropdown-item" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <div class="dropdown mo-mb-2">
                  <button class="search-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by
                    </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-primary">Apply</button>
            </div>
            <div class="col-sm-1">
              <a href="" style="color: #0f9cf3;">Clear all</a>
            </div>
            <div class="col-sm-3 ">
              <button type="button" class="btn btn-info pull-right">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'PageTitle',
  data () {
    return {
      showSearchMenu:false
    }
  },
  computed: {
    ...mapGetters({
      getPageInfo: 'getPageInfo'
    })
  },
  methods: {
    showSearch: function() {
      this.showSearchMenu = !this.showSearchMenu
    }
  }
}
</script>

<style>
  .breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    padding-left: .5rem;
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
    background: #B9DCE8;
    color: #343a40 !important;
    text-align: left;
    width: 100%;
    font-size: 16px;
}
#SearchCard{
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
