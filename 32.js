var currentUsers = ['alice', 'bob', 'charlie', 'dave', 'eve'];
var newUsers = ['frank', 'gary', 'ALICE', 'helen', 'IRENE'];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var isDuplicate = false;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            isDuplicate = true;
            break;
        }
    }
    if (isDuplicate) {
        console.log("Sorry, the username \"".concat(newUser, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, the username \"".concat(newUser, "\" is available."));
        currentUsers.push(newUser);
    }
}
