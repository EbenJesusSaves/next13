//return type of functions
interface fb {
  (name: string, age: number): string;
}

//options params
// add a question mark to make the param optional
interface fb20 {
  (age: number, name?: string): string;
}
 