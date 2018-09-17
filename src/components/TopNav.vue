<template>
    <ul class="nav justify-content-end desk">
        <li class="nav-item" id="role">
            <span class="nav-link role"> ROLE <i class="fa fa-angle-double-right" aria-hidden="true" id="roleIcon"></i></span>
        </li>
        <li class="nav-item active">
            <a class="nav-link active" href="#"><i class="fa fa-check color" aria-hidden="true"></i>{{role}}</a>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'TopNav',
  props: ['role']
}
</script>

<style>
.color {
    color: red;
}
#breadcrumbs-two li:last-child a:after {
    right: 0em;
}
</style>
