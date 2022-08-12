/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// 'use strict';

// Возьмите свой код из предыдущей практики

// document.addEventListener('DOMContentLoaded' , () => {

    
// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ],

// };


// const genreOfMovie = {
//     genre: [
//         "Сериалы",
//         "Фильмы",
//         "Мультфильмы",
//         "Клипы",
//         "Трейлеры",
//     ]
// };
// const promoBg = document.querySelector('.promo__bg'),
//       genre = promoBg.querySelector('.promo__genre'),
//       advertizing = document.querySelectorAll('.promo__adv img'),
//       movieList = document.querySelector('.promo__interactive-list'),
//       body = document.getElementsByTagName('body'),
//       promoAdvertizing = document.querySelector('.promo__adv');


// const deleteAdv = (arr) =>{
//   arr.forEach(item => {
//         item.remove();
//     });
// };
// deleteAdv(advertizing);


// const makeChanges = () =>{
//     genre.textContent = 'драма';
//     promoBg.style.background = 'url("img/bg.jpg") top';
// };
// makeChanges();

// movieDB.movies.sort();


// const addForm = document.querySelector('form.add'),
//       input = addForm.querySelector('.adding__input'),
//       checkbox = addForm.querySelector('[type = "checkbox"]');

//       addForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         let newFilm = input.value;
//         movieDB.movies.sort();
//         if(newFilm){


//             movieDB.movies.push(newFilm);
//             movieDB.movies.sort();
//             createMovieList(movieDB.movies, movieList);
//             event.target.reset();
          
//         }
       
      

//     });

//         function createMovieList(films, parrent){
//             parrent.innerHTML = "";
//             films.forEach((film, i)=>{
//             parrent.innerHTML += `
//             <li class="promo__interactive-item">${i + 1} ${film}
//                 <div class="delete"></div>
//             </li>
//             `;
//             });
            
//             }      

// createMovieList(movieDB.movies, movieList);




//         });
