p=process.argv[2]
l=p.length
for(s='.',j=0,i=1;;s+=i++){x=s.indexOf(p)
if(~x){j+=x
break}L=s.length-l
if(L>0)j+=L,s=s.slice(L)}
console.log(j)