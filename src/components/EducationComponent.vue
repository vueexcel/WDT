<template>
    <div id="edu" class="tabcontent" v-if="sendName === 'Education'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title font-weight-bold">Education Information</h3>
                <div class="form-group">
                    <label class="control-label">Pick Item</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label class="control-label">Item Description</label>
                    <textarea required="" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label class="control-label">Years of Experience</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label class="control-label">Professional Engineer</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label class="control-label">Certified</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button class="btn btn-primary " type="button">Previous</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary pull-right" type="button">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EducationComponent',
  props: ['sendName']
}
</script>

<style>
#edu{
    text-align: left;
}
</style>
