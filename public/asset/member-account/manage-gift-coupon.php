<div class="mt-4">
	<h4 class="pb-2 border-bottom">Manage Gift Coupon / Voucher List </h4>
	<div class="col-sm-9">
		<form>
			<div class="form-group">
				<label>Upload Gift Design Image</label>
				<div class="custom-file mb-3">
					<input type="file" class="custom-file-input" id="giftimage" name="giftimage">
					<label class="custom-file-label" for="giftimage">Choose file</label>
				</div>
			</div>
			<div class="form-group">
				<label>Upload Brand Logo Image</label>
				<div class="custom-file mb-3">
					<input type="file" class="custom-file-input" id="giftbrandimage" name="giftbrandimage">
					<label class="custom-file-label" for="giftbrandimage">Choose file</label>
				</div>
			</div>
			<div class="form-group">
				<label>Gift Amount Value</label><br>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" value="">Rs 100
					</label>
				</div>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" value="">Rs 500
					</label>
				</div>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" value="">Rs 1000
					</label>
				</div>
				<div class="form-check-inline">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input" value="">Rs 2000
					</label>
				</div>
			</div>
			<div class="form-group mt-4">
				<label>Coupon Code</label>
				<input type="text" class="form-control" name="couponcode">
			</div>
			<div class="form-group">
				<label>Coupon Expiry Date</label>
				<input type="text" class="form-control" name="couponexpiry">
			</div>
			<div class="form-group">
				<label>Discount Percent</label>
				<input type="text" class="form-control" name="discountpercent">
			</div>
			<div class="form-group">
				<label>Gift Voucher Title</label>
				<input type="text" class="form-control" name="prod-title">
			</div>
			<div class="form-group">
				<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
				<button type="submit" value="Save" class="btn btn-success">Save</button>
			</div>
		</form>
	</div>
</div>