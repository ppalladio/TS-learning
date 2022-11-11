type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type PromoteEmployee = Admin &
    /* if | is used then we dont need all three properties */ Employee; //'combine two types

const e1: PromoteEmployee = {
    name: 'ana',
    privileges: ['be a boss'],
    startDate: new Date(),
};

type type1 = number | string;
type type2 = number | boolean;

type intersect = type1 & type2; //' type intersect: number
