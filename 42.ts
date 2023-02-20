function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  // Example usage
  const magicians = ['David Blaine', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  show_magicians(magicians);
  
  make_great(magicians);
  show_magicians(magicians);
  