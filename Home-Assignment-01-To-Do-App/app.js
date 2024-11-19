import { select, input } from '@inquirer/prompts';
import { readFileSync, writeFileSync } from 'fs';

function readData() {
    try {
        const data = readFileSync('tasks.json', 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.log('Error Reading File', err);
        return [];
    }
}

function saveTasks(tasks) {
    try {
        const data = JSON.stringify(tasks, null, 2);
        writeFileSync('tasks.json', data);
    } catch (err) {
        console.log('Error Writing File', err);
        return [];
    }
}

function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log('No Tasks Available To Show!');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.name} [${task.completed ? 'Completed' : 'Pending'}]`);
        });
    }
    console.log('');
}

async function addTask(tasks) {
    const taskName = await input({
        message: 'Enter Task Description:'
    });

    if (!taskName.trim()) {
        console.log('Task Description Cannot Be Empty!');
        return;
    }

    const newTask = {
        name: taskName.trim(),
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    console.log('Task Added Successfully!\n');
}

async function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log('No Tasks Available to Delete!\n');
        return;
    }

    const taskIndex = await select({
        message: 'Select Task to Delete',
        choices: tasks.map((task, index) => ({
            name: `${index + 1}. ${task.name} [${task.completed ? 'Completed' : 'Pending'}]`,
            value: index
        })),
        pageSize: tasks.length,
        loop: false
    });

    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    console.log('Task Deleted Successfully!\n');
}

async function completeTask(tasks) {
    if (tasks.length === 0) {
        console.log('No Tasks Available To Mark As Complete.\n');
        return;
    }

    const taskIndex = await select({
        message: 'Select Task to Mark as Complete',
        choices: tasks.map((task, index) => ({
            name: `${index + 1}. ${task.name} [${task.completed ? 'Completed' : 'Pending'}]`,
            value: index
        })),
        pageSize: tasks.length,
        loop: false
    });

    if (tasks[taskIndex].completed) {
        console.log('This Task is Already Completed!\n');
    } else {
        tasks[taskIndex].completed = true;
        saveTasks(tasks);
        console.log('Task Marked as Complete!\n');
    }
}

async function mainMenu() {
    let tasks = readData();
    try {
        const action = await select({
            message: 'What would you like to do?',
            choices: [
                { name: 'View Tasks', value: 'view' },
                { name: 'Add a Task', value: 'add' },
                { name: 'Mark Task as Complete', value: 'complete' },
                { name: 'Delete Task', value: 'delete' },
                { name: 'Exit', value: 'exit' },
            ]
        });

        switch (action) {
            case 'view':
                viewTasks(tasks);
                break;
            case 'add':
                await addTask(tasks);
                break;
            case 'complete':
                await completeTask(tasks);
                break;
            case 'delete':
                await deleteTask(tasks);
                break;
            case 'exit':
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid Option Selected.');
        }
        await mainMenu();

    } catch (err) {
        console.log('Error:', err);
    }
}

function init() {
    console.log('\nWelcome!');
    mainMenu();
}

init();
