function sn (str) {
    const url = new URLSearchParams(window.location.search);
    return url.get(str);
}
const btn = sn('n');

let sub = sn('subject'); 


if(sn('subject') == 1) {
    sub = 'costAccount'
}else if (sn('subject') == 2){
    sub = 'taxation'
}else if(sn('subject') == 3){
    sub = 'stats'
}else if (sn('subject') == 4){
    sub = 'Audit'
}


const obj = {
    Audit: {
    1: {
        title: 'chapter 1: Introduction of Auditing',
        src1: 'https://www.youtube.com/embed/uMdDfxGaHgE?si=wFeMFkgRASpiKYl_',
        src2: "https://www.youtube.com/embed/Xnk0AT1kXY4?si=b_JjOPcfBDUPkf1Y",
        src3: 'https://www.youtube.com/embed/Fo-94K2U2gY?si=FIG4HwR3Uky5mgmt'
    },
    2:  {
        title: 'Chapter 2: Object of Auditing',
        src1: 'https://www.youtube.com/embed/ttsEYVFBzPE?si=zrk7NnXOHjHxV6Mb',
        src2: 'https://www.youtube.com/embed/Vwaeuwn8L5w?si=djoHe4bKgNFEfzaJ'
    },
    3: {
        title: 'Chapter 3: Types of Audit',
        src1: 'https://www.youtube.com/embed/miv7oni-In0?si=V3awKnJuWXO7OAFA',
        src2: 'https://www.youtube.com/embed/9z5ADGqrLTo?si=lkKzLKx0gcyk9dkg',
        src3: 'https://www.youtube.com/embed/LTjzAyWz7CA?si=frhbJXtQhdyvyyAF',
        src4: 'https://www.youtube.com/embed/W9S7-sx_FmY?si=m7W7j46DcaDBqNNn',
        src5: 'https://www.youtube.com/embed/k4nIEExMRsA?si=6o_vVa7dNzEu25rf'
    },    
    4: {
        title: 'Chapter 4: Orgnising Audit Work',
        src1: 'https://www.youtube.com/embed/JJFQqgm8rYA?si=qM5PYnRQfC4t4Z_E',
        src2: 'https://www.youtube.com/embed/zGSC1SmHzyA?si=d0TpJhGOcxwv_2Sl',
        src3: 'https://www.youtube.com/embed/KonHm3Klwec?si=BHXGTqJq6nxATRJx'
    },    
    5: {
        title: 'Chapter 5: Internal check, Control & Audit',
        src1: 'https://www.youtube.com/embed/-hgm4gj_UUM?si=3fCceyCKep5mSh4m'
    },
    6: {
        title: 'Chapter 6: Vouching',
        src1: 'https://www.youtube.com/embed/GisoT5Cc_kI?si=Kud5Q5gFgviNyOfv'
    },
    7: {
        title: 'Chapter 7: Vouching of Cash Transaction',
        src1: 'https://www.youtube.com/embed/ItZfUGGyuh4?si=nsvyfNf1_aY9YAqr'
    },
    8: {
        title: 'Chapter 8: Verification & Valuation of Assets & Laibilities-1',
        src1: 'https://www.youtube.com/embed/6zPxhXq5jkw?si=h_QO27xSVEWuRQDL'
    },
    9: {
        title: 'Chapter 9: Verification & Valuation of Assets & Laibilities-2',
        src1: 'https://www.youtube.com/embed/l0bd4vLDMlM?si=2d2oDtYn1rMc5xMJ'

    },
    10: {
        title: 'Chapter 10: Company Auditor',
        src1: 'https://www.youtube.com/embed/1Yg66_LqPJs?si=3BjXq9AAlgHH14Re'
    }
    },

    stats : {
        1: {
            title: 'Chapter 1: Differentiation',
            src1: 'https://www.youtube.com/embed/1VY2rwhv734?si=2LS4FkANXiFOjKhu',
            src2: 'https://www.youtube.com/embed/WT9chZAcKAg?si=HKE6V3v47UXqlPgO',
            src3: 'https://www.youtube.com/embed/v6y-k7pNU1U?si=npkKtLlKNvZp4y6y',
            src4: 'https://www.youtube.com/embed/A-b8HuMXrC8?si=w4igwMw6VyOjj2JT',
            src5: 'https://www.youtube.com/embed/kehyl9kuyG0?si=RQE6e3fVJQJhQOv5',
            src6: 'https://www.youtube.com/embed/jxL6-0iYjhM?si=hw-V_E42i_2J1fse'
            // make sure to add sixth place for the video
        },
        2: {
            title: 'Chapter 2: Application of Derivaties',
            src1: 'https://www.youtube.com/embed/jaMTl5YFtKA?si=Shic-ByikehLtMEP',
            src2: 'https://www.youtube.com/embed/2bP5Mq2MPZo?si=HKUWvrOjdVVRh-36',
            src3: 'https://www.youtube.com/embed/BEvEXKenFY8?si=WRMnhYbTD5c9okm4',
            src4: 'https://www.youtube.com/embed/8P-qr6CNNOg?si=pGh_PRRMKVV4Cr2U'
        },
        3: {
            title: 'Chapter 3: Index Number',
            src1: 'https://www.youtube.com/embed/vlM88TnspIo?si=pRD_tgmMoGi9YeYm',
            src2: 'https://www.youtube.com/embed/S6jUxcZ-kZI?si=hChzHfKmbllHZrvS',
            src3: 'https://www.youtube.com/embed/dKXeMY073PM?si=-apo7qJBqLg4jMsZ',
            src4: 'https://www.youtube.com/embed/VHPdqsuM9iM?si=fXYc7omo8v_MneN0'
        },
        4: {
            title: 'Chapter 4: Time Series',
            src1: 'https://www.youtube.com/embed/4q6AlXCe3w0?si=kRKr0j91MMyi9JtZ',
            src2: 'https://www.youtube.com/embed/oG5e6QR2MzM?si=MuAmlHzVoUbmML78',
            src3: 'https://www.youtube.com/embed/MUq9lvl5808?si=YKQ_f9HHT8zsU2Pl',
            src4: 'https://www.youtube.com/embed/vW9-x99pAvA?si=NwI0eFXPsA3KK4s2',
            src5: 'https://www.youtube.com/embed/DHepUmduRIQ?si=Ke5sQ22ERIQLHyvj',
            src6: 'https://www.youtube.com/embed/kw9-_3LKlsU?si=Hs9Xawlahrax5daa'
            // make sure to add sixth place for the video
        }
    },
    taxation: {
        1: {
            title: 'Chpater 1: Profit and Gains of Business & Profession',
            src1: 'https://www.youtube.com/embed/rWD3t2B9cnc?si=GLi73Scx0qidk1Ws',
            src2: 'https://www.youtube.com/embed/RCZljAjzW-k?si=FI74vsS2LYqgz-Yj',
            src3: 'https://www.youtube.com/embed/E3-pxFqDeVM?si=zupFeBu3pDtBw9eK',
            src4: 'https://www.youtube.com/embed/kDp7R-SXv64?si=FDFND-zhWfiTbAym',
            src5: 'https://www.youtube.com/embed/DsuOakS206s?si=cqZ3dK-GGCbH7ApY'
        },
        2: {
            title: 'Chapter 2: Capital Gains',
            src1: 'https://www.youtube.com/embed/Yo21tZDfn2Y?si=UUR4japPcCJpQZg7',
            src2: 'https://www.youtube.com/embed/dGUeGpFONAM?si=E6Ft5Yk_8vyDPkkx',
            src3: 'https://www.youtube.com/embed/2PNQrDeitkE?si=gLX6dNQigMT020tz'
        },
        3: {
            title: 'Chapter 3: Income from Other Sources',
            src1: 'https://www.youtube.com/embed/qYfSTyCCtDE?si=L5ncHVu03NpHDKoJ'
        },
        4: {
            title: 'Chapter 4: Deduction & Relifes',
            src1: 'https://www.youtube.com/embed/1cTIEE7SIyI?si=bsHdsmcKZc8oSoNe'
        }
    },
    costAccount: {
        1: {
            title: 'Chapter 1: Single or Unit Costing',
            src1: 'https://www.youtube.com/embed/HbjcvbrD9wI?si=DZDd8qsQ_hfJSNlr',
            src2: 'https://www.youtube.com/embed/xsQUABKK16A?si=dh4PjImko7zpg2Lb',
            src3: 'https://www.youtube.com/embed/S8ZxDptkJ5M?si=DiUO_IJu28thkt3f',
            src4: 'https://www.youtube.com/embed/neMkww71CUM?si=mfbBkJGUXa6_xnRu',
            src5: 'https://www.youtube.com/embed/7TLdzLQTHB8?si=pexOYCOEDZdK6iJ7'
        },
        2: {
            title: 'Chapter 2: Reconciliation of Profit as Per Cost Account With Profit as Per Financial Accounts',
            src1: 'https://www.youtube.com/embed/GMitylVtWVE?si=Ri-1ONjJxY5-mPFL',
            src2: 'https://www.youtube.com/embed/jUtvPtvMLsA?si=knsbcahUeqy4QhJE',
            src3: 'https://www.youtube.com/embed/2A78hsgRrj0?si=JH9WG6SKvBMWJNkv',
            src4: 'https://www.youtube.com/embed/6vl2BiNagSU?si=YpfAz_1-S8Q9q4Qb',
            src5: 'https://www.youtube.com/embed/nUFZUzB0o7s?si=NrTW7X8RtGOcloly'
        },
        3: {
            title: 'Chapter 3: Operating Costing or Service Costing',
            src1: 'https://www.youtube.com/embed/jQP5ym6KS_A?si=_9htcOSkKUv25nT5',
            src2: 'https://www.youtube.com/embed/eps9PT6UFc8?si=7ECMfOSYwdhfd8gz',
            src3: 'https://www.youtube.com/embed/TtopW9YqFDE?si=8HXaosQ4HOtgEpmF',
            src4: 'https://www.youtube.com/embed/8x25tJ6497E?si=6I5CXHGpSs8-ptMC'
        },
        4: {
            title: 'Chapter 4: Job, Batch & Contract Costing',
            src1: 'https://www.youtube.com/embed/XCVibV2_E8o?si=U8mEjmehgzrB55ai',
            src2: 'https://www.youtube.com/embed/hM2fLY2BUcU?si=A8JgA_Cpfqn052Ix',
            src3: 'https://www.youtube.com/embed/dGBpQ0G7CTQ?si=hBWxDMOEJl_OyniP',
            src4: 'https://www.youtube.com/embed/6F_5KFyqoss?si=VRmyCPdiVUlzeAN3',
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


chapName.innerHTML = obj[sub][btn].title;
let video_container1 = document.querySelector('#vc1');
let video_container2 = document.querySelector('#vc2');
let video_container3 = document.querySelector('#vc3');
let video_container4 = document.querySelector('#vc4');
let video_container5 = document.querySelector('#vc5');
let video_container6 = document.querySelector('#vc6');

video1.src = typeof obj[sub][btn].src1 == 'undefined' ? video_container1.style.display = 'none' : obj[sub][btn].src1;
video2.src = typeof obj[sub][btn].src2 == 'undefined' ? video_container2.style.display = 'none' : obj[sub][btn].src2;
video3.src = typeof obj[sub][btn].src3 == 'undefined' ? video_container3.style.display = 'none' : obj[sub][btn].src3;
video4.src = typeof obj[sub][btn].src4 == 'undefined' ? video_container4.style.display = 'none' : obj[sub][btn].src4;
video5.src = typeof obj[sub][btn].src5 == 'undefined' ? video_container5.style.display = 'none' : obj[sub][btn].src5;
video6.src = typeof obj[sub][btn].src6 == 'undefined' ? video_container6.style.display = 'none' : obj[sub][btn].src6;