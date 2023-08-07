
document.addEventListener('DOMContentLoaded', function() {

    const formPreview = document.getElementById('form-preview');

    const toolboxItems = document.querySelectorAll('.tool');

    const savedFormElements = [];

    function clearFormPreview() {
     
        formbuilder.innerHTML = ''; 

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
               
                formElement.innerHTML = 'Name :'+'<br>'+'<input type="text" name="name" placeholder="Input Text">';
                     break;
            case 'input-email':
                
                formElement.innerHTML = 'Email :'+'<br>'+'<input type="email" name="email" placeholder="Input Email">';
                     break;
            case 'input-password':
        
                formElement.innerHTML = 'Password :'+'<br>'+'<input type="password" name="password" placeholder="Input password">';
                     break;         
            case 'input-number':
               
                formElement.innerHTML = 'Mobile :'+'<br>'+'<input type="text" name="contact" placeholder="Input Number">';
                    break;
            case 'input-submit':
                 
                 formElement.innerHTML = '<input type="submit" name="submit" placeholder="Input Submit" >';
                    break;
           
            default:
             
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

    const clearButton = document.getElementById('save-button');
    clearButton.addEventListener('click', clearFormPreview);
});
