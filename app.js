
new Vue({
  el: "#app",
  data: {
    tasks:[
    
    ],
    new_task: ''
  },
  methods: {
    addTask : function(){

      if (this.new_task != '') {
        this.tasks.push({
          name: this.new_task,
          status:false
        });

        this.new_task = ''

      }

    },
    removeTask : function(index) {
      this.tasks.splice(index,1)
    }
  }
});
