// Handling button interactions

// Save button logic
document.getElementById('saveBtn').addEventListener('click', () => {
    alert("Data saved successfully!");
    // Add your custom save logic here
});

// Delete button logic
document.getElementById('deleteBtn').addEventListener('click', () => {
    alert("Data deleted!");
    // Add your custom delete logic here
});

// File upload logic
document.getElementById('fileUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        alert(`File uploaded: ${file.name}`);
        // Add your custom file handling logic here
    }
});
