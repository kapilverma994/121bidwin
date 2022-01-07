<?php include('../headfiles.php'); ?>

<body>

<?php include('../header.php'); ?>


<!-- main content section -->
<div class="d-flex w-100 my-2 bg-light">
	<div class="lft-menu-list p-2 mr-3" style="flex-shrink:0; min-width:220px;">
		<?php include('member-dashboard-left.php'); ?>
	</div>
	<div style="flex-grow:10;">

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