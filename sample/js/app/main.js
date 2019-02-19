//每个index.html里的div都是一个view，通过路由来协调这些view的显示，指向每个div的id

//初始化每一个view的类
var PageIssueList = BasePage.extend({
    el: '#page-issue-list',
});

var PageIssueCreate = BasePage.extend({
    el: '#page-issue-create',
});

var PageIssueEdit = BasePage.extend({
    el: '#page-issue-edit',
});

//定义个路由的类
var AppRouter = Backbone.Router.extend({

    initialize: function(){
        //对每个view创建其实例
        this.pageIssueList = new PageIssueList();
        this.pageIssueCreate = new PageIssueCreate();
        this.pageIssueEdit = new PageIssueEdit();
    },

    hideAllPages: function(){
        this.pageIssueList.hide();
        this.pageIssueEdit.hide();
        this.pageIssueCreate.hide();
    },

    routes: {
        'issue/new': 'issueCreate',
        'issue/:id': 'issueEdit',
        '': 'issueList'
    },

    issueEdit: function(id){
        console.log("id",id)
        this.hideAllPages()
        this.pageIssueEdit.show();
    },

    issueCreate: function(){
        this.hideAllPages()
        this.pageIssueCreate.show();
    },

    issueList: function(){
        this.hideAllPages()
        this.pageIssueList.show();
    }

});

var router = new AppRouter();
Backbone.history.start();