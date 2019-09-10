<!DOCTYPE html>
<html>

<body>
<select id="car" style="width: 200px;" onchange="changeImage();">
    <option value="avatar">Me</option>
    <option value="audi">Audi</option>
    <option value="toyota">Toyota</option>
</select>
<img id="image" src="../../media/avatar.png" width="250" height="250" />
<script> 

function changeImage()
{
var img = document.getElementById("image");
var imgsrc=document.getElementById("car").value + '.png';
img.src=imgsrc;
return false;
}

</script>
</body>

</html>