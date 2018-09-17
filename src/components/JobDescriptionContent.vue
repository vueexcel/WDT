<template>
    <div id="project" class="tabcontent" v-if="sendName === 'Job Desrciption'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title" id="headingJob">Job Description</h3>
                <div class="form-group">
                    <label class="control-label">Job Title</label>
                    <input maxlength="" type="text" required="required" class="form-control" placeholder="Enter Job Title">
                </div>
                <div class="form-group">
                    <label class="control-label">Job Description</label>
                    <textarea required="" class="form-control" rows="4" placeholder="Describe the work to be done"></textarea>
                </div>
                <div class="form-group">
                    <label>What type of Job do you have?</label>
                    <div>
                        <div class="form-check radio-pink-gap ">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio109">
                            <label class="form-check-label" for="radio109">One-time Job</label>
                        </div>
                        <div class="form-check radio-pink-gap">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio110" checked>
                            <label class="form-check-label" for="radio110">Ongoing Job</label>
                        </div>
                        <div class="form-check radio-pink-gap">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio111">
                            <label class="form-check-label" for="radio111">I am not sure</label>
                        </div>
                    </div>
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
  name: 'JobDescriptionContent',
  props: ['sendName']
}
</script>

<style>
#project{
    text-align: left;
}
#headingJob{
    font-weight: bold;
    margin-top: 10px;
}
.card {
    border: none;
    box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.05);
}
</style>
