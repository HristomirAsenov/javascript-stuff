handlers.getAllSongs = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let songs = await songService.getAllSongs();
        let userId = sessionStorage.getItem('id');
        songs.forEach((song) => song.isCreator = song._acl.creator === userId);

        ctx.songs = songs;

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            song: '../views/song/song.hbs'
        }).then(function () {
            this.partial('../views/song/allSongsPage.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    } catch (e) {
        console.log(e);
    }
}

handlers.getCreateSong = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../views/common/header.hbs',
        footer: '../views/common/footer.hbs'
    }).then(function () {
        this.partial('../views/song/createSongPage.hbs');
    })
}

handlers.getMySongs = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    songService.getAllMySongs().then(function (res) {

        let userId = sessionStorage.getItem('id');
        res.forEach((song) => song.isCreator = song._acl.creator === userId);

        ctx.songs = res;

        ctx.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            song: '../views/song/song.hbs'
        }).then(function () {
            this.partial('../views/song/mySongsPage.hbs');
        })
    })
}

handlers.createSong = function (ctx) {

    let data = { ...ctx.params, likeCounter: 0, listenCounter: 0 };

    if(data.title.length < 6) {
        notifications.showError('The title should be at least 6 characters long!');
    } else if (data.artist.length < 3) {
        notifications.showError('The artist should be at least 3 characters long!');
    } else if (!data.imageURL.startsWith('http')){
        notifications.showError('The image should start with "http://" or "https://"');
    } else {

        songService.createSong(data).then(function (res) {
            notifications.showSuccess('Song created successfully!');
            ctx.redirect('#/mySongs');
        }).catch(function (err) {
            console.log(err);
        })
    }
}

handlers.removeSong = function (ctx) {

    songService.removeSong(ctx.params.id).then(function () {
        notifications.showSuccess('Song was removed successfully!');
        ctx.redirect('#/mySongs');
    }).catch(function (err) {
        console.log(err);
    })
}

handlers.likeSong = async function (ctx) {

    let id = ctx.params.id;

    try {
        let song = await songService.getASong(id);
        let newLikes = Number(song.likeCounter) + 1;
        song.likeCounter = newLikes;

        songService.likeSong(id, song).then(function () {
            notifications.showSuccess('Song was liked successfully!');
            ctx.redirect('#/allSongs');
        }).catch(function (err) {
            console.log(err);
        })
    } catch (e) {
        console.log(e);
    }
}