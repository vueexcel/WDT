<template>
    <div class="LoginBox">
        <p id="heading"> Login Credentials</p>
        <div class="left">
            <div class="leftLeft">
                <table>
                    <tbody>
                        <tr v-for="(val,index) in UserData.slice(0,2)" :key="index">
                            <td id="firstcolumn">:-&nbsp;Email:&nbsp;{{val.email}}<br> &nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;{{val.password}}
                                <br/> &nbsp;&nbsp;&nbsp;&nbsp;Role:&nbsp;{{val.role}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="leftRight">
                <table>
                    <tbody>
                        <tr v-for="(val,index) in UserData.slice(2,4)" :key="index">
                            <td id="firstcolumn">:-&nbsp;Email:&nbsp;{{val.email}}<br> &nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;{{val.password}}
                                <br/> &nbsp;&nbsp;&nbsp;&nbsp;Role:&nbsp;{{val.role}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="right">
            <div class="RightLeft">
                <table>
                    <tbody>
                        <tr v-for="(val,index) in UserData.slice(4,6)" :key="index">
                            <td id="firstcolumn">:-&nbsp;Email:&nbsp;{{val.email}}<br> &nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;{{val.password}}
                                <br/> &nbsp;&nbsp;&nbsp;&nbsp;Role:&nbsp;{{val.role}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="RightRight">
                <table>
                    <tbody>
                        <tr v-for="(val,index) in UserData.slice(6,7)" :key="index">
                            <td id="firstcolumn">:-&nbsp;Email:&nbsp;{{val.email}}<br> &nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;{{val.password}}
                                <br/> &nbsp;&nbsp;&nbsp;&nbsp;Role:&nbsp;{{val.role}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import UserData from './../json/UserData.json'
export default {
  name: 'LoginBox',
  data () {
    return {
      UserData: UserData
    }
  }
}
</script>

<style>
    .LoginBox {
        background-color: #ffffff;
        width: 80%;
        margin: 0 auto;
        height: 16em;
        padding-bottom: 20px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    .leftLeft {
        float: left;
    }
    .leftRight {
        float: right;
    }
    .RightLeft {
        float: left;
    }
    .RightRight {
        float: right;
    }
    #heading {
        color: #007bff;
        font-size: 23px;
        margin-top: 40px;
        padding-top: 25px;
    }
    #firstcolumn {
        padding-left: 60px;
        text-align: left;
        font-size: 13px;
        padding-bottom: 20px;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    .center {
        float: center;
    }
</style>
