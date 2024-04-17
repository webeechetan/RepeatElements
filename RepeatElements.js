class RepeatElements {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => this.applyRepeats(document.body));
    }

    applyRepeats(parentElement) {
        const repeatElements = parentElement.querySelectorAll('[data-repeat]:not([data-processed])');

        repeatElements.forEach((element) => {
            this.cloneElement(element);
        });

        repeatElements.forEach((element) => {
            const clones = Array.from(parentElement.querySelectorAll(`[data-original-id="${element.id}"]`));
            clones.forEach(clone => this.applyRepeats(clone));
        });
    }

    cloneElement(element) {
        const count = parseInt(element.getAttribute('data-repeat'), 10);
        if (count && count > 1) {
            const originalId = element.id || this.generateUniqueId();
            element.setAttribute('data-processed', 'true');
            element.setAttribute('id', originalId); 
            element.setAttribute('data-original-id', originalId);

            for (let i = 1; i < count; i++) {
                const clone = element.cloneNode(true);
                clone.removeAttribute('data-processed');
                clone.removeAttribute('data-repeat'); 
                const cloneId = `${originalId}-${i}`;
                clone.setAttribute('id', cloneId);
                clone.setAttribute('data-original-id', originalId); 
                element.after(clone);
            }
        }
    }

    generateUniqueId() {
        return 'repeat-element-' + Math.random().toString(36).substr(2, 9);
    }
}

new RepeatElements();
