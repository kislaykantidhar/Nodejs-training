function getJSON(obj){
    if(Array.isArray(obj))
    {
        let st="[";
        for ( let it of obj)
        {
            if (typeof(it)=="function"){
                st+="null"+",";
            }
            else if (Array.isArray(it))
            {
                st+=getJSON(it)+",";
            }
            else if(typeof(it)=="object")
            {
                st+=getJSON(it)+",";
            }
            else{
                if (typeof(it)=="number")
                st+=it+",";
                else{
                    st+="\""+it+"\""+",";
                }
            }
        }
        if (/,$/.test(st))
        st=st.replace(/,$/,']');
        else
        st+=']'
        return st;
    }
    else if(typeof(obj)=="object")
    {
            let st="{"
            for (let key in obj)
            {
                if (Array.isArray(obj[key]))
                {
                    st+="\""+key+"\""+":"+getJSON(obj[key])+",";
                }
                else if (typeof(obj[key])!="object" && typeof(obj[key])!="function" )
                {
                    if (typeof(obj[key])=="number")
                    {
                        st+="\""+key+"\""+":"+obj[key]+",";
                    }
                    else
                    {
                        st+="\""+key+"\""+":"+"\""+obj[key]+"\""+",";
                    }

                    
                }
                else if(typeof(obj[key])=="object")
                {
                    st+="\""+key+"\""+":"+getJSON(obj[key])+",";//call via recursion
                }
            }

            if (/,$/.test(st))
            st=st.replace(/,$/,'}');
            else
            st+='}';
            return st;
    }

    
    
}
let ob={neo:"tenchu",jerecho:"etaimali",moveit:function(){console.log("mob")},indide:{exho:"lost",band:"linkin park",inside2:{car:"lambo",another:"masserati"}},last:"check"};
let ob1={neo:"tenchu",jerecho:"etaimali",moveit:function(){console.log("mob")},indide:{exho:"lost",band:"linkin park",inside2:{car:"lambo",another:"masserati"}},last:"check",ebola:["birus",{car:"lambo",anothercar:"mercedes"},1]};
let ob2={ a: [{a:1, b: 2}, {a : { a: [{a:1, b: 2}, {a:1, b: 2}, {a:1, b: 2}] }}] };
let ob3=[{a:1, b: 2}, {a:1, b: 2}, {a:1, b: 2}];
let ob4=[{a:1, b: 2}];
let ob5={ a: [{a:1, b: 2}] };
let ob6=[{a:1, b: 2}, {a:1, b: 2}, {a:1, b: 2}];
let ob7={ a: [{a:1, b: 2}, {a:1, b: 2}, {a:1, b: 2}] };
let ob8={ a: [{a:1, b: 2}, {a : { a: [{a:1, b: 2}, {a:1, b: 2}, {a:1, b: 2}] }}] };



let json;
json=getJSON(ob2);
console.log(json);
console.log(JSON.stringify(ob2));

console.log(json==JSON.stringify(ob2));//returns true
json=getJSON(ob1);
console.log(json);
console.log(JSON.stringify(ob1));

console.log(json==JSON.stringify(ob1));

json=getJSON(ob3);
console.log(json);
console.log(JSON.stringify(ob3));

console.log(json==JSON.stringify(ob3));



json=getJSON(ob4);
console.log(json);
console.log(JSON.stringify(ob4));

console.log(json==JSON.stringify(ob4));

json=getJSON(ob5);
console.log(json);
console.log(JSON.stringify(ob5));

console.log(json==JSON.stringify(ob5));


json=getJSON(ob6);
console.log(json);
console.log(JSON.stringify(ob6));

console.log(json==JSON.stringify(ob6));


json=getJSON(ob7);
console.log(json);
console.log(JSON.stringify(ob7));

console.log(json==JSON.stringify(ob7));


json=getJSON(ob8);
console.log(json);
console.log(JSON.stringify(ob8));

console.log(json==JSON.stringify(ob8));

let ob9=[{d:4},{g:[6,function(){},"aa"]},{f:function(){},jj:{ee:2,ffd:function(){},ff:[3,6,{4:2},function(){}]}}];

json=getJSON(ob9);
console.log(json);
console.log(JSON.stringify(ob9));

console.log(json==JSON.stringify(ob9));






