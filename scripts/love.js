// console.log('hi')

function btn(){

    const boy = getInputElementById('boy-name');

    console.log(typeof boy.length)
 
    const girl = getInputElementById('girl-name');
   
    const displayElement = document.getElementById('display-board');
    
    const result = [
        'বিশ্বাস করো, তোমাদের এই প্রেম জীবনেও টিকবে না । তোমাদের এই প্রেমে স্বার্থ ছাড়া আর কিছুই নেই । সুতরাং সময় আছে ব্রেকাপ করে নাও।',

        "তোমরা ভুলেও ১৪ ফেব্রুয়ারিতে ঘুরতে যাবা না কারণ তোমাদের বাবা মা তোমাদের ফলো করবে এবং তোমরা কি আকাম কুকাম করবে তা দেখে ফেলবে । তাই আমি তোমাদের সাবধান করে দিলাম। ",

        "তোমাদের কপালে দুঃখ আছে দেখছি। তাড়াতাড়ি ব্রেকাপ করে নতুন প্রেমের জন্য মনোনিবেশ করো। তুমি যাকে ভালোবাসো সে তো একটা প্রতারক । তোমার সাথেও প্রেম করে আবার অন্য জায়গায় টাংকি মারে । সাবধান !!!",

        "আর কত এমন লুকিয়ে লুকিয়ে প্রেম করবে ! এবার বিয়ে করে নাও ! তা না হলে প্রেম পাখি উড়ে যাবে , তখন আর কান্না করে লাভ হবে না ।",

        "তোমাদের প্রেমে তো বেশি আবেগ চলে । মনে হয় না, এই প্রেম তোমাদের টিকবে ! তবুও চেষ্টা চালিয়ে যাও । আর দেখো কি হয় ! আর শোনো, তোমাদের প্রেম টিকলে অবশ্য্ই জানাবে ।",

        "তোমরা দুই জন দুইজনকে অনেক ভালোবাসো । তোমাদের প্রেম দেখে তোমাদের বন্ধুরা হিংসা করে এবং তোমাদের সহ্য করতে পারে না । তোমরা এই ভাবে থেকে আর কাউকে কষ্ট দিয়ো না । তাড়াতাড়ি বিয়ে করে ফেলো ! "
    ]

    const randomNumber = Math.random()*5;
    const index = Math.round(randomNumber);

    const yourLuck = result[index];

    if(boy.length === 0 || girl.length === 0){

        alert('please provide boy and girl name ')
      
    }
    else{      

        displayElement.innerText = boy + ' এবং ' + girl + ' তোমাদের প্রেম : -------     '+ yourLuck ;

    }
   
   

        
}