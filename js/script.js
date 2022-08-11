/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
//    sortMovies: function() {
//     return movieDB.movies.sort();
//    }
};
// movieDB.sortMovies();

const genreOfMovie = {
    genre: [
        "Сериалы",
        "Фильмы",
        "Мультфильмы",
        "Клипы",
        "Трейлеры",
    ]
};
const promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      advertizing = document.querySelectorAll('.promo__adv img'),
      movieList = document.querySelector('.promo__interactive-list'),
      body = document.getElementsByTagName('body'),
      promoAdvertizing = document.querySelector('.promo__adv');







advertizing.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';


promoBg.style.background = 'url("img/bg.jpg") top';


movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    
    `;
});













