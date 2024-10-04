let url = new URLSearchParams(window.location.search);

// managing params for sem 4

function stats (str) {
    window.location.href = 'chapters.html?subject=' + str;
}

function run (str) {
    const subject = url.get('subject');

    const newUrl = 'chaptersVideos.html?n=' + str + '&subject=' + subject;

    window.location.href = newUrl;
}

// managing params for sem 5

function chapters(str) {
    window.location.href = 'sem5chapters.html?sem5subject=' + str;
}

function sem5 (str) {
    const subject = url.get('sem5subject');

    const newUrl = 'sem5chaptersVideos.html?n=' + str + '&subject=' + subject;
    //make a new page for vidoes

    window.location.href = newUrl;
    console.log('sem functionis working');
}

// managing params of sem 6

function set (str) {
    window.location.href = 'sem6chapters.html?sem6subject=' + str;
}

function sem6 (str) {
    const subject = url.get('sem6subject');

    const newUrl = 'sem6chaptersvideos.html?n=' + str + '&subject=' + subject;

    window.location.href = newUrl;
}

// managing params for sem 1

function sem1cha(str) {
    window.location.href = 'sem1chapters.html?sem1subject=' + str;
}

function sem1 (str) {
    const subject = url.get('sem1subject');
    console.log('workingurl');

    const newUrl = 'sem1chaptersvideos.html?n=' + str + '&subject=' + subject;

    console.log('workingurl');

    window.location.href = newUrl;
    console.log('workingurl');

}

// managing params for sem 2

function sem2cha(str) {
    window.location.href = 'sem2chapters.html?sem2subject=' + str;
}

function sem2(str) {
    const subject = url.get('sem2subject');

    const newurl = 'sem2chaptersvideos.html?n=' + str + '&subject=' + subject;

    window.location.href = newurl;
}

// managing params for sem 3

function sem3cha(str) {
    window.location.href = 'sem3chapters.html?sem3subject=' + str;
}

function sem3(str) {
const subject = url.get('sem3subject');

const newurl = 'sem3chaptersvideos.html?n=' + str + '&subject=' + subject;

window.location.href = newurl;
}