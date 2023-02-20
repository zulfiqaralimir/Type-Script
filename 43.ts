function make_great(magicians: string[]): string[] {
    const great_magicians = [];
    for (let magician of magicians) {
      great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
  }
  
  const magicians = ['David Blaine', 'Harry Houdini', 'Penn Jillette', 'Teller'];
  const great_magicians = make_great([...magicians]);
  
  show_magicians(magicians);
  show_magicians(great_magicians);
  