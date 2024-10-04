// js for sem 4 chapter 
let sub_name = document.querySelector('#sub_name');

function xyz (str) {
    const url = new URLSearchParams(window.location.search);
    return url.get(str);
}

const sem4sub = xyz('subject');
let sem5sub = xyz('sem5subject');
let sem6sub = xyz('sem6subject');
let sem1sub = xyz('sem1subject');
let sem2sub = xyz('sem2subject');
let sem3sub = xyz('sem3subject');

const obj1 = {
    1: {
        subject_name: 'Chapters for Cost Accounting-2',
        no_chapter: 4
    },
    2: {
        subject_name: 'Chapters for Taxation-2',
        no_chapter: 4
    },
    3: {
        subject_name: 'Chapters for Statistics-IV',
        no_chapter: 4
    },
    4: {
        subject_name: 'Chapters for Auditing-1',
        no_chapter: 10
    }
}

if(sem4sub != null){
for(let i = 1; i <= obj1[sem4sub].no_chapter; i++){
document.querySelector(`#chapter${i}`).style.display = 'block';
}

sub_name.innerHTML = obj1[sem4sub].subject_name;
}

// js for sem 5 chapter

const obj2 = {
    1: {
        subject_name: 'Chapters for Advance Accounting & Auditing',
        no_chapter: 5
    },
    2: {
        subject_name: 'Chapters coming soon.....',
        no_chapter: 0
    },
    3: {
        subject_name: 'Chapters for Statistics-V',
        no_chapter: 4
    }
}

if(sem5sub != null){
for(let i = 1; i <= obj2[sem5sub].no_chapter; i++){
document.querySelector(`#chapter${i}`).style.display = 'block';
}
sub_name.innerHTML = obj2[sem5sub].subject_name;
}

// js for sem 6 chapter


const obj3 = {
    1: {
        subject_name: 'Chapters for Advance Accounting & Auditing',
        no_chapter: 1
    },
    2: {
        subject_name: 'Chapters for Advance Accounting & Auditing',
        no_chapter: 4
    },
    3: {
        subject_name: 'Chapters for Statistics-V',
        no_chapter: 4
    }
}

if(sem6sub != null){
for(let i = 1; i <= obj3[sem6sub].no_chapter; i++){
document.querySelector(`#chapter${i}`).style.display = 'block';
}
sub_name.innerHTML = obj3[sem6sub].subject_name;
}

// js for sem 1 chapter

const obj4 = {
    1: {
        subject_name: 'Chapters for Financial Accounting-1',
        no_chapter: 4
    },
    2: {
        subject_name: 'Chapters for Financial Accounting-2',
        no_chapter: 4
    },
    3: {
        subject_name: 'Chapters for Descriptive Statistics',
        no_chapter: 4
    }
}

if(sem1sub != null){
for(let i = 1; i <= obj4[sem1sub].no_chapter; i++){
document.querySelector(`#chapter${i}`).style.display = 'block';
console.log('working')
}
sub_name.innerHTML = obj4[sem1sub].subject_name;
}

// js for sem 2 chapter

const obj5 = {
    1: {
        subject_name: 'Financial Accounting - II',
        no_chapter: 3
    },
    // no sub available at vg for 2,3
    2: {
        subject_name: 'Chapters Coming soon.....',
        no_chapter: 0
    },
    3: {
        subject_name: 'Chapters Coming soon.....',
        no_chapter: 0
    }
}

if(sem2sub != null){
    for(let i = 1; i <= obj5[sem2sub].no_chapter; i++){
    document.querySelector(`#chapter${i}`).style.display = 'block';
    }
    sub_name.innerHTML = obj5[sem2sub].subject_name;
    }


// js for sem 3 chapter

const obj6 = {
    1: {
        subject_name: 'Chapters Coming soon.....',
        no_chapter: 0
    },
    2: {
        subject_name: 'Chapters Coming soon.....',
        no_chapter: 0
    },
    3: {
        subject_name: 'Chapters Coming soon.....',
        no_chapter: 0
    }
}

if(sem3sub != null){
    for(let i = 1; i <= obj6[sem3sub].no_chapter; i++){
    document.querySelector(`#chapter${i}`).style.display = 'block';
    }
    sub_name.innerHTML = obj6[sem3sub].subject_name;
    }