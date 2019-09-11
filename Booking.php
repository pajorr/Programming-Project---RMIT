<!DOCTYPE html>
<html>

<body>
<select id="car" style="width: 200px;" onchange="changeImage();">
    <option value="avatar">Me</option>
    <option value="maruti-suzuki-alto-800">Maruti Suzuki Alto 800</option>
    <option value="hyundai-grand-i10">Hyundai Grand i10</option>
    <option value="maruti-suzuki-ciaz">Maruti Suzuki Ciaz</option>
    <option value="hyundai-elantra">Hyundai Elantra</option>
    <option value="datsun-go">Datsun Go</option>
    <option value="maruti-suzuki-eeco">Maruti Suzuki Eeco</option>
    <option value="mahindra-thar">Mahindra Thar</option>
    <option value="honda-cr-v">Honda CR-V</option>
    <option value="volvo-s60-cross-country">Volvo S60 Cross Country</option>
    <option value="hyundai-i20-active">Hyundai i20 Active</option>
    <option value="mercedes-amg-slc-43">Mercedes-AMG-SLC 43</option>
    <option value="audi-a3-cabriolet">Audi A3 Cabriolet</option>
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