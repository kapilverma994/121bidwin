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
	<div class="float-left"><h4><span class="small text-warning">Admin</span><br>DASHBOARD</h4></div>
</div>

	<ul class="mt-5">
		
		<li class="<?=($pg=='manage-profile.php'? 'active' :  '' );?>">
			<a href="?page=manage-profile.php"><i class="fas fa-sliders-h"></i> Profile</a>
		</li>
		
		<li class="<?=($pg=='homepage-main-banner.php'? 'active' :  '' );?>">
			<a href="?page=homepage-main-banner.php"><i class="fas fa-sliders-h"></i> Homepage Main Banner</a>
		</li>
		
		<li class="<?=($pg=='manage-product-category.php'? 'active' :  '' );?>">
			<a href="?page=manage-product-category.php"><i class="far fa-list-alt"></i> Manage Product Category</a>
		</li>
		
		<li class="<?=($pg=='homepage-top-products.php'? 'active' :  '' );?>">
			<a href="?page=homepage-top-products.php"><i class="far fa-list-alt"></i> Manage Product List</a>
		</li>
		
		<li class="<?=($pg=='manage-product-detail.php'? 'active' :  '' );?>">
			<a href="?page=manage-product-detail.php"><i class="far fa-list-alt"></i> Manage Product Detail</a>
		</li>
		
		<li class="<?=($pg=='new-coming-product.php'? 'active' :  '' );?>">
			<a href="?page=new-coming-product.php"><i class="far fa-list-alt"></i> New Coming Product List</a>
		</li>
		
		<li class="<?=($pg=='hot-deal-product.php'? 'active' :  '' );?>">
			<a href="?page=hot-deal-product.php"><i class="far fa-list-alt"></i> Hot Deal Product List</a>
		</li>
		
		<li class="<?=($pg=='sale-product-list.php'? 'active' :  '' );?>">
			<a href="?page=sale-product-list.php"><i class="far fa-list-alt"></i> Sale Product List</a>
		</li>
		
		<li class="<?=($pg=='manage-gift-coupon.php'? 'active' :  '' );?>">
			<a href="?page=manage-gift-coupon.php"><i class="far fa-list-alt"></i> Manage Gift Coupon</a>
		</li>
		 
		 
	</ul>

		
	 