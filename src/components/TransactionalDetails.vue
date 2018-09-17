<template>
    <div id="trans" class="tabcontent" v-if="sendName === 'Transactional Details'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title" id="transId">Transactional Details</h3>
                <div class="form-group">
                    <label class="control-label">Project Title</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label class="control-label">Account Number</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder=""> </div>
                <div class="form-group">
                    <label class="control-label">Payment Method</label>
                    <div>
                        <div class="form-check radio-pink-gap ">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio109">
                            <label class="form-check-label" for="radio114">Payment Method 1</label>
                        </div>
                        <div class="form-check radio-pink-gap">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio110" checked="">
                            <label class="form-check-label" for="radio115">Payment Method 2</label>
                        </div>
                        <div class="form-check radio-pink-gap">
                            <input name="group103" type="radio" class="form-check-input with-gap" id="radio111">
                            <label class="form-check-label" for="radio116">Payment Method 3</label>
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
  name: 'TransactionalDetail',
  props: ['sendName']
}
</script>

<style>
#trans{
    text-align: left;
}
#transId{
    font-weight: bold;
}
</style>
