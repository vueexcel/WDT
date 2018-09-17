<template>
    <div id="skills" class="tabcontent" v-if="sendName === 'Skills'">
        <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <h3 class="mt-0 header-title" id="skillsId">Primary Skills</h3>
                            <ul class="list-unstyled">
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 1 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 2 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 3 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 4 <i class="close fa fa-times"></i></span>
                                </li>
                            </ul>
                        </div>
                        <div class="search-skill">
                            <div class="form-group has-feedback has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="" style="padding-left: 1.75em;">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <h3 class="mt-0 header-title" id="skillsId">Proficient Skills</h3>
                            <ul class="list-unstyled">
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 1 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 2 <i class="close fa fa-times"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 3 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 4 <i class="close fa fa-check"></i></span>
                                </li>
                            </ul>
                        </div>
                        <div class="search-skill">
                            <div class="form-group has-feedback has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="" style="padding-left: 1.75em;">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <h3 class="mt-0 header-title" id="skillsId">Additional Skills</h3>
                            <ul class="list-unstyled">
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 1 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 2 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 3 <i class="close fa fa-check"></i></span>
                                </li>
                                <li>
                                    <span class="badge badge-pill light-blue waves-effect">Skill 4 <i class="close fa fa-times"></i></span>
                                </li>
                            </ul>
                        </div>
                        <div class="search-skill">
                            <div class="form-group has-feedback has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="" style="padding-left: 1.75em;">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary " type="button">Previous</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary pull-right" type="button">Next</button>
                    </div>
                </div>
                PNote: Auto search implement to search skills and hit Enter button to add Skills in the above list.
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SkillsNeeded',
  props: ['sendName']
}
</script>

<style>
#skills{
    text-align: left;
}
#skillsId{
    font-weight: bold;
}
</style>
