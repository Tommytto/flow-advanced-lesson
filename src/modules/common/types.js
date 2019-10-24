// @flow
export type $$ObjectData<TValue> = {|
  [key: string]: TValue
|};

export type $$TExtractReturnType = <V>(() => V) => V;

export function typecast<TTo>(variable: any): TTo {
  return ((variable: any): TTo);
}
