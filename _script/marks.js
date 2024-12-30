function chkBox(ctrlBox,err)
{
    if(ctrlBox.value=="")
        {
            err.innerHTML="Fill Marks";
            ctrlBox.style.backgroundColor="red";
            //ctrlBox.focus();
        }
        else if(isNaN(ctrlBox.value)==true)
        {
            err.innerHTML="Fill Numeric Marks";
            ctrlBox.style.backgroundColor="black";
        }
        else
        {
            err.innerHTML="Good";
            ctrlBox.style.backgroundColor="green";
        }
}

function doTotal(c,j,d,ec,ej,ed,tot)
{
    if(ec.innerHTML=="Good" &&ej.innerHTML=="Good" && ed.innerHTML=="Good" )
        {
            let sum= parseFloat(c.value)+parseFloat(j.value)+parseFloat(d.value);
            tot.value=sum;
            document.getElementById("btnPer").disabled=false;
            
        }
        else
            alert("Invalid Data");
}

function doPer(txtTotal,txtPer,btnRes)
{
    let per=txtTotal.value*100/300;
    txtPer.value=per;
    btnRes.disabled=false;

}
function doResult(txtPer,txtRes){
    if(txtPer.value>=35){
        txtRes.value="PASS";
    }
    else{
        txtRes.value="FAIL";
    }
}