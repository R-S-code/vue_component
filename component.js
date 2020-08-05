Vue.component("button-counter", {
    //functionにしない場合、componentの変数が共有される
    data: function() {
        return {
            count: 0
        }
    },
    template: "<button v-on:click='count++'>You clicked me {{ count }} times.</button>"
})