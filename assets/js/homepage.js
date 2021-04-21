var getUserRepos = function(user) {
    var apiURrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiURrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getUserRepos();