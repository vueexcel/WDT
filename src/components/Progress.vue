<template>
     <div class="card m-b-30" v-if="getUser.role === 'Team Member'">
        <div class="">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" title="Your profile completed">25%</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Progress',
  computed: {
    ...mapGetters({
      getUser: 'getUser'
    })
  }
}
</script>

<style>
.progress{
    height: 1.3rem;
    width: 80%;
    background: #C8E6F0;
}
.progress-bar{
    background-color: #0f9cf3;
}
</style>
