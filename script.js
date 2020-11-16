'use strict;'

var app5 = new Vue({
    el: '#app',
    data: {
        dataTab: 'nothing to see here',
        dataCr: "",
        dataLf: "",
        dataCrLf: "",
        dataVTab: "",
        username: '',
        password: ''
    },
    methods: {
        updateData: function() {
            this.dataTab = this.username + '\t' + this.password;
            this.dataCr = this.username + '\r' + this.password;
            this.dataLf = this.username + '\n' + this.password;
            this.dataCrLf = this.username + '\r\n' + this.password;
            this.dataVTab = this.username + '\v' + this.password;
        }
    },
    watch: {
        username: function() {
            this.updateData();
        },
        password: function() {
            this.updateData();
        }
    }
});