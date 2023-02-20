function make_album(artist, album_title, tracks) {
    var album = { artist: artist, album_title: album_title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Example function calls
console.log(make_album('Beyonce', 'Lemonade'));
console.log(make_album('Taylor Swift', 'Folklore', 16));
console.log(make_album('The Weeknd', 'After Hours', 14));
