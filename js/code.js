let list_comments = [].slice.call(document.getElementsByClassName('comment')),
    nav_comments = [].slice.call(document.getElementsByClassName('sec-comment-more-opt'));

let list_slides = [].slice.call(document.getElementsByClassName('sec-recent-slide')),
    nav_slides = [].slice.call(document.getElementsByClassName('sec-recent-more-opt'));

let img_item = document.getElementById('item-img'),
    nav_item_imgs = [].slice.call(document.getElementsByClassName('nav-item-img'));

let nav_status = [].slice.call(document.getElementsByClassName('status'));

let list_inputs = [].slice.call(document.querySelectorAll('input'));

let list_but_more = [].slice.call(document.getElementsByClassName('but-more-item'));

let list_imgs = [].slice.call(document.getElementsByClassName('img-show'));

// let list_cards = [].slice.call(document.getElementsByClassName('card'));

let list_but_change = [].slice.call(document.getElementsByClassName('but-change'));

let burnav_open = document.getElementById('hamburger-button'),
    burnav_close = document.getElementById('hamburger-close'),
    burnav = document.getElementById('burnav');

burnav_open.addEventListener('click', () => {
    burnav_open.style.display = 'none';
    burnav.style.display = 'flex';
})

burnav_close.addEventListener('click', () => {
    burnav_open.style.display = 'flex';
    burnav.style.display = 'none';
})


for (let i = 0; i < nav_status.length; i++) {
    nav_status[i].addEventListener('click', () => {
        nav_status.forEach(element => {
            element.classList.remove('active');
        });
        nav_status[i].classList.add('active');
    })
}

for (let i = 0; i < list_but_change.length; i++) {
    list_but_change[i].addEventListener('click', () => {
        list_but_change.forEach(element => {
            element.classList.remove('active');
        });
        if (list_but_change[i].classList.contains('active')) {
            list_but_change[i].classList.remove('active');
        } else {
            list_but_change[i].classList.add('active');
        }
    })
}


for (let i = 0; i < list_slides.length; i++) {
    nav_slides[i].addEventListener('click', () => {
        nav_slides.forEach(element => {
            element.classList.remove('active');
        });
        list_slides.forEach(element => {
            element.style.display = 'none';
        });
        nav_slides[i].classList.add('active');
        list_slides[i].style.display = 'flex';
    })
}

for (let i = 0; i < list_comments.length; i++) {
    nav_comments[i].addEventListener('click', () => {
        nav_comments.forEach(element => {
            element.classList.remove('active');
        });
        list_comments.forEach(element => {
            element.style.display = 'none';
            element.classList.remove('active');
        });

        if (screen.width > 1600) {
            if (i == 0) {
                list_comments[list_comments.length - 1].style.display = 'flex';
            } else {
                list_comments[i - 1].style.display = 'flex';
            }
            list_comments[i].style.display = 'flex'

            if (i == (list_comments.length - 1)) {
                list_comments[0].style.display = 'flex';
            } else {
                list_comments[i + 1].style.display = 'flex';
            }

        } else if ((screen.width >= 1100) && (screen.width <= 1600)) {
            list_comments[i].style.display = 'flex'

            if (i == (list_comments.length - 1)) {
                list_comments[0].style.display = 'flex';
            } else {
                list_comments[i + 1].style.display = 'flex';
            }

        } else if (screen.width < 1100) {
            list_comments[i].style.display = 'flex'
        }

        nav_comments[i].classList.add('active');
        list_comments[i].classList.add('active');

    })
}

// list_cards.forEach(element => {
//     element.addEventListener('click', () => {
//         window.location = 'item.html';
//     })
// })

list_but_more.forEach(element => {
    element.addEventListener('click', () => {
        window.location = 'item.html';
    })
})

for (let i = 0; i < nav_item_imgs.length; i++) {
    nav_item_imgs[i].addEventListener('click', () => {
        nav_item_imgs.forEach(element => {
            element.classList.remove('active');
        });
        nav_item_imgs[i].classList.add('active');
        img_item.style.backgroundImage = window.getComputedStyle(nav_item_imgs[i]).backgroundImage;
    })
}

list_imgs.forEach(element => {
    element.addEventListener('click', () => {
        window.open(window.getComputedStyle(element).backgroundImage.replace(/["]/g, '').slice(4, -1), '_blank')
    })
});