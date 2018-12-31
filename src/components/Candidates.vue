<template>
    <div id="myinfo" class="tabcontent">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body" id="displayleft">
                <h3 class="mt-0 header-title font-weight-bold">Bob Jones </h3>
                <h6 class="mt-0 font-weight-bold" style="mar gin-bottom:0px;">Job: Web developer</h6><span class="date text-muted">06 Aug, 2018</span>
                <hr>
                <ul class="nav nav-pills nav-justified" role="tablist">
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link  active show" data-toggle="tab" href="#home-1" role="tab" aria-selected="false">Summary</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" data-toggle="tab" href="#profile-1" role="tab" aria-selected="true">Skills</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" data-toggle="tab" href="#messages-1" role="tab">Pictures</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" data-toggle="tab" href="#settings-1" role="tab">Education</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" data-toggle="tab" href="#settings-1" role="tab">Interview Answers</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" data-toggle="tab" href="#settings-1" role="tab">HR Rating</a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" data-toggle="tab" href="#settings-1" role="tab">Portfolio</a>
                    </li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane p-3 active show" id="home-1" role="tabpanel">
                        <div class="form-group">
                            <label class="control-label">Short Profile</label>
                            <textarea required="" class="form-control" rows="7" placeholder="Enter short profile..."></textarea>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-primary pull-right" type="button">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-3" id="profile-1" role="tabpanel">
                        <p class="font-14 mb-0">
                        </p>
                    </div>
                    <div class="tab-pane p-3" id="messages-1" role="tabpanel">
                        <p class="font-14 mb-0">
                        </p>
                    </div>
                    <div class="tab-pane p-3" id="settings-1" role="tabpanel">
                        <p class="font-14 mb-0">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'candidates'
}
</script>

<style>
#displayleft{
    text-align: left;
}
.nav-pills .nav-link.active {
    background-color: #0097a7;
}
.nav-link,
.nav-link:hover{
    color: #0f9cf3;
}
#myinfo .nav {
    padding-left: 0%;
    border-bottom: 1px solid #eee;
    font-size: 14px;
}
</style>
