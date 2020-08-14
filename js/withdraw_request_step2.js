// Fake file upload
document.getElementById('fake-file-button-browse').addEventListener('click', function() {
 document.getElementById('files-input-upload').click();
});

document.getElementById('files-input-upload').addEventListener('change', function() {
 document.getElementById('fake-file-input-name').value = this.value;
 
 document.getElementById('fake-file-button-upload').removeAttribute('disabled');
});
// Fake file upload-2
document.getElementById('fake-file-button-browse1').addEventListener('click', function() {
 document.getElementById('files-input-upload1').click();
});

document.getElementById('files-input-upload1').addEventListener('change', function() {
 document.getElementById('fake-file-input-name1').value = this.value;
 
 document.getElementById('fake-file-button-upload1').removeAttribute('disabled');
});
// Fake file upload-3
document.getElementById('fake-file-button-browse2').addEventListener('click', function() {
 document.getElementById('files-input-upload2').click();
});

document.getElementById('files-input-upload2').addEventListener('change', function() {
 document.getElementById('fake-file-input-name2').value = this.value;
 
 document.getElementById('fake-file-button-upload2').removeAttribute('disabled');
});
// Fake file upload- 4
document.getElementById('fake-file-button-browse3').addEventListener('click', function() {
 document.getElementById('files-input-upload3').click();
});

document.getElementById('files-input-upload3').addEventListener('change', function() {
 document.getElementById('fake-file-input-name3').value = this.value;
 
 document.getElementById('fake-file-button-upload3').removeAttribute('disabled');
});