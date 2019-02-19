//初始化一个基础页面，其他的可以继承他
var BasePage = Backbone.View.extend({
    hide: function() {
        this.$el.hide();
    },

    show: function() {
        this.$el.show();
    }
})