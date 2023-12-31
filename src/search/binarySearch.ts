

function binarySearch(target: number, arr: number[]): boolean {
  const mid: number = Math.floor((arr.length - 1) / 2);
  let result: boolean = false; 

  if (target === arr[mid]) {
    return true;
  } else if (target < arr[mid]) {
    result = binarySearch(target, arr.slice(0, mid));
  } else if (target > arr[mid]) {
    result = binarySearch(target, arr.slice(mid+1));
  }

  return result;
}

const target: number = 3;

const arr: number[] = [1,2,3,4,5,6,7,8];

console.log(binarySearch(target, arr));