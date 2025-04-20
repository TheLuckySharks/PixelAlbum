import { songs } from "../constants";
import { Song } from "../types/song";

export function searchSong(searchTerm: string): Song[] {
  searchTerm = searchTerm.toLowerCase();

  const filteredSongs: Song[] = [];
  const addedSongs: Set<string> = new Set();

  songs.forEach((song: Song) => {
    const songName = song.name.toLowerCase();
    const songArtist = song.artist.toLowerCase();

    if (
      (songArtist.includes(searchTerm) || songName.includes(searchTerm)) &&
      !addedSongs.has(songName)
    ) {
      filteredSongs.push(song);
      addedSongs.add(songName);
    }
  });

  return filteredSongs
    .sort((a, b) =>
      a.artist.toLowerCase().localeCompare(b.artist.toLocaleLowerCase())
    )
    .slice(0, 4);
}
