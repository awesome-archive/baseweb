/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

declare module "just-omit" {
  function omit<T, U extends keyof T>(obj: T, select: U[]): Omit<T, U>;
  function omit<T, U extends keyof T>(
    obj: T,
    select1: U,
    ...selectn: U[]
  ): Omit<T, U>;
  export default omit;
}
