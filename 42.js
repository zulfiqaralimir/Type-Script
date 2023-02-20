function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Example usage
var magicians = ['David Blaine', 'Harry Houdini', 'Penn Jillette', 'Teller'];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
