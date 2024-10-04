function sn (str) {
    const url = new URLSearchParams(window.location.search);
    return url.get(str)
}
let subject = sn('subject');
const n = sn('n');

if(sn('subject') == 1){
    subject = 'advanceAcc';
}else if (sn('subject') == 2){
    subject = 'managmentAcc';
}else if (sn('subject') == 3){
    subject = 'stats'
}

const obj = {
    advanceAcc: {
        1: {
            title: 'chapter 1: Process Costing-1',
            src1: 'https://www.youtube.com/embed/cYTIO5YwtAI?si=yJ_2bE5h4Fzg-6s0',
            src2: 'https://www.youtube.com/embed/BAQZq-LLJ6Q?si=nLaMKtAdFytnDc5x',
            src3: 'https://www.youtube.com/embed/5hGmE-A5svE?si=V0eTbVeho25bhbFq',
            src4: 'https://www.youtube.com/embed/qsOUwu1vnAk?si=v0dL_p0dUTFKc0ig',
            src5: 'https://www.youtube.com/embed/7SCqT5Akddo?si=4sN6HLcCPvAo967T',
            src6: 'https://www.youtube.com/embed/fpyDk2K4WTM?si=wW0lcRELwegIlGa-',
            src7: 'https://www.youtube.com/embed/XjOYE4BwLlg?si=hEmUfdEjG_Oy-_rc'
            // make iframe for this videos
        },
        2: {
            title: 'chapter 2: Process Costing-2',
            src1: 'https://www.youtube.com/embed/QSxJa02hdgk?si=sSdXu2cn30FmhWQ3',
            src2: 'https://www.youtube.com/embed/qmihIEqLFaA?si=v_EOI6zyohZwsagp',
            src3: 'https://www.youtube.com/embed/uD2OUEqYYF4?si=BtdH4sZx9g4og85_',
            src4: 'https://www.youtube.com/embed/stQ2WYePn2w?si=LkQv58z0-J-nakzv',


        },
        3:{
            title: 'chapter 3: Process Costing-3',
            src1: 'https://www.youtube.com/embed/ASjZOv-xUOo?si=QLP8AMtaMA6dvwwY',
            src2: 'https://www.youtube.com/embed/turKGO6j4BA?si=bTr_LDdCow4B7Vua',
            src3: 'https://www.youtube.com/embed/e8vJaObB26w?si=CN4m61udazT7Leox',
            src4: 'https://www.youtube.com/embed/UFr3HSmPiCc?si=scYAaa_GqP8jb3fZ'


        },
        4:{
            title: 'chapter 4: Marginal Costing',
            src1: 'https://www.youtube.com/embed/-ssomA0MY_M?si=oYE3tRgp6XDKxvFu',
            src2: 'https://www.youtube.com/embed/kp0bNdQqeeE?si=25LG7bjZbrz4Kg5G',
            src3: 'https://www.youtube.com/embed/BtK_lovGSVo?si=W5XUqrAdatFlCaE4',
            src4: 'https://www.youtube.com/embed/tk1cOLfy-6s?si=ppjYzz2OiU_GAXIx'
        },
        5:{
            title: 'chapter 5: Amalgamtion',
            src1: 'https://www.youtube.com/embed/Yw4Bh1azZ68?si=ghw_JKXkg-E7fbcZ',
            src2: 'https://www.youtube.com/embed/-nTQH0puAM4?si=wIk7vJSmoSWtPekB',
            src3: 'https://www.youtube.com/embed/7YTKng6k27Y?si=aVVkxsX_SE-jBGDa',
            src4: 'https://www.youtube.com/embed/4QFErVb8bLg?si=bl7y_jJe--exGhyB'
        }
    },
    managementAcceAcc: {
        1: {
            title: 'chapter 1: ',
            src1: '',
            src2: '',
            src3: '',
            src4: '',
        },
        2: {
            title: 'chapter 1: ',
            src1: '',
            src2: '',
            src3: '',
            src4: '',


        },
        3:{
            title: 'chapter 1: ',
            src1: '',
            src2: '',
            src3: '',
            src4: '',


        },
        4:{
            title: 'chapter 1: ',
            src1: '',
            src2: '',


        },
        5:{
            title: 'chapter 1: ',
            src1: '',


        }
    },
    stats: {
        1: {
            title: 'chapter 1: Application of Intergration',
            src1: 'https://www.youtube.com/embed/uGzfr4DTccs?si=oIuKjXCbC1ThinR7',
            src2: 'https://www.youtube.com/embed/i50LpbF-LN4?si=Z8WjyE9CYwMRmouP',
            src3: 'https://www.youtube.com/embed/Td9GBiH61C4?si=V-3C0dscp2UteGkT',
            src4: 'https://www.youtube.com/embed/C7XD5lQHrUU?si=HVGYQlcWxNu5TP6L',
            src5: 'https://www.youtube.com/embed/kTBOh5d29Yc?si=UmDxCkkPzMM1Biog',
            src6: 'https://www.youtube.com/embed/Sr3kYKjN8eU?si=M7sMHjvfOH0hRArB',
            src7: 'https://www.youtube.com/embed/FU8-McoOIG8?si=lZxAN5LA7oAEJX28',
            src8: 'https://www.youtube.com/embed/smJZwUGT7M4?si=NiOoTisR2A9dR9FD'
        },
        2: {
            title: 'chapter 2: Poisson & Hypogeometric Distribution',
            src1: 'https://www.youtube.com/embed/dguBRWmvU8w?si=sVkHY1Vfk3ylfHPo',
            src2: 'https://www.youtube.com/embed/dguBRWmvU8w?si=Ug4H7n-4zJPf-B5P',
            src3: 'https://www.youtube.com/embed/IqF9W3nsyWI?si=HZYYRbPInWYo724O',
            src4: 'https://www.youtube.com/embed/CU1r9tYkY6A?si=2EBtHxapt-WVd8nX',
            src5: 'https://www.youtube.com/embed/c3NsoMI8TgY?si=HNNRR8JRIHonkUNG',
            src6: 'https://www.youtube.com/embed/BNkGOZ0PGoc?si=uEsw57WvvqRleNvJ',
            src7: 'https://www.youtube.com/embed/tI6-zqW-CIE?si=plUKJkSTLBC10jzn',
            src8: 'https://www.youtube.com/embed/26mx8jR27lQ?si=IlngOQGm_lXM9MS7',
            src9: 'https://www.youtube.com/embed/4D4djKA27Bk?si=Cwowp2Tfg-2DGA9-'
        },
        3:{
            title: 'chapter 3: Peocess Control Technique',
            src1: 'https://www.youtube.com/embed/3WBr6MC4Exs?si=anN9TU1r2dwi2INo',
            src2: 'https://www.youtube.com/embed/S9xw3-LTDpw?si=7OjssM-jUw3ex0YS',
            src3: 'https://www.youtube.com/embed/2GRYvwGyIFk?si=OawtvDuQslggpRj2',
            src4: 'https://www.youtube.com/embed/NDT12-lmV9Y?si=2nbuT01o6AJkeZgS',
            src5: 'https://www.youtube.com/embed/KTu-ld5YaUA?si=rm3JdNzuE5Eezcmm',
            src6: 'https://www.youtube.com/embed/oOJm-YCK23M?si=PZz80P3__6AdQ_gx'
        },
        4:{
            title: 'chapter 4: Lot Control Techique',
            src1: 'https://www.youtube.com/embed/TgsOImPmoM0?si=bljG-CpLMLR0mgyD',
            src2: 'https://www.youtube.com/embed/fB7QT30czu4?si=Fb5S5-KypbY7khWa',
            src3: 'https://www.youtube.com/embed/sL76DdxOOLk?si=BLPDqlS1twqnIZ0k',
            src4: 'https://www.youtube.com/embed/Ed6YhXI5zTQ?si=BR2a2BOJOQD5q7LX',
            src5: 'https://www.youtube.com/embed/nOVymufQwbo?si=ckDcJldxr0OTXENP'
        }
    },
}


