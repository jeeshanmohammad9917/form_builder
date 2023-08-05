
document.addEventListener('DOMContentLoaded', function() {

    const formPreview = document.getElementById('form-preview');

    const toolboxItems = document.querySelectorAll('.tool');

    const savedFormElements = [];

    function clearFormPreview() {
     
        formbuilder.innerHTML = ''; // Clear the form preview

    }

    toolboxItems.forEach(toolboxItem => {
        toolboxItem.addEventListener('dragstart', function(event) {

            const elementType = toolboxItem.getAttribute('data-element');

            event.dataTransfer.setData('application/form-builder', elementType);
        });
    });

    formPreview.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    formPreview.addEventListener('drop', function(event) {
        event.preventDefault();

        const elementType = event.dataTransfer.getData('application/form-builder');
        const formElement = createFormElement(elementType);
        formPreview.appendChild(formElement);

        savedFormElements.push(formElement.outerHTML);
    });

    function createFormElement(elementType) {
        const formElement = document.createElement('div');
        formElement.className = 'form-element';

        switch (elementType) {
            case 'input-text':
                // If the element type is 'input-text', create an <input> element with type 'text' and a placeholder.
                formElement.innerHTML = 'Name :'+'<br>'+'<input type="text" name="name" placeholder="Input Text">';
                     break;
            case 'input-email':
                // If the element type is 'input-email', create an <input> element with type 'email' and a placeholder.
                formElement.innerHTML = 'Email :'+'<br>'+'<input type="email" name="email" placeholder="Input Email">';
                     break;
            case 'input-password':
            // If the element type is 'input-email', create an <input> element with type 'email' and a placeholder.
                formElement.innerHTML = 'Password :'+'<br>'+'<input type="password" name="password" placeholder="Input password">';
                     break;         
            case 'input-number':
                    // If the element type is 'input-email', create an <input> element with type 'email' and a placeholder.
                formElement.innerHTML = 'Mobile :'+'<br>'+'<input type="text" name="contact" placeholder="Input Number">';
                    break;
            case 'input-submit':
                        // If the element type is 'input-email', create an <input> element with type 'email' and a placeholder.
                 formElement.innerHTML = '<input type="submit" name="submit" placeholder="Input Submit" >';
                    break;
            // Add more cases for other input types, each with their respective HTML content.
            default:
                // If the element type is not recognized, display 'Unsupported Element'.
                formElement.textContent = 'Unsupported Element';
                break;
        }

        return formElement;
    }

    function saveFormElements() {
        const container = document.getElementById("form");
        const div = document.createElement("div");

        savedFormElements.forEach(elementHTML => {
            const formElement = document.createElement("div");
            formElement.innerHTML = elementHTML;
            div.appendChild(formElement);
        });

        container.appendChild(div);
    }

    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', saveFormElements,clearFormPreview);

    const clearButton = document.getElementById('save-button'); // Add a clear button in your HTML
    clearButton.addEventListener('click', clearFormPreview); // Attach the clearFormPreview function
});
