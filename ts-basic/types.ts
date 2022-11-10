enum Profession {
    ADMIN = 5,
    READ_ONLY = 'READ_ONLY',
    WRITE = 10,
} //' the value of enum is not restricted to default behaviour

const person =
    // : {
    //     name: string;
    //     age: number;
    //     hobbies: string[];
    //     role: [number, string];//' exact two elements, first one being number, second one being string. but .push method works

    // }
    {
        name: 'John',
        age: 30,
        hobbies: ['sleep', 'cooking'], //' type : string[]
        role: [1, 'author'],
        profession: Profession.ADMIN,
    };
