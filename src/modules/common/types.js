// @flow
export type $$Record<TValue> = {
  [key: string]: TValue
};

export type $$ExtractReturnType = <V>(() => V) => V;

export function typecast<TTo>(variable: any): TTo {
  return ((variable: any): TTo);
}
