const songService = (() => {
    
    function createSong (data) {
        return kinvey.post('appdata', 'songs', 'kinvey', data);
    }

    function getAllSongs () {
        return kinvey.get('appdata', 'songs', 'kinvey', '?query={}&sort={"likeCounter": -1}');
    }

    function getAllMySongs () {
        return kinvey.get('appdata', 'songs', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}`);
    }

    function removeSong (id) {
        return kinvey.remove('appdata', `songs/${id}`, 'kinvey');
    }

    function likeSong (id, song) {
        return kinvey.update('appdata', `songs/${id}`, 'kinvey', song);
    }

    function getASong (id) {
        return kinvey.get('appdata', `songs/${id}`, 'kinvey');
    }

    return {
        createSong,
        getAllSongs,
        getAllMySongs,
        removeSong,
        likeSong,
        getASong
    }
})();