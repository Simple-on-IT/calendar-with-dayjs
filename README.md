# Dayjs | Frontend Advent #5

## Задача:
Разработать календарь.

## Как выполнить задание:
Это front-end приложение на React. Вёрстка уже готова, вам нужно заниматься только логикой.
Задание состоит из двух этапов. На каждом этапе нужно убирать комментарии в коде и дописывать логику. Следуйте инструкциям ниже.

### 1 этап. Календарь.
В файле `Calendar.tsx` вам нужно создать массив days, который будет использоваться для рендеринга календаря. Логика работы такая:

1. Первая неделя месяца может начинаться с дней предыдущего месяца, поэтому для всех дней недели до первого числа выбранного месяца в массиве ставим null.
2. Затем добавляем все числа текущего месяца в массив.
3. Оставшиеся пустые ячейки в конце недели, которые не относятся к текущему месяцу, не нужно добавлять в массив.

### 2 этап. Функционал смены месяца.
В файле `Calendar.tsx` реализуйте функции `handlePrevMonth` и `handleNextMonth`, которые будут отвечать за переключение между месяцами.

## Запуск проекта:
* `npm i` - установка библиотек
* `npm run dev` - сборка для разработки

## Дополнительные материалы:
Документация - https://day.js.org/  
Видео - https://youtube.com/shorts/T1HCYKOTgPM?feature=share
