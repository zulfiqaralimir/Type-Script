function make_album(artist: string, album_title: string, tracks?: number): {artist: string, album_title: string, tracks?: number} {
    const album = {artist, album_title};
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Example function calls
  console.log(make_album('Beyonce', 'Lemonade'));
  console.log(make_album('Taylor Swift', 'Folklore', 16));
  console.log(make_album('The Weeknd', 'After Hours', 14));
  