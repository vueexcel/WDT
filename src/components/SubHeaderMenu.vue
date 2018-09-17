<template>
    <div class="menu-extras topbar-custom">
                <ul class="list-inline float-right mb-0">
                    <li class="list-inline-item dropdown notification-list">
                        <a class="nav-link arrow-none waves-effect nav-user" title="Services" href="#" role="button" @click="showMenu1">
                            <!-- <i class="mdi mdi-receipt noti-icon"></i> -->
                            <i class="fa fa-file-text noti-icon" aria-hidden="true"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown newDropdown" v-bind:class="{ showMenu: (showmenu === true)}">
                            <a class="dropdown-item" href="#">Login & Registration</a>
                            <a class="dropdown-item" href="#">Messaging Team Room</a>
                            <a class="dropdown-item" href="#">Work Tracking</a>
                            <a class="dropdown-item" href="#">Skills Management</a>
                            <a class="dropdown-item" href="#">Pay</a>
                            <a class="dropdown-item" href="#">Get Paid</a>
                            <a class="dropdown-item" href="#">Reporting</a>
                        </div>
                    </li>
                    <!-- Messages-->
                    <li class="list-inline-item dropdown notification-list" style="margin-top: 10px !important;">
                        <a class="nav-link arrow-none waves-effect" href="#" role="button" aria-haspopup="false" @click="showMenu2">
                            <i class="fa fa-envelope-o fa-lg noti-icon" id="envelop"></i>
                            <span class="badge badge-danger noti-icon-badge" id="badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg" id="messageId" v-bind:class="{ showMenu: (this.showmenu2 === true)}">
                            <!-- item-->
                            <div class="dropdown-item noti-title">
                                <h5><span class="badge badge-danger float-right">745</span>Messages</h5>
                            </div>
                            <!-- item-->
                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon">
                                    <img src="./../assets/menu1.jpg" alt="user-img" class="img-fluid rounded-circle"> </div>
                                <p class="notify-details">
                                    <b>Charles M. Jones</b>
                                    <small class="text-muted">Dummy text of the printing and typesetting industry.</small>
                                </p>
                            </a>
                            <!-- item-->
                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon">
                                    <img src="" alt="user-img" class="img-fluid rounded-circle"> </div>
                                <p class="notify-details">
                                    <b>Thomas J. Mimms</b>
                                    <small class="text-muted">You have 87 unread messages</small>
                                </p>
                            </a>
                            <!-- item-->
                            <a href="#" class="dropdown-item notify-item">
                                <div class="notify-icon">
                                    <img src="" alt="user-img" class="img-fluid rounded-circle"> </div>
                                <p class="notify-details">
                                    <b>Luis M. Konrad</b>
                                    <small class="text-muted">It is a long established fact that a reader will</small>
                                </p>
                            </a>
                            <!-- All-->
                            <a href="#" class="dropdown-item notify-item">
                                View All
                            </a>
                        </div>
                    </li>
                    <!-- notification-->
                    <li class="list-inline-item dropdown notification-list">
                        <a class="nav-link arrow-none waves-effect" href="#" role="button" @click="showMenu3">
                            <i class="fa fa-bell-o noti-icon" aria-hidden="true" id="bell"></i>
                            <span class="badge badge-danger noti-icon-badge" id="badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg" id="messageId" v-bind:class="{ showMenu: (showmenu3 === true)}">
                            <!-- item-->
                            <div class="dropdown-item noti-title">
                                <h5>Notification (3)</h5>
                            </div>
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                <div class="notify-icon bg-success">
                                    <i class="fa fa-shopping-cart"></i>
                                </div>
                                <p class="notify-details">
                                    <b>Your order is placed</b>
                                    <small class="text-muted">Dummy text of the printing and typesetting industry.</small>
                                </p>
                            </a>
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="notify-icon bg-warning">
                                    <i class="fa fa-comment"></i>
                                </div>
                                <p class="notify-details">
                                    <b>New Message received</b>
                                    <small class="text-muted">You have 87 unread messages</small>
                                </p>
                            </a>
                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <div class="notify-icon bg-info">
                                    <i class="fa fa-glass"></i>
                                </div>
                                <p class="notify-details">
                                    <b>Your item is shipped</b>
                                    <small class="text-muted">It is a long established fact that a reader will</small>
                                </p>
                            </a>
                            <!-- All-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                View All
                            </a>
                        </div>
                    </li>
                    <!-- User-->
                    <li class="list-inline-item dropdown notification-list">
                        <a class="nav-link arrow-none waves-effect nav-user" role="button" @click="showProfile">
                            <img src="./../assets/profile.jpg" alt="user" class="rounded-circle">
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown" id="showProfile" v-bind:class="{ showMenu: (showmenu4 === true)}">
                            <a class='dropdown-item' href="#">
                                <i class="fa fa-user"></i> Profile</a>
                            <a class='dropdown-item' href="#">
                                <i class="dripicons-wallet text-muted"></i> My Wallet</a>
                            <a class='dropdown-item' href="#">
                                <span class="badge badge-success pull-right m-t-5">5</span>
                                <i class="fa fa-cog"></i> Settings</a>
                            <a class='dropdown-item' href="#">
                                <i class="fa fa-lock"></i> Lock screen</a>
                            <div class="dropdown-divider"></div>
                            <a class='dropdown-item' href="#" @click="logout">
                                <i class="fa fa-sign-out"></i> Logout</a>
                        </div>
                    </li>
                    <li class="menu-item list-inline-item">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle nav-link">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </li>
                </ul>
            </div>
</template>

<script>
export default {
  name: 'SubHeaderMenu',
  data () {
    return {
      showmenu: false,
      showmenu2: false,
      showmenu3: false,
      showmenu4: false
    }
  },
  methods: {
    showMenu1: function () {
      this.showmenu = !this.showmenu
    },
    showMenu2: function () {
      this.showmenu2 = !this.showmenu2
    },
    showMenu3: function () {
      this.showmenu3 = !this.showmenu3
    },
    showProfile: function () {
      this.showmenu4 = !this.showmenu4
    },
    logout: function () {
      this.$emit('logoutUser')
    }
  }

}
</script>

<style>
.showMenu{
    display: block;
}
.dropdown-menu {
    padding: 4px 0;
    font-size: 15px;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
    border-color: #B9DCE8;
}
.dropdown-item {
    padding: 6px 1.5rem;
}
.dropdown-item.active, .dropdown-item:active {
    color: #0a1832;
    text-decoration: none;
    background-color: #eff3f6;
}
</style>
