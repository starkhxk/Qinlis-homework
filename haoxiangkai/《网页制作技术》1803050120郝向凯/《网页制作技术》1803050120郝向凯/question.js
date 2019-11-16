
function check(){
    if(conn()==false){
        return false;
    } 
    else
    {
        var frm = document.getElementById("test");
               frm.action = "insert.php";
               frm.method = "GET";
               frm.submit();
    }  
}
function conn(){
    var inputs=document.getElementsByTagName("input");
    for(var i=0 ; i<inputs.length ; ++i)
    {
        if(inputs[i].type.toLowerCase()=='radio'){  
            var mark = false;
            $("input[name='"+inputs[i].name+"']").each(function(){
                if($(this).prop("checked")){
                    mark = true;
                }
            });
            if(!mark){
                alert("第 "+(inputs[i].name.replace(/[^\d]/g,''))+" 道题没有作答");
                return false;
                break;
            }
        }
        if(inputs[i].type.toLowerCase()=='checkbox'){  
            var mark = false;
            $("input[name='"+inputs[i].name+"']").each(function(){
                if($(this).prop("checked")){
                    mark = true;
                }
            });
            if(!mark)
            {
                alert("第 "+(inputs[i].name.replace(/[^\d]/g,''))+" 道题没有作答");
                return false;
                break;
            }
     
           
        }
    
      
    }

}