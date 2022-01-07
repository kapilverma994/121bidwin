 
<div class="mt-4">
	<h4 class="pb-2 border-bottom">Manage Profile</h4>
	<div class="col-sm-12 mt-4">
		  
		<form>
			<div class="row">
				<div class="col-sm-6">
					<div class="form-group">
						<label>First Name</label>
						<input type="text" class="form-control" name="fname" id="fname" required="">
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label>Last Name</label>
						<input type="text" class="form-control" id="lname" name="lname"  required="">
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label for="email">Email Address:</label>
						<input type="email" class="form-control" name="mail" id="mail" required="">
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label>Password</label>
						<input type="password" class="form-control" id="pass1" name="pass1">
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label>Business Name</label>
						<input type="text" class="form-control" id="bname" name="bname">
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label>Business Type</label>
						<select name="btype2" id="btype2" class="form-control">
							<option selected>Select</option>
							<option value="1">Grocery &amp; Supermarket</option>
							<option value="2">Bakery &amp; Sweets</option>
						</select>
					</div>
				</div>

				<div class="col-sm-6">
					<div class="form-group">
						<label class="control-label">Country</label>
						<select class="form-control" name="country" id="country">
							<option value="0" selected>Select Country</option>
							<option value="1">Afghanistan</option>
							<option value="2">Albania</option> 
						</select>
					</div>
				</div>
						 
				<div class="col-sm-6">
					<div class="form-group">
						<label class="control-label" name="city">City </label>
						<select class="form-control" name="state" id="state">
							<option selected value="0">Select City</option>
							<option value="1">Delhi</option>
						</select>
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label class="control-label">Area</label>
						<select class="form-control" name="area" id="area" value="">
							<option selected value="0">Area</option>
						</select>
					</div>
				</div>
				 
				<div class="col-sm-6">
					<div class="form-group">
						<label for="zcode">Location:</label>
						<input type="text" class="form-control" id="location" name="location" required="">
						<input type="hidden" class="form-control" id="zcode" value="123456" name="zcode" placeholder="Zipcode/Pincode/Pobox">
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label for="mobile">Mobile Number:</label>
						<input type="text" class="form-control" id="mobile2" name="mobile2" required>
					</div>
				</div>
				
				<div class="col-sm-6">
					<div class="form-group">
						<label>Do you currently offer delivery?</label>
						<select id="delivery" class="form-control">
							<option value="0">Yes, we have in-house delivery</option>
							<option value="0">No</option>
						</select>
					</div>
				</div>
				
				<div class="form-group my-3">
					<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
					<button type="submit" value="Update" class="btn btn-success">Save</button>
				</div>
			</div>
			
		</form>
		
	</div>
</div>
 