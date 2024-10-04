function sn (str) {
    const url = new URLSearchParams(window.location.search);
    return url.get(str)
}
let subject = sn('subject');
const n = sn('n');

if(sn('subject') == 1){
    subject = 'managmentAcc';
}else if (sn('subject') == 2){
    subject = 'advanceAcc';
}else if (sn('subject') == 3){
    subject = 'stats'
}

const obj = {
    advanceAcc: {
        1: {
            title: 'chapter 1: Standard Costing-1',
            src1: 'https://www.youtube.com/embed/JDU43CpXcug?si=VUYB_dRymDCSTM0z',
            src2: 'https://www.youtube.com/embed/7RrIWisuGyc?si=6S8-3NUqvJIPB5Ca',
            src3: 'https://www.youtube.com/embed/sBDIjgWC_vQ?si=01LltVRs0XcM004e',
            src4: 'https://www.youtube.com/embed/EOKy094RFlc?si=WdfES_MU6M7Bcn5G',
            src5: 'https://www.youtube.com/embed/KpPtDaI8jqg?si=93qz_UZMq0bCq1Co',
            src6: 'https://www.youtube.com/embed/8KJRbPbsBaM?si=gStkhNl63DiGmN6v'

        },
        2:{
            title: 'chapter 2: Standard Costing-2',
            src1: 'https://www.youtube.com/embed/aBUSDsfoGmo?si=cR-Fp09ZiHu_YTYP',
            src2: 'https://www.youtube.com/embed/pP32xMBFFhE?si=_E18770fiBpBUUcb',
            src3: 'https://www.youtube.com/embed/paqRWL9XCJg?si=-LhWJJFxVkaOPL1o',
            src4: 'https://www.youtube.com/embed/qtXz53fALew?si=Ghh-nEMxINILWeBJ',
            src5: 'https://www.youtube.com/embed/4S-wVya6p7M?si=S-aY2Q9Tz4Nb9QIN'

        },
        3:{
            title: 'chapter 3: Time vlaue of Money',
            src1: 'https://www.youtube.com/embed/_98GWRDFSFU?si=FXPxS6E5s5GySsI8',
            src2: 'https://www.youtube.com/embed/FrjZbKlCTqU?si=a67hzJVvl-M1JFH6',
        },
        4:{
            title: 'chapter 4: Capital Budgeting',
            src1: 'https://www.youtube.com/embed/5U8d3eZLLUk?si=Uu4JeQsH6hFokZNn',
            src1: 'https://www.youtube.com/embed/2rPhSCumgZg?si=jOxOV7U8z3IWjse-',
            src1: 'https://www.youtube.com/embed/mIarXg9y87I?si=dwRXhZMsL4zAzTue',
            src1: 'https://www.youtube.com/embed/oSx81BIVPK0?si=lizPVcUN26QfGDY_'
        }
    },
    managmentAcc: {
        1: {
            title: 'chapter 4: Cost Capital & Capital Budgeting',
            src1: 'https://www.youtube.com/embed/cYTIO5YwtAI?si=yJ_2bE5h4Fzg-6s0',
            src2: 'https://www.youtube.com/embed/BAQZq-LLJ6Q?si=nLaMKtAdFytnDc5x',
            src3: 'https://www.youtube.com/embed/5hGmE-A5svE?si=V0eTbVeho25bhbFq'
            // fix the name isuues in sem6chapters.html
        }
    },
    stats: {
        1: {
            title: 'chapter 1: Testing of Hypothisi & Large Sample Test',
            src1: 'https://www.youtube.com/embed/GKAlWM5Ka1k?si=4af1_RT31FNlPKKM',
            src2: 'https://www.youtube.com/embed/yPstJW4QG2o?si=0RY9VV70Ly2Xve5V',
            src3: 'https://www.youtube.com/embed/cRdGqAZtPjU?si=fw5cs61YAfRx25MF',
            src4: 'https://www.youtube.com/embed/SvOqkNAdhiI?si=gQa1emO8QQ4LTPGD',
            src5: 'https://www.youtube.com/embed/BPH8caF4KQg?si=6Bke8pLp0vhskHEu',
        },
        2: {
            title: 'chapter 2: Decision Theory',
            src1: 'https://www.youtube.com/embed/KvorpJtgiLU?si=dUmAn78maDHLm4Pv',
            src2: 'https://www.youtube.com/embed/Py8CEWQ0K18?si=z992Z7Z4eC_oMpGp',
            src3: 'https://www.youtube.com/embed/FXrCNYL9Aco?si=CCT-OS4oLJSMR2M8',
            src4: 'https://www.youtube.com/embed/OneikfvrBKM?si=cX-8nCR43pd_4QLG',
            src5: 'https://www.youtube.com/embed/43Mr_TGJaBY?si=JgYEtkbk1nvk3kS7',
            src6: 'https://www.youtube.com/embed/uB_PeRJEmRI?si=6f3tATdjwBneDlc4',
            src7: 'https://www.youtube.com/embed/qLs_Af9izVA?si=JFxoBmCXdVhUXKU0',
            src8: 'https://www.youtube.com/embed/T3iAnoiT9Iw?si=uJnR2MIPbxT6M95P'
        },
        3:{
            title: 'chapter 3: Theory of Games',
            src1: 'https://www.youtube.com/embed/7wv1BZwd6Vw?si=5q0t27Hysa70Qv35',
            src2: 'https://www.youtube.com/embed/5jOTkV4-49c?si=l2bkd4nlKWrlns9v',
            src3: 'https://www.youtube.com/embed/oBGcqXKpJ8U?si=AJMFx-fYvI1GaXuV',
            src4: 'https://www.youtube.com/embed/ARtNHiPVhn8?si=hxWAkVCrgp8JDTI2',
            src5: 'https://www.youtube.com/embed/61MLGLj99-4?si=iZ8-SOstVIavi_ry',
            src6: 'https://www.youtube.com/embed/S0dgzsxgM9w?si=8I6cicfakGiuT4GE'
        },
        4:{
            title: 'chapter 4: Matrix Algebra',
            src1: 'https://www.youtube.com/embed/QVbzDIxvXxE?si=qXKB9OD5CMXT5_Pk',
            src2: 'https://www.youtube.com/embed/04cmR-uvMjQ?si=Tjc7pBqsamTov2PV',
            src3: 'https://www.youtube.com/embed/gODCME6rWU8?si=S-89KQYPGiFxRSLD',
            src4: 'https://www.youtube.com/embed/-HR35ofqXHk?si=DHSQkkrHmAo75ka0',
            src5: 'https://www.youtube.com/embed/RqRiE7D1DmE?si=RbjQmZUUa-y6d2tY'
        }
    }
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


chapName.innerHTML = obj[subject][n].title;
let video_container1 = document.querySelector('#vc1');
let video_container2 = document.querySelector('#vc2');
let video_container3 = document.querySelector('#vc3');
let video_container4 = document.querySelector('#vc4');
let video_container5 = document.querySelector('#vc5');
let video_container6 = document.querySelector('#vc6');
let video_container7 = document.querySelector('#vc7');
let video_container8 = document.querySelector('#vc8');

video1.src = typeof obj[subject][n].src1 == 'undefined' ? video_container1.style.display = 'none' : obj[subject][n].src1;
video2.src = typeof obj[subject][n].src2 == 'undefined' ? video_container2.style.display = 'none' : obj[subject][n].src2;
video3.src = typeof obj[subject][n].src3 == 'undefined' ? video_container3.style.display = 'none' : obj[subject][n].src3;
video4.src = typeof obj[subject][n].src4 == 'undefined' ? video_container4.style.display = 'none' : obj[subject][n].src4;
video5.src = typeof obj[subject][n].src5 == 'undefined' ? video_container5.style.display = 'none' : obj[subject][n].src5;
video6.src = typeof obj[subject][n].src6 == 'undefined' ? video_container6.style.display = 'none' : obj[subject][n].src6;
video7.src = typeof obj[subject][n].src7 == 'undefined' ? video_container7.style.display = 'none' : obj[subject][n].src7;
video8.src = typeof obj[subject][n].src8 == 'undefined' ? video_container8.style.display = 'none' : obj[subject][n].src8;