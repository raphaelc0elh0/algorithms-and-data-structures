import assert from "assert";
import { describe, it } from "node:test";

import arrays from "../data/arrays";
import mergeSort from "./merge";

describe("Merge sort", () => {
  it("sorts numeric", () => {
    const unsorted = arrays.numeric

    const sorted = unsorted.sort((a, b) => a - b);
    const result = mergeSort(unsorted);

    assert.equal(result.length, sorted.length);
    assert.equal(JSON.stringify(result), JSON.stringify(sorted));
  });

  it("sorts strings", () => {
    const unsorted = arrays.string.map(s => s.toLowerCase())

    const sorted = unsorted.sort();
    const result = mergeSort(unsorted);

    assert.equal(result.length, sorted.length);
      assert.equal(JSON.stringify(result), JSON.stringify(sorted));
  });
});