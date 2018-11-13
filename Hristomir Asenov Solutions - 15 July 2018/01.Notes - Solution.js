function addSticker() {

    let title = $('.title');
    let text = $('.content');
    let ul = $('#sticker-list');

    if(title.val() && text.val()){
        let li = $('<li>');
        li.addClass('note-content');

        let a = $('<a>');
        a.addClass('button');
        a.text('x');
        a.on('click', () => li.remove());

        let h2 = $('<h2>');
        h2.text(title.val());

        let hr = $('<hr>');

        let p = $('<p>');
        p.text(text.val());

        li.append(a);
        li.append(h2);
        li.append(hr);
        li.append(p);

        ul.append(li);

        title.val('');
        text.val('');
    }
}