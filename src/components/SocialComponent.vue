<template>
    <div id="social" class="tabcontent" v-if="sendName === 'Social'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <h3 class="mt-0 header-title font-weight-bold">Social Information</h3>
                <div class="form-group">
                    <label class="control-label">Website Portfolio</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="MyStuff.com">
                </div>
                <div class="form-group">
                    <label class="control-label">Linked In</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="Best Engineer">
                </div>
                <div class="form-group">
                    <label class="control-label">Facebook</label>
                    <textarea required="" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label class="control-label">Skype</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The French Riviera...">
                </div>
                <div class="form-group">
                    <label class="control-label">Text- Cell Phone</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The French Riviera...">
                </div>
                <div class="form-group">
                    <label class="control-label">Alternate Email</label>
                    <input maxlength="100" type="text" required="required" class="form-control" placeholder="The French Riviera...">
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
  name: 'SocialComponent',
  props: ['sendName']
}
</script>

<style>
#social{
    text-align: left;
}
</style>
