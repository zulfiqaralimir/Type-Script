let currentUsers: string[] = ['alice', 'bob', 'charlie', 'dave', 'eve'];
let newUsers: string[] = ['frank', 'gary', 'ALICE', 'helen', 'IRENE'];

for (let newUser of newUsers) {
  let isDuplicate = false;
  for (let currentUser of currentUsers) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      isDuplicate = true;
      break;
    }
  }
  if (isDuplicate) {
    console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations, the username "${newUser}" is available.`);
    currentUsers.push(newUser);
  }
}
