<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
  <link rel="stylesheet" href="{{asset('admin_assets').'/css/style.css'}}">

</head>
<body>

    <form method="POST" action="" enctype="multipart/form-data">
        @csrf

    <div class="form" id="form" style="text-align: center; color: aliceblue;">  
        @if($errors->any())
        <div class="alert alert-danger">
         <ul>
           @foreach($errors->all() as $error)
           <li>{{$error}}</li>
           @endforeach
         </ul>
       @endif   
       <label for="email">Email:</label>   <br>
      
       <input type="email" id="email" name="email" placeholder="Enter your email" required>   <br>
       
     <label for="password">Password:</label>   <br>
    
     <input type="password" id="password" name="password" placeholder="Enter your password" required>
          <br>
          <br>
         <input type="submit" id="submit" name="submit"> <br>     
    </div>
   </form>


</body>
</html>
