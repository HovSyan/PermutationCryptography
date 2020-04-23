export class Permutation {
  private _permutationMap: Map<number, number> = new Map<number, number>();

  constructor(private _n: number) {
    this._createTrivialPermutation();
  }

  get(i: number): number {
    return this._permutationMap.get(i);
  }

  private _createTrivialPermutation() {
    for(let i = 1; i <= this._n; i++) {
      this._permutationMap.set(i, i);
    }
  }
}
