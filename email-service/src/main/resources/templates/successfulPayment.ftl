<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Laila&family=Signika+Negative:wght@300&display=swap" rel="stylesheet">
    <title>Payment Notification</title>
    <style>

        .mainDiv{
            border: 2px solid black;
            border-radius: 5px;
            width: 50%;
            margin: 5% 25%;
            font-family: 'Laila', sans-serif;;
        }
        .header,.orderConfirm,.puchase,.paymentDetails,.OrderTotal{
            border-bottom: 2px solid grey;
        }
        .log_image{
            width: 25vh;
            height: 25vh;
        }
        .puchase{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            justify-content: space-between;
        }
        .purchase__image{
            height: 30vh;
            width: 30vh;   
        }
        .paymentDetails{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .OrderTotal,.keepInTouch,.header,.orderConfirm,.puchase,.paymentDetails{
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="mainDiv">
        <div class="header">
            <h3>Swap sell Order summury email</h3>
            <img class="log_image" src="logo.svg">
        </div>
        <div class="orderConfirm">
            <h1>Payment Confirmation</h1>
            <h3>your puchase has been palced for shipping </h3>
        </div>
        <h3>Your Order</h3>
        <div class="puchase">
            
            <img class="purchase__image" src="phone2.jpg">
            <p>Samsung Galaxy S23F23LM</p>
            <p>₹ 12,000</p>
        </div>
        <div class="paymentDetails">
            <div class="ShippingAddress">
                <p>Payee Email</p>
                <p>Amount paid</p>
            </div>
            <div class="Details">
                <p>sdduibdf-scsd@gmail.com</p>
                <p>₹ 12,000</p>
            </div>
        </div>
        <div class="OrderTotal">
            <h3>Totol amount paid</h3>
            <h1>₹ 12,000</h1>
        </div>
        <div class="keepInTouch">
            <p>Keep In Touch</p>
            <p>If you have any questions, concerns, or suggestions,please email us:<a href="#">Support@swapsell.com</a></p>
        </div>
        

    </div>
    
</body>
</html>