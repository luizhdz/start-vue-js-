
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
    removeTask : function(index) {
      this.tasks.splice(index,1)
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
