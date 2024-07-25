export default function convertAge(birthYear: number): number {
  var d = new Date();
  var year = d.getFullYear();
  var age = year - birthYear;
  return age;
}
