<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Builder</title>
  <link rel="stylesheet" href="{{asset('admin_assets').'/css/style.css'}}">

</head>
<body>
    <div class="form-builder" id="formbuilder">
        <div class="toolbox">
            <div class="tool" draggable="true" data-element="input-text">Input Text</div>
            <div class="tool" draggable="true" data-element="input-email">Input Email</div>
            <div class="tool" draggable="true" data-element="input-password">Input Pass</div>
            <div class="tool" draggable="true" data-element="input-number">Input Number</div>
            <div class="tool" draggable="true" data-element="input-submit">Input Submit</div>
            
        </div>
        <div class="form-preview" id="form-preview">
           
        </div>
        <button id="save-button">Save Form Elements</button>

    </div>
    <form method="POST" action="{{Route('store_user')}}" enctype="multipart/form-data">
        @csrf

    <div class="form" id="form" style="text-align: center; color: aliceblue;">  
        @if($errors->any())
        <div class="alert alert-danger">
         <ul>
           @foreach($errors->all() as $error)
           <li>{{$error}}</li>
           @endforeach
         </ul>
        </div>
       @endif        
    </div>
   </form>

<script src="{{asset('admin_assets').'/js/index.js'}}" crossorigin="anonymous"></script>

</body>
</html>
