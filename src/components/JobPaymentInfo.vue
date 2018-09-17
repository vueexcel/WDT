<template>
    <div id="job" class="tabcontent" v-if="sendName === 'Job Payment Info'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title" id="jobPaymentHeading">Job Payment Info</h3>
                <div class="form-group">
                    <label class="control-label">How would you like to pay?</label>
                    <select class="form-control" style="width: 30%">
                        <option>Pay a Fixed Price</option>
                        <option>Pay by the Hour</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="control-label">Budget</label>
                    <div class="input-group bootstrap-touchspin" style="width: 30%;">
                        <span class="input-group-addon bootstrap-touchspin-prefix">$</span>
                        <input maxlength="100" type="text" required="required" class="form-control" placeholder="" style="width: 30%;">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">How long do you expect this job to last?</label>
                    <select class="form-control" style="width: 30%">
                        <option>More than 6 months</option>
                        <option>3 to 6 months</option>
                        <option>1 to 3 months</option>
                        <option>Less than 1 month</option>
                        <option>Less than 1 week</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>How many freelancers do you need to hire for this job?</label>
                    <div>
                        <div class="form-check radio-pink-gap ">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio112">
                            <label class="form-check-label" for="radio109"> I want to hire one freelancer </label>
                        </div>
                        <div class="form-check radio-pink-gap">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio113" checked>
                            <label class="form-check-label" for="radio110"> I need to hire more than one freelancer </label>
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
  name: 'JobPaymentInfo',
  props: ['sendName']
}
</script>

<style>
#job{
    text-align: left;
}
#jobPaymentHeading{
    font-weight: bold;
}
</style>
