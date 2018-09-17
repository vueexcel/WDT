<template>
    <div id="work" class="tabcontent" v-if="sendName === 'Video'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title font-weight-bold">Work Details</h3>
                <div class="form-group">
                    <label class="control-label">Desired Rate</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="10/hr">
                </div>
                <div class="form-group">
                    <label class="control-label">How many hours</label>
                    <textarea required="" class="form-control" rows="3"></textarea>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button class="btn btn-primary " type="button">Previous</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary pull-right" type="button">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: ['sendName']
}
</script>

<style>
#work{
    text-align: left;
}
</style>
