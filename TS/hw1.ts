// 1) створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів.
interface ILaunch_site {
    site_name_long: string;
}

interface ILinks {
    article_link: string;
    video_link: string;
}

interface ICore {
    reuse_count: number;
    status: string;
}

interface ICores {
    flight: number;
    core: ICore;
}

interface IFirst_stage {
    cores: ICores;
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

interface ISecond_stage {
    payloads: IPayloads;
}

interface IRocket {
    rocket_name: string;
    first_stage: IFirst_stage;
    second_stage: ISecond_stage;
}

interface ILaunch {
    mission_name: string;
    launch_date_local: string;
    launch_site: ILaunch_site;
    links: ILinks;
    rocket: IRocket;
}

// 2) Протипізувати функції.
interface IUser {
    name: string;
    age: number;
    gender: string;
}

function sum(a: number, b: number): number {

    return a + b;
}
function showSum(a: number, b: number): void {

    console.log(a + b);
}
function incAge(someUser: IUser, inc: number): IUser {

    someUser.age += inc;
    return someUser;
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: "male",
};

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
console.log(user);