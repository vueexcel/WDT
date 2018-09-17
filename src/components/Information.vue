<template>
    <div id="info" class="tabcontent" v-if="sendName === 'Your Info'">
         <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
            <h3 class="mt-0 header-title font-weight-bold">Your Info</h3>
                <div class="form-group">
                    <label class="control-label">First Name</label> <code class="highlighter-rouge">(We keep your real name private.)</code>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter First Name">
                </div>
                <div class="form-group">
                    <label class="control-label">Last Name</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Last Name">
                </div>
                <div class="form-group">
                    <label class="control-label">Your Headline</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The Worlds best...">
                </div>
                <div class="form-group">
                    <label class="control-label">Sell Yourself in 1000 characters</label>
                    <textarea required="" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label class="control-label">Location in Words</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The French Riviera...">
                </div>
                <div class="form-group">
                    <label class="control-label">Location with Pin</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The French Riviera...">
                </div>
                <div class="form-group">
                    <label class="control-label">Time Zone</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The French Riviera...">
                </div>
                <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Information',
  props: ['sendName']
}
</script>

<style>
#info{
    text-align: left;
}
code {
    color: #0097a7;
}
</style>
