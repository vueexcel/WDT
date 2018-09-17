<template>
    <div id="pics" class="tabcontent" v-if="sendName === 'Pictures'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <h3 class="mt-0 header-title font-weight-bold">Profile Icon </h3>
                            <div>
                                <input type="file" value="Input" class="choosefile">
                            </div>
                            <div class="profile-pic">
                                <img class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="./../assets/menu1.jpg" data-holder-rendered="true">
                            </div>
                            <input maxlength="100" type="text" required="required" class="form-control" placeholder="Jimmy P">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <h3 class="mt-0 header-title font-weight-bold">Arms Crossed</h3>
                            <div>
                                <input type="file" value="Input" class="choosefile">
                            </div>
                            <div class="profile-pic">
                                <img class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="./../assets/menu1.jpg" data-holder-rendered="true">
                            </div>
                            <input maxlength="100" type="text" required="required" class="form-control" placeholder="The Best Engineer">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <h3 class="mt-0 header-title font-weight-bold">Best Work Picture</h3>
                            <div>
                                <input type="file" value="Input" class="choosefile">
                            </div>
                            <div class="profile-pic">
                                <img class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="./../assets/menu1.jpg" data-holder-rendered="true">
                            </div>
                            <input maxlength="100" type="text" required="required" class="form-control" placeholder="Full Design I did">
                        </div>
                    </div>
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
  name: 'PicsComponent',
  props: ['sendName']
}
</script>

<style>
#pics{
    text-align: left;
}
.form-control {
    font-size: 15px;
}
.container-fluid {
    width: 95%;
}
</style>
