function form() {
    let name = document.getElementById("name_lastname").value;
    let phone = document.getElementById("phone").value;
    let pets = document.getElementById("pets").value;
    let check = document.getElementById("check").checked;
    let submit = document.getElementById("submit");

    if(name==""){
        alert("กรุณากรอกชื่อ-นามสกุล");
        return false;
    }

    if(phone==""){
        alert("กรุณากรอกเบอร์โทร");
        return false;
    }
    if(pets =="" || pets <0 || pets >100){
        alert("กรุณากรอกจำนวนสัตว์เลี้ยง หรือ จำนวนสัตว์เลี้ยงต้องอยู่ระหว่าง 0 ถึง 100");
        return false;
    }

    if(!check){
        alert("กรุณารับทราบข้อตกลง");
        return false;
    }

    submit.innerHTML = "ส่งแบบฟอร์มสำเร็จ"
    return false;
}