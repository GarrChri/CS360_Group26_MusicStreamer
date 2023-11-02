import React, {useState} from "react";

const playlistExamples = [
    {id: 1, name: "playlist 1", createdBy: "Ted Miller"},
    {id: 2, name: "playlist 2", createdBy: "Chris Garrett"},
    {id: 3, name: "playlist 3", createdBy: "John Smith"}
]

// Sample playlist that will be returned when user clicks 'View'
const playlistExampleData = [
    {song: "Breaking The Habit", artist: "Linkin Park", playlistName: "Playlist 1"},
    {song: "Bohemian Rhapsody", artist: "Queen", playlistName: "Playlist 1"},
    {song: "By The Way", artist: "Red Hot Chili Peppers", playlistName: "Playlist 1"},
    {song: "Can't Stop", artist: "Red Hot Chili Peppers", playlistName: "Playlist 1"},
]



// Creates the playlists table
function Playlists({id, name, userId}) {
    return (
        <div>
            <h2>Playlists</h2>
            <table className="table playlist-table">
                <thead>
                    <tr className="table-rows">
                        <th>ID</th>
                        <th>Playlist Name</th>
                        <th>Created By</th>
                    </tr> 
                </thead>
                <tbody>
                    {playlistExamples.map((playlist) => (                        
                        <tr className="table-rows">
                            <td>{playlist.id}</td>
                            <td>{playlist.name}</td>
                            <td>{playlist.createdBy}</td>
                            <button className="playlist-button">View</button>
                            <button className="playlist-button">Edit</button>
                            <button className="playlist-button">Delete</button>
                        </tr>
                                ))
                            }
                </tbody>
            </table>

            <h4 className="playlist-create-title">Create a new Playlist</h4>
            <form className="playlist-create">
            <label for="playlist-name">Playlist name: </label>
            <input type="text" id="playlist-name" className="playlist-create-input" />
            <label for="playlist-creator">Created by: </label>
            <input type="text" id="playlist-creator" className="playlist-create-input" />
            <button>Create</button>
            </form>

            <h5>*Sample view of playlist 1</h5>
                <table className="table">
                    <tr className="table-rows">
                        <th>Song</th>
                        <th>Artist</th>
                    </tr>
            {
                    playlistExampleData.map((song) => (
                    <tr className="table-rows">
                        <td>{song.song}</td>
                        <td>{song.artist}</td>
                    </tr>
            ))}
            </table>

           
        </div>
    );
}

export default Playlists;