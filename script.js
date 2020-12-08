const real=document.getElementById('real');
const custom=document.getElementById('custom');
const text=document.getElementById('text');
const copy=document.getElementById('copy');
// uploads file
            custom.addEventListener('click',function(){
                real.click();
            })

//shows uploaded file            
        real.addEventListener('change',function(){
            if(real.value){
                text.innerHTML=real.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
                console.log('text')
                console.log(real.value)
            }
            else{
                text.innerHTML='No file Chosen'
            }
        })


//extracts HTML content
        const input=document.querySelector('input[type="file"]')
        input.addEventListener('change', function(e){
            console.log(input.files)
            const reader=new FileReader();
            reader.onload=function(){
                console.log('CHANGED')
                //console.log(JSON.stringify(reader.result))
                let obj=reader.result
                //console.log(obj.split('\r\n'))
                var el = document.createElement( 'html' );
                el.innerHTML =JSON.stringify(reader.result);
                console.log(el.getElementsByTagName( 'p'));

            }
            reader.readAsText(input.files[0]);
        }, false)


 //Copies uploaded file       

        // copy.addEventListener('click',function(){
        //     const reader=new FileReader();
        //     reader.onload=function(){
        //         navigator.clipboard.writeText(reader.result);
        //     }
        //     reader.readAsText(input.files[0])
        // })