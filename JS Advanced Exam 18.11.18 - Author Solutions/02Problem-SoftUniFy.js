describe("constructor() CHECK", function () {

    beforeEach(function (){
        softunify = new SoftUniFy();
        result = null;
    });

    it('constructor should not take either 1 parameter/argument', function () {
        assert.isUndefined(softunify.arguments)
    });

   it('allSongs should be empty object', function () {
        assert.isObject(softunify.allSongs);
        assert.isEmpty(softunify.allSongs);
   });

});

describe('downloadSong() function CHECK', function () {

    beforeEach(function (){
        softunify = new SoftUniFy();
        result = null;
    });

    it("download single song", function () {
        softunify.downloadSong('Eminem', 'Venom', 'First venom song... tarararara');

        result = {"Eminem": {
            "rate": 0,
                "votes": 0,
                "songs": [
                "Venom - First venom song... tarararara",
            ]
        }};

        assert.deepEqual(softunify.allSongs, result);

    });

    it('download a few songs [no chain functionality]', function () {

        softunify.downloadSong('Eminem', 'Venom', 'First venom song... tarararara');
        softunify.downloadSong('Eminem', 'Rap-God', 'First rap god song... tarararara');
        softunify.downloadSong('Disturbed', 'Immortalized', 'First immortalized song... tarararara');
        softunify.downloadSong('Eminem', 'Fall', "First fall song... tarararara");

        result = {
            "Eminem": {
                "rate": 0,
                "votes": 0,
                "songs": [
                    "Venom - First venom song... tarararara",
                    "Rap-God - First rap god song... tarararara",
                    "Fall - First fall song... tarararara",
                ]
            },
            "Disturbed": {
                "rate": 0,
                "votes": 0,
                "songs": [
                    "Immortalized - First immortalized song... tarararara"
                ]
            }
        };

        assert.deepEqual(softunify.allSongs, result);
    });

    it('download a few songs [chain functionality]', function () {

        softunify
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara')
            .downloadSong('Disturbed', 'Down with the sickness', 'First down with the sickness song... tarararara')
            .downloadSong('Disturbed', 'Venom', 'First venom song... tarararara')
            .downloadSong('Eminem', 'Rap-God', 'First rap god song... tarararara')
            .downloadSong('Eminem', 'Fall', 'First fall song... tarararara')
            .downloadSong('ACDC', 'Back in Black', 'First back in black song... tarararara');

        result = {
            "Eminem": {
                "rate": 0,
                "votes": 0,
                "songs": [
                    "Venom - First venom song... tarararara",
                    "Rap-God - First rap god song... tarararara",
                    "Fall - First fall song... tarararara",
                ]
            },
            "Disturbed": {
                "rate": 0,
                "votes": 0,
                "songs": [
                    'Down with the sickness - First down with the sickness song... tarararara',
                    'Venom - First venom song... tarararara'
                ]
            },
            "ACDC": {
                "rate": 0,
                "votes": 0,
                "songs": [
                    "Back in Black - First back in black song... tarararara"
                ]
            }
        };

        assert.deepEqual(softunify.allSongs, result);
    });

});

describe('playSong() function CHECK', function () {

    beforeEach(function (){
        softunify = new SoftUniFy();
        result = null;
        expected = null;
    });

    it('play a no-existing song', function () {
        result = softunify.playSong('Venom');
        expected = `You have no downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!`

        assert.equal(result, expected);
    });

    it('play a existing song', function () {
        softunify
            .downloadSong('Eminem', 'Fall', 'First fall song... tarararara')
            .downloadSong('Disturbed', 'The Game', 'First the game song... tarararara')
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara');

        result = softunify.playSong('Venom');
        expected = 'Eminem:\n' +
            'Venom - First venom song... tarararara\n';

        assert.equal(result, expected);
    });

    it('play a existing song from more then 1 artist', function () {
        softunify
            .downloadSong('Eminem', 'Fall', 'First fall song... tarararara')
            .downloadSong('Disturbed', 'The Game', 'First the game song... tarararara')
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara')
            .downloadSong('Disturbed', 'Venom', 'First venom song... tarararara')
            .downloadSong('Eminem', 'Rap-God', 'First rap god song... tarararara')
            .downloadSong('Eminem', 'Venom', 'Second venom song... tarararara');

        result = softunify.playSong('Venom');
        expected = 'Eminem:\n' +
            'Venom - First venom song... tarararara\n' +
            'Venom - Second venom song... tarararara\n' +
            'Disturbed:\n' +
            'Venom - First venom song... tarararara\n';

        assert.equal(result, expected);
    });

});

describe('songsList() getter CHECK', function () {

    beforeEach(function (){
        softunify = new SoftUniFy();
        result = null;
        expected = null;
    });

    it('get empty songsList', function () {
        result = softunify.songsList;
        expected = `Your song list is empty`;

        assert.equal(result, expected);
    });

    it('get list with all downloaded songs', function () {
        softunify
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara')
            .downloadSong('Disturbed', 'Down with the sickness', 'First down with the sickness song... tarararara')
            .downloadSong('Disturbed', 'Venom', 'First venom song... tarararara')
            .downloadSong('Eminem', 'Rap-God', 'First rap god song... tarararara')
            .downloadSong('Eminem', 'Fall', 'First fall song... tarararara')
            .downloadSong('ACDC', 'Back in Black', 'First back in black song... tarararara');

        result = softunify.songsList;

        expected ='Venom - First venom song... tarararara\n' +
                  'Rap-God - First rap god song... tarararara\n' +
                  'Fall - First fall song... tarararara\n' +
                  'Down with the sickness - First down with the sickness song... tarararara\n' +
                  'Venom - First venom song... tarararara\n' +
                  'Back in Black - First back in black song... tarararara';

        assert.equal(result, expected);
    });

});

describe('rateArtist() function CHECK', function () {

    beforeEach(function (){
        softunify = new SoftUniFy();
        result = null;
        expected = null;
    });

    it('rate no-existing artist', function () {
        softunify
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara')
            .downloadSong('Disturbed', 'Down with the sickness', 'First down with the sickness song... tarararara')
            .downloadSong('ACDC', 'Dirty Dance', 'First dirty dance song... tarararara');

        result = softunify.rateArtist('Pesho');
        expected = `The Pesho is not on your artist list.`;
        assert.equal(result, expected);

        result = softunify.rateArtist('Pesho', 22);
        assert.equal(result, expected);
    });

    it('get the rate on existing artist who is not rate yet', function () {
        softunify
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara')
            .downloadSong('Disturbed', 'Down with the sickness', 'First down with the sickness song... tarararara')
            .downloadSong('ACDC', 'Dirty Dance', 'First dirty dance song... tarararara');

        result = softunify.rateArtist('Eminem');
        expected = 0;

        assert.equal(result, expected);
    });

    it('get the current rate on existing artist who has more than 1 vote ', function () {
        softunify
            .downloadSong('Eminem', 'Venom', 'First venom song... tarararara')
            .downloadSong('Disturbed', 'Down with the sickness', 'First down with the sickness song... tarararara')
            .downloadSong('ACDC', 'Dirty Dance', 'First dirty dance song... tarararara');

        softunify.rateArtist('Disturbed', 5);
        softunify.rateArtist('Disturbed', 10);
        softunify.rateArtist('Disturbed', 8);

        result = softunify.rateArtist('Disturbed');
        expected = 7.67;

        assert.equal(result, expected);
    });

});

//DONE