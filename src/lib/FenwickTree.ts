export class FenwickTree {
  private tree: number[];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  update(index: number, value: number): void {
    index++; // 1-based indexing
    while (index <= this.size) {
      this.tree[index] += value;
      index += index & -index;
    }
  }

  query(index: number): number {
    index++; // 1-based indexing
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }

  rangeQuery(left: number, right: number): number {
    return this.query(right) - this.query(left - 1);
  }
}
