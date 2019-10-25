declare type $$Record<TValue> = {
    [key: string]: TValue
};

declare type $$MayBeRecord<TValue> = {
    [key: string]: ?TValue
};


declare type $$ExtractReturnType = <V>(() => V) => V;