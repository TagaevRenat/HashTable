// Создаём наш массив, объявляем переменные
const array = []
const length = 7
array.length = length
let key
let value
let id = -1

//  Хэш-функция: тут мы задаём key - индекс массива и id - уникальный номер,
// чтобы при поиске элемента с одинаковым ключем точно находить наш элемент по уникальному id
function hash(value) {
    key = (value.charCodeAt(0) * value.length) % array.length
    id++
    console.log(`id = ${id}`)
    console.log(`key = ${key}`)
    return setElem(key, value, id)
}

// Запихиваем данные в массив
function setElem(key, value, id) {
    // Проверяем на наличие коллизии
    if (array[key] == undefined) {
        array[key] = [value, id]
        return array
    }
    else if (array[key] !== undefined && id < length) {
        // Если у нас есть коллизия - пробуем запихать value в  следующий  свободный индекс
        if (key < length - 1) {
            key++
            return setElem(key, value, id)
        }
        // Если мы упёрлись в конец массива - возвращаемся в начало массива и пробуем запихать value в следующий свободный индекс
        else {
            key = 0
            return setElem(key, value, id)
        }

    }
    else {
        return 'Все! Табилца не резиновая!'
    }
}
// Ищем элемент по его value и id в массиве, используя нашу хэш-функцию
function getElem(value, id) {
    key = (value.charCodeAt(0) * value.length) % array.length
    if (array[key].toString() == [value, id].toString()) {
        return array[key]
    }
    else {
        for (let i = 0; i < length; i++) {
            key = i
            if (array[key] == undefined) {
                continue
            }
            else {
                if (array[key] == [value, id].toString()) {
                    return array[key]
                }
                else {
                    continue
                }
            }
        }
    }
}




