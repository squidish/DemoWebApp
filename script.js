document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-task');
    const input = document.getElementById('new-task');
    const list = document.getElementById('task-list');

    addBtn.addEventListener('click', function() {
        const text = input.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        li.className = 'task';
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', function() {
            list.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value = '';
    });
});
