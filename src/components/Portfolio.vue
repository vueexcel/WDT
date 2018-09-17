<template>
    <div id="portfolio" class="tabcontent" v-if="sendName === 'Portfolio'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="mt-0 header-title font-weight-bold">Upload Portfolio</h3>
                        <div class="form-group">
                            <input type="file" value="Input" class="choosefile" style="width:100%">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <div class="profile-pic">
                                <img class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="./../assets/menu1.jpg" data-holder-rendered="true">
                            </div>
                            <input maxlength="100" type="text" required="required" class="form-control" placeholder="Jimmy P">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <div class="profile-pic">
                                <img class="img-thumbnail" alt="200x200" style="width: 200px; height: 200px;" src="./../assets/menu1.jpg" data-holder-rendered="true">
                            </div>
                            <input maxlength="100" type="text" required="required" class="form-control" placeholder="The Best Engineer">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
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
  name: 'PortfolioComponent',
  props: ['sendName']
}
</script>

<style>
#portfolio{
    text-align: left;
}
</style>
