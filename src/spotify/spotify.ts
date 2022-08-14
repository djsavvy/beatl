import * as SpotifyApi from 'spotify-web-api-node';

const spotify = new SpotifyApi({});
// spotify.setAccessToken('');

// For now, we just use a polling implementation because it's simplest. However, in the future, we
// can try a blocking approach (at least on macOS), akin to
// https://github.com/laaksomavrick/menu-bar-for-spotify/blob/master/Spotify%20Helper/Services/SpotifyEventListener.swift

export type SongInfo = {
  Title: string;
  Artist: string;
  AlbumArtURL: string;
} | null;

export function GetCurrentSongInfo(): SongInfo {
  return null;
}
