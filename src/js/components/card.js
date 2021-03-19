import { starsRating } from '../utils/starsRating';

export const card = (movies) => {
    let cardsHtmlString = '';
    movies.forEach(({ title, image, rating, releaseDate, genresString }) => {
        cardsHtmlString += `        
            <div class="movie">
            <div class="movie__img__container">
            <img class="movie__img" src=${image} alt="${title} poster">
        </div>
                <div class="movie__footer">
                    <div class="movie__title">${title}</div>                    
                    <div class="movie__rating__stars">
                        ${starsRating(rating)}
                    </div>                 
                    <div class="movie__genres">${genresString}</div>
                    <div class="movie__date">${releaseDate}</div>
                </div>
                <i class="far fa-heart movie__card__icon"></i>
                <i class="fas fa-heart moviecard__filled__icon"></i>
            </div>       
        `;
    });

    return cardsHtmlString;
};
