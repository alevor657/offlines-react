import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import moment from 'moment';

require('../scss/main.scss');

const adTypes =
    [
        'Пресса',
        'Интернет',
        'Наружная реклама (включая жд станции)',
        'Навигация',
        'Оформление объекта и ОП',
        'Аудиореклама в метро',
        'Транспортная реклама',
        'Промо-акции',
        'Радио',
        'Телевидение',
        'Прочее (3D, макеты и т.д.)',
        'Нежилые помещения и гаражи',
        'Интернет',
        'Наружная реклама',
        'Оформление объекта и ОП',
        'Распространение листовок'
    ];

const data = [
    {
        objectType: 'Наружная реклама',
        sum: 12500,
        comment: 'Комментарий для стройки',
    },
    {
        objectType: 'Оформление объекта и ОП',
        sum: 14523,
        comment: 'Комментарий для интернета',
    },
];

const objects = [
    'Выхино',
    'Славянский бульвар',
    'Новослободская'
];

const date = moment();

render(
    <App data={data} adTypes={adTypes} objects={objects} date={date}/>,
    document.getElementById('root')
);
