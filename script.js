'use strict;'

var app5 = new Vue({
    el: '#app',
    data: {
        data: 'nothing to see here',
        username: '',
        password: ''
    },
    methods: {
        updateData: function() {
            this.data = this.username + '\t' + this.password;
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