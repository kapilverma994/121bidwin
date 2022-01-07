<div class="mt-4">
	<h4 class="pb-2 border-bottom">Manage Products List </h4>
	<div class="col-sm-9">
		<form>
			<div class="form-group mt-4">
				<label>Select Category</label>
				<select class="custom-select">
					<option selected>Select Category</option>
					<option>Mobility</option>
					<option>Electronics</option>
				</select>
			</div>
			<div class="form-group">
				<label>Upload Product Image</label>
				<div class="custom-file mb-3">
					<input type="file" class="custom-file-input" id="prodimage" name="prodimage">
					<label class="custom-file-label" for="uploadlogo">Choose file</label>
				</div>
			</div>
			<div class="form-group">
				<label>Product Title</label>
				<input type="text" class="form-control" name="prod-title">
			</div>
			<div class="form-group">
				<label>Product Link URL</label>
				<input type="url" class="form-control" name="prod-link">
			</div>
			<div class="form-group">
				<label>Product Price</label>
				<input type="text" class="form-control" name="prod-price">
			</div>
			<div class="form-group">
				<label>Product Offer Price</label>
				<input type="text" class="form-control" name="prod-offer-price">
			</div>
			
			<div class="form-group">
				<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
				<button type="submit" value="Save" class="btn btn-success">Save</button>
			</div>
		</form>
	</div>
</div>