function sn (str) {
    const url = new URLSearchParams(window.location.search);
    return url.get(str);
}
const btn = sn('n');

let sub = sn('subject'); 


if(sn('subject') == 1) {
    sub = 'financialaccII'
}else if (sn('subject') == 2){
    sub = 'financialacc2'
}else if(sn('subject') == 3){
    sub = 'stats'
}

// replace all the title and src of the sem 1 to sem 2

const obj = {
    financialaccII: {//crt
    1: {
        title: 'chapter 1: Accounts for Share Capital',
        src1: 'https://www.youtube.com/embed/E6w1DUN6qMM?si=Tx_C4ph3iqqCMEdT',
        src2: 'https://www.youtube.com/embed/bOhAFEkx9XM?si=YarJ-lX8ckextr9O'
    },
    2:  {
        title: 'Chapter 2: Accounting for Debentures',
        src1: 'https://www.youtube.com/embed/xJ0cVGHt8s4?si=DjV0OFEtkjkxptjg',
        src2: 'https://www.youtube.com/embed/rIl1tP_WXVQ?si=Mz2CXwyqHncSPjAk',
        src3: 'https://www.youtube.com/embed/PZvCSKMFJj0?si=wZdy701rJJy8D_l8'
    },
    3: {
        title: 'Chapter 3: Final Accounts of Companies',
        src1: 'https://www.youtube.com/embed/m9cksbxaUCM?si=RcNDqBWU-_lLb9cS',
        src2: 'https://www.youtube.com/embed/Oz6xJ2SCJX8?si=XXJy7aeH-VcgZRXq'
    }
},
    financialacc2 : {
        1: {
            title: 'Chapter 1: Consigment',
            src1: 'https://www.youtube.com/embed/492YYz21h6c?si=s151nNwF9f3OFTf6',
            src2: 'https://www.youtube.com/embed/b0KHb5vu3DQ?si=GZBLNpDe9g8mBB39',
            src3: 'https://www.youtube.com/embed/tj9UlpzClGQ?si=CeatLT_4QjHCpP0q',
            src4: 'https://www.youtube.com/embed/YwFriari64U?si=yxruqIjg7WKnI9Tc'
        },
        2: {
            title: 'Chapter 2: Joint Venture',
            src1: 'https://www.youtube.com/embed/inA24OJ14Uk?si=gqaWtIqbz7M1p-k9',
            src2: 'https://www.youtube.com/embed/7z-bS_GViUA?si=XZ1zMYtGBEI3l2Bj',
            src3: 'https://www.youtube.com/embed/zB7YUT_DCKk?si=xMRzt52YFX8Flj3B',
            src4: 'https://www.youtube.com/embed/nnp88OOrSgQ?si=Kc4LYDegqWPv-ybM',
            src5: 'https://www.youtube.com/embed/wbZXviC7YAI?si=jTJQijRljgz-nO_w'
        },
        3: {
            title: 'Chapter 3: Branch Account',
            src1: 'https://www.youtube.com/embed/pGxrU4xrXDI?si=CuxQebFuBwoi9lSp',
            src2: 'https://www.youtube.com/embed/rsEIyswJ3jc?si=rGcZZ7tf6hc44TEU',
            src3: 'https://www.youtube.com/embed/yTywH8Au92U?si=tkz5Oh4dlMyrygdg',
            src4: 'https://www.youtube.com/embed/_xMDsAxExKw?si=6VgJ-psabBF9q1Tf',
            src5: 'https://www.youtube.com/embed/7Y_K-g9QivI?si=IcxCftPUv-vE80t-',
            src6: 'https://www.youtube.com/embed/r_B2tTGgpfE?si=aUUoI-iNtqZxbvhT',
            src7: 'https://www.youtube.com/embed/7dpMvn23wV0?si=YPQrNmHv9CrN__QN',
            src8: 'https://www.youtube.com/embed/9SmCeWoRI9s?si=dvWP99mptODKx5GZ'
            // remember to add plcace for the vidoes
        },
        4: {
            title: 'Chapter 4: Accounts of Sales Under Hire Purchase System',
            src1: 'https://www.youtube.com/embed/HrTj0tVy0r0?si=HFgnwS_azFedClwS',
            src2: 'https://www.youtube.com/embed/Zn6Fd26ZBa8?si=mDo_oCS1vJ3ARbP1',
            src3: 'https://www.youtube.com/embed/GIeQj8N-cSU?si=uRdhzzREDe4RKo8G',
            src4: 'https://www.youtube.com/embed/q8UHsK1iECI?si=YF7dWJWydyF0vd_q',
            src5: 'https://www.youtube.com/embed/dsStFhEy13Q?si=cvC3ClWk8cwhxL2z'
        }
    },
    stats: {
        1: {
            title: 'Chpater 1: Profit and Gains of Business & Profession',
            src1: '',
            src2: '',
            src3: '',
            src4: '',
            src5: ''
        },
        2: {
            title: 'Chapter 2: Capital Gains',
            src1: 'https://www.youtube.com/embed/Yo21tZDfn2Y?si=UUR4japPcCJpQZg7',
            src2: 'https://www.youtube.com/embed/dGUeGpFONAM?si=E6Ft5Yk_8vyDPkkx',
            src3: 'https://www.youtube.com/embed/2PNQrDeitkE?si=gLX6dNQigMT020tz'
        },
        3: {
            title: 'Chapter 3: Measure of Central Tendency',
            src1: 'https://www.youtube.com/embed/9bPEDEXcnKA?si=knseWK0WOpG1ftmj',
            src2: 'https://www.youtube.com/embed/ICHfxNtfPNg?si=osCYEWmKRfAmP_c2',
            src3: 'https://www.youtube.com/embed/LDm2t4ZeFXg?si=BkQBNg1ADR9iM3Vb',
            src4: 'https://www.youtube.com/embed/AXyS0T3Rl3w?si=u2vXW35iogdjX4Qx',
            src5: 'https://www.youtube.com/embed/9D1IubDIzIk?si=YiLBXHnf2XhS2N3V'
        },
        4: {
            title: 'Chapter 4: Deduction & Relifes',
            src1: 'https://www.youtube.com/embed/1cTIEE7SIyI?si=bsHdsmcKZc8oSoNe'
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


chapName.innerHTML = obj[sub][btn].title;
let video_container1 = document.querySelector('#vc1');
let video_container2 = document.querySelector('#vc2');
let video_container3 = document.querySelector('#vc3');
let video_container4 = document.querySelector('#vc4');
let video_container5 = document.querySelector('#vc5');
let video_container6 = document.querySelector('#vc6');
let video_container7 = document.querySelector('#vc7');
let video_container8 = document.querySelector('#vc8');

video1.src = typeof obj[sub][btn].src1 == 'undefined' ? video_container1.style.display = 'none' : obj[sub][btn].src1;
video2.src = typeof obj[sub][btn].src2 == 'undefined' ? video_container2.style.display = 'none' : obj[sub][btn].src2;
video3.src = typeof obj[sub][btn].src3 == 'undefined' ? video_container3.style.display = 'none' : obj[sub][btn].src3;
video4.src = typeof obj[sub][btn].src4 == 'undefined' ? video_container4.style.display = 'none' : obj[sub][btn].src4;
video5.src = typeof obj[sub][btn].src5 == 'undefined' ? video_container5.style.display = 'none' : obj[sub][btn].src5;
video6.src = typeof obj[sub][btn].src6 == 'undefined' ? video_container6.style.display = 'none' : obj[sub][btn].src6;
video7.src = typeof obj[sub][btn].src7 == 'undefined' ? video_container7.style.display = 'none' : obj[sub][btn].src7;
video8.src = typeof obj[sub][btn].src8 == 'undefined' ? video_container8.style.display = 'none' : obj[sub][btn].src8;

// adding these extra codes after 5 by mistake improve it