<!doctype html>
<html>
<head>
<meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
<title>我要借书</title>
    <link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/admin.css">
  
</head>

<body>
  <ul class="logo">
     <li class="l1"><img src="img/logo.gif" /></li>
  </ul>
   <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>  <!--页面缩小到一定宽度出现的按钮-->
          <a class="navbar-brand" href="#">图书馆首页</a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="bring.html">我要借书</a></li>
            <li class="active"><a href="#">我要还书</a></li>
            <li class="active"><a href="#">在线客服</a></li>
          </ul>
         
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
<!--栅格系统-->
 <div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2 class="panel-title">学生借书信息概要</h2>
        </div>
        <div class="panel-body">
          <table class="table" id="newstable">
        <thead>
          <tr>
            <th>id</th>
            <th>图书名称</th>
            <th>图书类型</th>
            <th>学生姓名</th>
            <th>借书证件号</th>
           
            <th>借书时间</th>
            <th>操作</th>
          </tr>
        </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>图书名称</td>
                <td>图书类型</td>
                <td>学生姓名</td>
                <td>借书号</td>
                <td>借书时间</td>
                <td><button class="btn btn-primary btn-xs">编辑功能</button>
                  <button class="btn btn-danger btn-xs">点击还书</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--col-md-6-->
       
       <div class="col-md-12">12</div>
    </div>
 </div>


<div class="outone">
    
</div> <!--outone-->


<script type="text/javascript" src="http://cdn.bootcss.com/jquery/2.2.4/jquery.js"></script> 
<script type="text/javascript" src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
<script type="text/javascript" src="js/admin.js"></script>

</body>
</html>
