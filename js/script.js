const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://baconipsum.com/api/?type=lucky', false);
xhr.send();
if (xhr.status !== 200) {
  console.log(`${xhr.status}: ${xhr.statusText}`);
} else {
  console.log(JSON.parse(xhr.responseText));
}
