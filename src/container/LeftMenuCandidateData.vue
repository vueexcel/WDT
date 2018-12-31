<template>
  <div id="sidebar-wrapper">
    <div class="tab tab-intrv">
      <button
        class="tablinks pad"
        id="defaultOpen"
        v-for="(val, index) in getLeftMenuData[getPageInfo.name]"
        :key="index"
      >
        <div class="row" style="width: 100%;">
          <div class="col-md-10">
            <div class="media">
              <img
                class="d-flex mr-3 rounded-circle img-thumbnail intrv-sm"
                src="./../assets/menu1.jpg"
                alt="Generic placeholder image"
              >
              <div class="media-body">
                <h5 class="client">{{val.title}}</h5>
                <h5 class="job">{{val.subtitle}}</h5>
                <h5 class="cand">Expected Rate: {{val.rate}}</h5>
                <h5 class="cand">Availability: {{val.availability}}</h5>
                <h5 class="cand">
                  <i
                    style="font-size:14px;color: #00808e;"
                    class="fa fa-map-marker"
                    title="View Video Interview"
                  ></i>
                  {{val.country}}
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-1">
            <div class="dropdown mo-mb-2 hide">
              <a class href="#" id="dropdownMenuLink">
                <i style="font-size:25px;" class="fa fa-ellipsis-h"></i>
              </a>
            </div>
            <span
              class="badge"
              v-bind:class="{primary:(val.button === 'New'), success: (val.button === 'Active'),danger: (val.button === 'Closed'),info: (val.button === 'Offer Job'),warning: (val.button === 'Hold')}"
            >{{val.button}}</span>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "leftMenuCandidatedata",
  computed: {
    ...mapGetters({
      getLeftMenuData: "getLeftMenuData",
      getPageInfo: "getPageInfo"
    })
  }
};
</script>

<style>
.tab-container .cand {
  color: #707070;
  font-size: 12px;
  font-weight: 400 !important;
  margin: 5px 0 !important;
}
.primary {
  background-color: #0f9cf3;
  color: #ffffff;
}
.success {
  background-color: #6fd088;
  color: #ffffff;
}
.info {
  background-color: #0097a7;
  color: #ffffff;
}
.warning {
  background-color: #ffbb44;
}
.danger {
  background-color: #f32f53;
  color: #ffffff;
}
.tab-intrv button:first-child {
  background-color: #fff;
  display: flex;
  border-radius: 0.25rem;
}
</style>
