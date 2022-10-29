const BASE_URL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextTwoYears = `${currentYear + 2}-${currentMonth}-${currentDay}`;


const upcoming_games_pageOne = `games?key=2f3a3635ae0f418397ea69612a9ff563&dates=${currentDate},${nextTwoYears}&ordering=released&page_size=40`;
const upcoming_games_pageTwo = `games?key=2f3a3635ae0f418397ea69612a9ff563&dates=${currentDate},${nextTwoYears}&ordering=released&page=2&page_size=40`;
const upcoming_games_pageThree = `games?key=2f3a3635ae0f418397ea69612a9ff563&dates=${currentDate},${nextTwoYears}&ordering=released&page=3&page_size=40`;
const upcoming_games_pageFour = `games?key=2f3a3635ae0f418397ea69612a9ff563&dates=${currentDate},${nextTwoYears}&ordering=released&page=4&page_size=40`;

export const upcomingGamesUrl = () => [
    `${BASE_URL}${upcoming_games_pageOne}`,
    `${BASE_URL}${upcoming_games_pageTwo}`,
    `${BASE_URL}${upcoming_games_pageThree}`,
    `${BASE_URL}${upcoming_games_pageFour}`
];

export const gameScreenshotURL = (game_id) => `${BASE_URL}games/${game_id}/screenshots?key=2f3a3635ae0f418397ea69612a9ff563`;