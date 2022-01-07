<?php 
 
 
  $pg= $_GET['page'];

  if($pg=='')
  {
	 $pg=='manage-profile.php'; 
  }
  $ss=($pg=='manage-profile.php'? ' active ' :  '' );

?>
<div class="border-bottom pb-2 clearfix">
	<div class="float-left pt-4 pr-2"><i class="fas fa-tachometer-alt fa-2x"></i></div>
	<div class="float-left"><h4><span class="small text-warning">Member</span><br>DASHBOARD</h4></div>
</div>

	<ul class="mt-5">
	
		<li> <a href="#">Dashboard</a> </li>
		<li>
			<a href="#" data-toggle="collapse" data-target="#buying">Buying <i class="fas fa-angle-down float-right"></i></a>
			<ul id="buying" class="collapse">
				<li> <a href="#">- Purchases</a></li>
				<li> <a href="#">- Current Bids</a></li>
				<li> <a href="#">- Offers</a></li>
			</ul>
		</li>
		<li>
			<a href="#" data-toggle="collapse" data-target="#buyertools">Buyer Tools <i class="fas fa-angle-down float-right"></i></a>
			<ul id="buyertools" class="collapse">
				<li> <a href="#">- Wish List</a></li>
			</ul>
		</li>
		<li>
			<a href="#" data-toggle="collapse" data-target="#selling">Selling <i class="fas fa-angle-down float-right"></i></a>
			<ul id="selling" class="collapse">
				<li> <a href="#">- Open</a></li>
				<li> <a href="#">- Scheduled</a></li>
				<li> <a href="#">- Closed</a></li>
				<li> <a href="#">- Drafts</a></li>
				<li> <a href="#">- My Sales</a></li>
				<li> <a href="#">- Offers</a></li>
			</ul>
		</li>
		<li>
			<a href="#" data-toggle="collapse" data-target="#sellertools">Seller Tools <i class="fas fa-angle-down float-right"></i></a>
			<ul id="sellertools" class="collapse">
				<li> <a href="#">- Global Settings</a></li>
				<li> <a href="#">- Fee Calculator</a></li>
				<li> <a href="#">- Postage Setup</a></li>
				<li> <a href="#">- Prefield Fields</a></li>
				<li> <a href="#">- Blocked Users</a></li>
				<li> <a href="#">- Seller Vouchers</a></li>
				<li> <a href="#">- Bulk Lister</a></li>
			</ul>
		</li>
		<li>
			<a href="#" data-toggle="collapse" data-target="#feedback">Feedback <i class="fas fa-angle-down float-right"></i></a>
			<ul id="feedback" class="collapse">
				<li> <a href="#">- Received</a></li>
				<li> <a href="#">- Leave Feedback</a></li>
				<li> <a href="#">- Pending Feedback</a></li>
				<li> <a href="#">- Feedback Left</a></li>
			</ul>
		</li>
		<li>
			<a href="#" data-toggle="collapse" data-target="#myaccount">My Account <i class="fas fa-angle-down float-right"></i></a>
			<ul id="myaccount" class="collapse">
				<li> <a href="#">- Personal Information</a></li>
				<li> <a href="#">- Account Settings</a></li>
				<li> <a href="#">- User Verification</a></li>
				<li> <a href="#">- Social Media</a></li>
				<li> <a href="#">- Address Book</a></li>
			</ul>
		</li>
		 
	</ul>

		
	 