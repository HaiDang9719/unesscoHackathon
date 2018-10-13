var forumID = document.URL.split('id=')[1];
console.log(forumID);
var table = new Vue({
    el: '#vue-thread',
    data: {
        id: forumID,
        info: {
            forumName: "Climate Change",
            description: "How climate change is increasing the threat from tropical storms"
        },
        tableData: []
    },
    created(){
        this.loadtableData()
    },
    methods:{
        loadforumInfo: function(){
            this.$http.get('/service/api/forumList/getDetail',{params: {id : forumID}}).then(response => {
                response.body.data.forEach(element => {
                    var input = {
                        forumName: element.forumName,
                        description: element.description
                    }
                    this.info=input;
                });
            }, response => {
                // error callback
                console.log('failed');
            })
        },
        loadtableData: function(){
            this.$http.get('/service/api/post/getDetail/'+forumID).then(response => {
                console.log(response);
                response.body.data.forEach(element => {
                    var input = {
                        id: element._id,
                        title: element.title,
                        Postdate: element.createdAt,
                        comment: 0,
                        lastComment: 'unknown',
                    }
                    this.tableData.push(input);
                });
                console.log(this.tableData);
            }, response => {
                // error callback
                console.log('failed');
            })
        }
    }
})
