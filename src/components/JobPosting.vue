<template>
    <div id="myinfo" class="tabcontent">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <div class="dropdown mo-mb-2" style="float:right;">
                    <button class="btn btn-tog " style="padding: .1rem .5rem !important;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i style="font-size:25px;" class="fa fa-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 36px, 0px); top: 0px; left: 0px; will-change: transform;">
                        <a class="dropdown-item" href="#">New</a>
                        <a class="dropdown-item" href="#">Saved</a>
                        <a class="dropdown-item" href="#">Submitted</a>
                        <a class="dropdown-item" href="#">Open</a>
                        <a class="dropdown-item" href="#">Active</a>
                        <a class="dropdown-item" href="#">Closed</a>
                    </div>
                </div>
                <div style="float:right; margin-right:20px; margin-top: -5px;" >
                    <star-rating :border-width="3"  active-color="#0f9cf3" :star-size="10"></star-rating>
                </div>
                <i style="float:right;margin-right:20px;font-size: 20px;color: #00808e;" class="fa fa-video-camera" title="Start a Video Interview"></i>
                <h6 class="mt-0" id="Heading" style="margin-bottom:0px;">Job: Web developer</h6><span class="date text-muted">06 Aug, 2018</span>
                <div class="card-body">
                    <div class="form-group">
                        <label class="control-label">Job Title</label>
                        <input maxlength="" type="text" required="required" class="form-control" placeholder="Enter Job Title">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Job Type</label>
                        <select class="form-control">
                            <option></option>
                            <option>Web Development</option>
                            <option>Wordpress</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Job Description</label>
                        <textarea required="" class="form-control" rows="4" placeholder="Describe the work to be done"></textarea>
                    </div>
                    <button class="btn btn-primary pull-right" type="button">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'JobPosting'
}
</script>

<style>
#myinfo{
    text-align: left;
}
#Heading{
    font-weight: bold;
}
.is-selected {
    color: #0f9cf3;
}
.vue-star-rating-rating-text {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    background-color: #0097a7;
    color: #ffffff;
}
</style>
