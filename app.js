
new Vue({
  el: "#app",
  data: {
    tasks:[

    ],
    new_task: '',
    find_task: ''
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
    removeTask : function(task) {
      // this.$delete(this.tasks, index)
      let i = this.tasks.map(item => item.name).indexOf(task.name) // find index of your object
      this.tasks.splice(i, 1) // remove it from array
    }
  },
  computed: {
    searchTask: function(){
      return this.tasks.filter(
        (task)  => task.name.includes(this.find_task)
      );
    }
  }
});