let chapName = document.querySelector('#chap_name');
let video1 = document.querySelector('#video1');
let video2 = document.querySelector('#video2');
let video3 = document.querySelector('#video3');
let video4 = document.querySelector('#video4');
let video5 = document.querySelector('#video5');
let video6 = document.querySelector('#video6');
let video7 = document.querySelector('#video7');
let video8 = document.querySelector('#video8');
let video9 = document.querySelector('#video9');

chapName.innerHTML = obj[subject][n].title;
let video_container1 = document.querySelector('#vc1');
let video_container2 = document.querySelector('#vc2');
let video_container3 = document.querySelector('#vc3');
let video_container4 = document.querySelector('#vc4');
let video_container5 = document.querySelector('#vc5');
let video_container6 = document.querySelector('#vc6');
let video_container7 = document.querySelector('#vc7');
let video_container8 = document.querySelector('#vc8');
let video_container9 = document.querySelector('#vc9');

video1.src = typeof obj[subject][n].src1 == 'undefined' ? video_container1.style.display = 'none' : obj[subject][n].src1;
video2.src = typeof obj[subject][n].src2 == 'undefined' ? video_container2.style.display = 'none' : obj[subject][n].src2;
video3.src = typeof obj[subject][n].src3 == 'undefined' ? video_container3.style.display = 'none' : obj[subject][n].src3;
video4.src = typeof obj[subject][n].src4 == 'undefined' ? video_container4.style.display = 'none' : obj[subject][n].src4;
video5.src = typeof obj[subject][n].src5 == 'undefined' ? video_container5.style.display = 'none' : obj[subject][n].src5;
video6.src = typeof obj[subject][n].src6 == 'undefined' ? video_container6.style.display = 'none' : obj[subject][n].src6;
video7.src = typeof obj[subject][n].src7 == 'undefined' ? video_container7.style.display = 'none' : obj[subject][n].src7;
video8.src = typeof obj[subject][n].src8 == 'undefined' ? video_container8.style.display = 'none' : obj[subject][n].src8;
video9.src = typeof obj[subject][n].src9 == 'undefined' ? video_container9.style.display = 'none' : obj[subject][n].src9;