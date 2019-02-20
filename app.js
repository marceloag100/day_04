var app = new Vue({
  el: '#app',
  data: {
    user: null,
    imagen : "http://www.fakeimg.pl/800x500",
    github:{ login: "marceloag", bio: "What a shame", public_repos:0, following: 0, followers:0, avatar_url: "https://avatars3.githubusercontent.com/u/1174624?v=4", company:"Croop", location:"Punta Arenas"}
  },
  methods: {
    getDataGithub: function (user) {
      let urlGH = 'https://api.github.com/users/' + user;
      fetch(urlGH)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (!json.ok) {
          this.github = json;
        }
      })
      .catch(function(err) {
          console.log(err);
      })
    },
  },
  mounted: function (){
    this.getDataGithub("marceloag");
  }
})
