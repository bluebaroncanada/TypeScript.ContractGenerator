
export type GlobalNullableRootType = {
    int: number;
    nullableInt?: null | number;
    nullableInts?: null | Array<null | number>;
    intGeneric?: null | GenericClass<number>;
    nullableIntGeneric?: null | GenericClass<number>;
};
export type GenericClass<T> = {
    genericType?: null | T;
};
