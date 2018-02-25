class Sorter {
  constructor() {
      this.items = [];
      this.comparator = function(a, b) {
          return a - b;
      };
  }

  add(element) {
      this.items.push(element);
  }

  at(index) {
      return this.items[index];
  }

  get length() {
      return this.items.length;
  }

  toArray() {
      return this.items;
  }

  sort(indices) {
      var arr = [];

      indices.sort(function(a, b) {
          return a - b;
      });

      for (var i = 0; i < indices.length; i++ ){
          arr.push(this.items[indices[i]]);
      }

      arr.sort(this.comparator);

      for (i = 0; i < arr.length; i++ ){
          this.items[indices[i]] = arr[i];
      }
  }

  setComparator(compareFunction) {
      this.comparator = compareFunction;
  }
}

module.exports = Sorter;