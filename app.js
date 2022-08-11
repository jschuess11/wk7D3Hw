// 1

const tea4TeamFCC = getTea (40);

// 2

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// 3

const tabsBeforeIndex = this.tabs.slice(0, index); 
  const tabsAfterIndex = this.tabs.slice(index + 1); 

// 4

return fixedValue + 1

// 5

function incrementer(arg) {
    return arg + 1;

// 6

function add(arr, bookName) {
    let newArr = [...arr]; 
    newArr.push(bookName);
    return newArr;
}

function remove(arr, bookName) {
        let newArr = [...arr]; 
        if (newArr.indexOf(bookName) >= 0) {
          newArr.splice(newArr.indexOf(bookName), 1);
          return newArr;
        }
    }

// 7

const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));

// 8

this.forEach(a => newArray.push(callback(a)));

// 9

watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));

// 10

const newArray = []
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });

//   11

return anim.slice(beginSlice, endSlice);

// 12

return cities.slice(0,3);
