// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.


class AbstractHuman {
    constructor(height, weight, name, yearOfBirth = new Date(), isInvalid = false) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.isInvalid = isInvalid;
    }

    sayHi() {
        console.log(`Привет, меня зовут ${this.name}`);
    }

    set setNewName(name) {
        this.name = name;
    }

    set changeInvalid(val) {
        this.isInvalid = val;
    }

    get getInfoOfHuman() {
        const info = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            yearOfBirth: this.yearOfBirth,
            isInvalid: this.isInvalid
        };
        console.log(info);
    }
}

const human = new AbstractHuman(182, 90, 'John', '21-01-2001', false);
console.log(human);

class FrontEndDev extends AbstractHuman {
    constructor(height, weight, name, yearOfBirth, isInvalid, startOfCareer = new Date(), previousCompanies = [{
        start: new Date(),
        end: new Date(),
        salaryPerMonth: null,
        position: null,
        companyName: null
    }]) {
        super(height, weight, name, yearOfBirth, isInvalid);
        this.startOfCareer = startOfCareer;
        this.previousCompanies = previousCompanies;
    }

    sayHi() {
        console.log(`Hi blyat ${this.name} я Фронтенд разработчик. Работаю с ${this.startOfCareer}`); // ============= ИЗМЕНИТЬ !!!! =================
    }

    get getAllSalary() {
        function getSalaryInCompany(company) {
            const dateOfStart = company.start;
            const dateOfEnd = company.end;
            const allMonths = Math.round((dateOfEnd - dateOfStart) / 2629800000);
            const allSalary = allMonths * company.salaryPerMonth;
            return allSalary;
        }

        const allSalaryInAllCompanies = this.previousCompanies.reduce((acc, el) => {
            acc += getSalaryInCompany(el);
            return acc;
        }, 0);
        console.log(allSalaryInAllCompanies, 'Вся зэпка Васи за всё время');
    }
}

const fDDev = new FrontEndDev(180, 110, 'Viktor', '02-11-1993', false, '01-01-2007', [{
    start: new Date('01-01-2007'),
    end: new Date('03-01-2007'),
    salaryPerMonth: 500,
    position: 'middle',
    companyName: 'Oracle'
},
    {
        start: new Date('01-01-2008'),
        end: new Date('02-01-2008'),
        salaryPerMonth: 1200,
        position: 'senior',
        companyName: 'Bababu'
    }]);
console.log(fDDev);
fDDev.sayHi();
human.sayHi();
fDDev.getAllSalary;


// console.log(getSalaryInCompany(test));

// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель
//
// 1.3) Класс Фронтенд разработчик:
//     Добавить доп. свойства:
// - начало карьеры(формат Date),
// - предыдущие компании(массив объектов
// {
//     start: new Date(),
//         end: new Date(),
//     salaryPerMonth: number,
//     position: 'middle' или 'junior' или 'senior',
//     companyName: 'Oracle',
// })
// Добавить доп. методы:
// - изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// - добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
//     высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
//     в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// - добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// - возможность добавить компанию в массив предыдущих компаний по примеру объекта выше
//
// 1.4) Класс Строитель:
//     Добавить доп. свойства:
// - локация строительного объекта(строка)
// - набор инструментов (массив строк ['кирка', 'топор'])
// - скорость выполнения работы на один квадратный метр (количество минут - number)
// Добавить доп. методы:
// - метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// если меньше одного дня - показать количество часов
// если больше одного дня - показать количество дней и часов
// если больше недели - показать количество недель дней и часов
// если больше месяца - показать количество месяцев недель дней и часов
// если больше года - показать количество лет месяцев недель дней и часов