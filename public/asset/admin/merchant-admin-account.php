<?php include('../headfiles.php'); ?>

<body>

<?php include('../header.php'); ?>


<!-- main content section -->
<div class="d-flex w-100 my-2 bg-light">
	<div class="col-sm-3 lft-menu-list" style="background:#1d6d92;">
		<?php include('merchant-dashboard-left.php'); ?>
	</div>
	<div class="col-sm-9">

		<?php
					
		if(isset($_REQUEST['page']))
		{
			   $page=$_REQUEST['page'];
			include("$page");
			
		}
		
		else
		{
			include('manage-profile.php');
			
		}
		 
		?>
	 
	</div>
</div>

<?php include('../footer.php'); ?>
	    
</body>

</html>