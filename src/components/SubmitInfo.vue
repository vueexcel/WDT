<template>
    <div id="search" class="tabcontent" v-if="sendName === 'Submit Info'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title" id="searchId">Search Info</h3>
                <div class="form-group">
                    <label class="control-label">Search Keywords</label>
                    <textarea required="" class="form-control" rows="4" placeholder="Enter comma separated keywords."></textarea>
                </div>
                <div class="form-group">
                    <div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck2" data-parsley-multiple="groups" data-parsley-mincheck="2">
                            <label class="custom-control-label" for="customCheck1">Display Public</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <button class="btn btn-primary " type="button">Previous</button>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary pull-left" type="button">Save as Draft</button>
                    </div>
                    <div class="col-md-8">
                        <a href="#"> <button class="btn btn-primary pull-right" type="button">Post Job</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SubmitInfo',
  props: ['sendName']
}
</script>

<style>
#search{
    text-align: left;
}
#searchId{
    font-weight: bold;
}
</style>
