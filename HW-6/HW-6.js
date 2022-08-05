// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.


class AbstractHuman {
    constructor(height, weight, name, yearOfBirth, isInvalid = false) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.yearOfBirth = new Date();
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

    set invalid(val) {
        this.isInvalid = val;
    }
}

const human = new AbstractHuman(182, 90, 'John', '21-01-2001', false);
console.log(human);


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


class FrontEndDev extends AbstractHuman {
    constructor(height, weight, name, yearOfBirth, isInvalid = false, startOfCareer, previousCompanies = [{
        start: new Date(),
        end: new Date(),
        salaryPerMonth: null,
        position: null,
        companyName: null
    }]) {
        super(height, weight, name, yearOfBirth, isInvalid);
        this.startOfCareer = new Date();
        this.previousCompanies = previousCompanies;
    }

    sayHi() {
        console.log(`Привет, меня зовут ${this.name} я Фронтенд разработчик. Работаю с ${this.startOfCareer}`);
    }

    get getAllSalary() {
        function getSalaryInCompany(company) {
            const dateOfStart = company.start;
            const dateOfEnd = company.end;
            const allMonths = parseInt((dateOfEnd - dateOfStart) / 1000 / 60 / 60 / 24 / 30);
            const allSalary = allMonths * company.salaryPerMonth;
            return allSalary;
        }


        const allSalaryInAllCompanies = this.previousCompanies.reduce((acc, el) => {
            acc += getSalaryInCompany(el);
            return acc;
        }, 0);
        console.log(allSalaryInAllCompanies, `Вся зэпка ${this.name} за всё время`);
    }

    getInfoAboutCompany(nameOfCompany) {
        const info = this.previousCompanies.reduce((acc, el) => {
            if (el.companyName === nameOfCompany) {
                acc = [...acc, el];
            }
            return acc;
        }, []);
        console.log(info, `Информация о компании "${nameOfCompany}"`);
    }

    set setNewCompany(obj) {
        this.previousCompanies = [...this.previousCompanies, obj];
    }

}

const frontEndDev = new FrontEndDev(180, 110, 'Viktor', '02-11-1993', true, '01-01-2007', [{
    start: new Date('01-01-2007'),
    end: new Date('01-01-2008'),
    salaryPerMonth: 50,
    position: 'middle',
    companyName: 'Oracle'
},
    {
        start: new Date('01-01-2008'),
        end: new Date('01-01-2009'),
        salaryPerMonth: 50,
        position: 'senior',
        companyName: 'Bababu'
    }]);
console.log(frontEndDev);
frontEndDev.sayHi();
frontEndDev.getAllSalary;
frontEndDev.getInfoAboutCompany('Bababu');
frontEndDev.setNewCompany = {
    start: new Date('04-07-2010'),
    end: new Date('01-01-2011'),
    salaryPerMonth: 100,
    position: 'senior',
    companyName: 'MacMay'
};
console.log(frontEndDev);


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


class Builder extends AbstractHuman {
    constructor(height, weight, name, yearOfBirth, isInvalid = false, locationOfBuildObject = '', tools = [], workSpeedSquareMeter = 0) {
        super(height, weight, name, yearOfBirth, isInvalid = false,);
        this.locationOfBuildObject = locationOfBuildObject;
        this.tools = tools;
        this.workSpeedSquareMeter = workSpeedSquareMeter;
    }

    workSpeed(squareMeters) {
        let result;
        let [day, week, month, year] = [24, 24 * 7, 730, 8766];
        const dayOfBuilding = (squareMeters * this.workSpeedSquareMeter) / 1440;
        const hoursOfBuilding = (dayOfBuilding * 24);
        if (dayOfBuilding < 1) {
            result = `Строительство будет занимать ${Math.floor(hoursOfBuilding)} часов`;
        } else if (dayOfBuilding >= 1 && dayOfBuilding <= 7) {
            let days = Math.floor(hoursOfBuilding / day)
            let hours = Math.floor(hoursOfBuilding % day)
            result = `Строительство будет занимать ${days} дн, ${hours} ч`;
        } else if (dayOfBuilding >= 8 && dayOfBuilding <= 30){
            let weeks = Math.floor(hoursOfBuilding / week)
            let days = Math.floor((hoursOfBuilding % week) / day)
            let hours = Math.floor((hoursOfBuilding % week) % day % 60)
            result = `Строительство будет занимать ${weeks} нед, ${days} дн, ${hours} ч`;

        }else if (dayOfBuilding >= 31 && dayOfBuilding <= 365){
            let months = Math.floor(hoursOfBuilding / month)
            console.log(months,'months');
            let weeks = Math.floor((hoursOfBuilding % month) / week)
            let days = Math.floor((hoursOfBuilding % month) % week / day)
            let hours = Math.floor((hoursOfBuilding % month) % week % day % 60)
            result = `Строительство будет занимать ${months} мес, ${weeks} нед, ${days} дн, ${hours} ч`;

        }else if (dayOfBuilding >= 365){
            let years = Math.floor((hoursOfBuilding / year))
            let months = Math.floor((hoursOfBuilding % year) / month)
            let weeks = Math.floor((hoursOfBuilding % year) % month / week)
            let days = Math.floor((hoursOfBuilding % year) % month % week / day)
            let hours = Math.floor((hoursOfBuilding %year) % month % week % day % 60)
            result = `Строительство будет занимать ${years} лет, ${months} мес, ${weeks} нед, ${days} дн, ${hours} ч`;

        }
        console.log(dayOfBuilding, 'Day of building');
        console.log(result);
   }
}

const vasya = new Builder(110, 60, 'Vasya', '01-09-1990', false, 'Chernivtsi, Home of Petro Grechka', ['кирка', 'топор'], 1455);

vasya.workSpeed(0.5);


