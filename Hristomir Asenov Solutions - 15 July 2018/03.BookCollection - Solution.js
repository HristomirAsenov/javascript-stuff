class BookCollection {

    constructor(genre, room, capacity){ // ????????????
        this.room = room;
        this.shelfCapacity = capacity;
        this.shelfGenre = genre;
        this.shelf = [];
    }

    get room(){
        return this._room
    }

    set room(currentRoom){
        switch (currentRoom) {
            case'livingRoom':
            case'bedRoom':
            case 'closet':
                this._room = currentRoom;
                break;
            default:
                throw `Cannot have book shelf in ${currentRoom}`;
        }
    }

    addBook(bookName, bookAuthor, genre){ // genre???????

        if(this.shelfCondition === 0){
            this.shelf.shift();
        }

        let book = {bookName, bookAuthor, genre};

        this.shelf.push(book);
        this.shelf.sort((book1, book2) => book1['bookAuthor'].localeCompare(book2['bookAuthor']));

        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter((b) => b.bookName !== bookName)
    }


    showBooks(genre){
        let output = "";

        let wantedBooks = this.shelf.filter((b) => b.genre === genre);

        if(wantedBooks.length > 0){

            output += `Results for search \"${genre}\":\n`;

            wantedBooks.forEach((book) => {
                output += `\uD83D\uDCD6 ${book.bookAuthor} - \"${book.bookName}\"\n`;
            })
        }

        return output.trim();
    }

    toString(){
        let output = "";

        if(this.shelf.length > 0) {
            output += `\"${this.shelfGenre}\" shelf in ${this.room} contains:\n`;
                this.shelf.forEach((book) => {
                output += `\uD83D\uDCD6 \"${book.bookName}\" - ${book.bookAuthor}\n`;
            });
        }else {
            output += `It's an empty shelf`;
        }

        return output.trim();
    }

     get shelfCondition(){
        return Math.max(0, (this.shelfCapacity - this.shelf.length));
    }
}