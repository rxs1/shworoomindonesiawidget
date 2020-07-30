
var salesJson={"sales":[{"ID":1,"Tag":"Auto 2000","SalesName":"Raden Irvan Cahyadi","SalesNumber":82111320077,"SalesEmail":"Irvanhavefun@gmail.com","SalesService":"Price list, Test Drive, Asuransi dan Konsultasi","urlPhoto":"http://3.bp.blogspot.com/-bKZTBRh4qkU/XyLjiZRhyEI/AAAAAAAAAD8/lG0Xxmesdv440_n8Mr9-bjANVDenobdhgCK4BGAYYCw/s1600/myAvatar%2B%25282%2529.png","ExpireDate":"2020-07-15T17:00:00.000Z","PublishDate":"2019-12-31T17:00:00.000Z","PaymentStatus":"Belum Lunas"},{"ID":2,"Tag":"Mitshubisi Cinere","SalesName":"Eggy Cipta Pribadi","SalesNumber":87775237260,"SalesEmail":"Eggy_cipta@yahoo.com","SalesService":"Price list, Test Drive, Asuransi dan Konsultasi","urlPhoto":"http://3.bp.blogspot.com/-bKZTBRh4qkU/XyLjiZRhyEI/AAAAAAAAAD8/lG0Xxmesdv440_n8Mr9-bjANVDenobdhgCK4BGAYYCw/s1600/myAvatar%2B%25282%2529.png","ExpireDate":"2020-12-11T17:00:00.000Z","PublishDate":"2019-12-31T17:00:00.000Z","PaymentStatus":"Lunas"},{"ID":3,"Tag":"Auto 2000","SalesName":"Machfudz","SalesNumber":87885715151,"SalesEmail":"machfudz.mhz@gmail.com","SalesService":"Price list, Test Drive, Asuransi dan Konsultasi","urlPhoto":"http://3.bp.blogspot.com/-bKZTBRh4qkU/XyLjiZRhyEI/AAAAAAAAAD8/lG0Xxmesdv440_n8Mr9-bjANVDenobdhgCK4BGAYYCw/s1600/myAvatar%2B%25282%2529.png","ExpireDate":"2020-12-11T17:00:00.000Z","PublishDate":"2019-12-31T17:00:00.000Z","PaymentStatus":"Lunas"}]};

var homepageUrl1 = "https://www.showroomindonesia.com/";
var homepageUrl2 = "http://www.showroomindonesia.com/";

var classBreadcrumbs=document.querySelector("#Blog1 > div.breadcrumbs");
var breadcrumbs = [];
if (classBreadcrumbs){
    for(var i = 0; i<classBreadcrumbs.children.length ; i++){
        breadcrumbs.push(classBreadcrumbs.children[i].innerText);
    }
}
if(window.location.href==homepageUrl1 || window.location.href==homepageUrl1){
    var html = '<p>Halo,&nbsp;</p><p>Selamat datang di <b><a href="https://www.showroomindonesia.com/" target="_blank">Showroom Indonesia</a>.</b> Disini kamu bisa menemukan alamat lengkap semua dealer yang ada di indonesia. Ada juga sales terpercaya kami yang bisa melayani anda dengan sepenuh hati dan jiwa . Dapatkan Juga informasi promo menarik dan terbaik di&nbsp;<span style="font-weight: 700;"><a href="https://www.showroomindonesia.com/" target="_blank">Showroom Indonesia</a>.</span></p><p>Terimakasih</p><p>Admin</p><p><a href="https://www.showroomindonesia.com/"><img alt="showroom indonesia" src="https://1.bp.blogspot.com/-7lBZ5wLDop8/Xxw402cjwAI/AAAAAAAAAB8/gQckmJJ6E_wM-cdvDd7FzfgxMDylLQgogCK4BGAYYCw/w250/shw.png" style="width: 250px;"></a><br></p>';
    $("#data-informasi").append(html);
}else{
    var isSales = true;
    var today = new Date();
    for(var i = 0; i<salesJson.sales.length ; i++){
        var data = salesJson.sales[i];
        if(breadcrumbs.includes(data.Tag+" ") && new Date(data.ExpireDate)>=today.getDate() && new Date(data.PublishDate)<=today.getDate() && data.PaymentStatus=="Lunas"){
            isSales = false;
            var name = data.SalesName;
            var photo = data.urlPhoto;
            var service=data.SalesService;
            var phone = data.SalesNumber;
            var email = data.SalesEmail;
            var html = '<p style="text-align: center; "><img alt="sales showroom indonesia '+name+'" src="'+photo+'" style="width: 400px;"><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 17px; white-space: pre-wrap;"><br></span></p><p style="text-align: center; "><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 17px; white-space: pre-wrap;">'+name+'</span></p><p style="text-align: center;"><font color="#000000" face="arial"><span style="white-space: pre-wrap;"><b>Sales Executive </b></span></font><span style="color: rgb(0, 0, 0); font-family: arial; font-weight: 700; white-space: pre-wrap;">'+data.Tag+'</span></p><p style="text-align: center;"><b>No Telepon</b></p><p style="text-align: center;">'+phone+'</p><p style="text-align: center;">'+email+'</p><p style="text-align: center;"><i>'+service+'</i></p><p style="text-align: center;"><span style="color: rgb(0, 0, 0); font-family: arial; font-size: 13px; white-space: pre-wrap;"><br></span></p>'
            $("#data-informasi").append(html);
        }
    }
    if(isSales){
        var html = '<p>Halo,&nbsp;</p><p>Selamat datang di <b><a href="https://www.showroomindonesia.com/" target="_blank">Showroom Indonesia</a>.</b> Disini kamu bisa menemukan alamat lengkap semua dealer yang ada di indonesia. Ada juga sales terpercaya kami yang bisa melayani anda dengan sepenuh hati dan jiwa . Dapatkan Juga informasi promo menarik dan terbaik di&nbsp;<span style="font-weight: 700;"><a href="https://www.showroomindonesia.com/" target="_blank">Showroom Indonesia</a>.</span></p><p>Terimakasih</p><p>Admin</p><p><a href="https://www.showroomindonesia.com/"><img alt="showroom indonesia" src="https://1.bp.blogspot.com/-7lBZ5wLDop8/Xxw402cjwAI/AAAAAAAAAB8/gQckmJJ6E_wM-cdvDd7FzfgxMDylLQgogCK4BGAYYCw/w250/shw.png" style="width: 250px;"></a><br></p>';
        $("#data-informasi").append(html);
  
    }
}

