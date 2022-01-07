	<h4 class="pb-2 border-bottom mt-4">Manage Product Detail Section on Merchant Page</h4>
		<div class="col-sm-9 mt-4">
			<ul class="nav nav-tabs" role="tablist">
				<li class="nav-item">
				  <a class="nav-link active" data-toggle="tab" href="#description">Description</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" data-toggle="tab" href="#specifications">Specifications</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" data-toggle="tab" href="#comments">Comments</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" data-toggle="tab" href="#contactseller">Contact Seller</a>
				</li>
			</ul>

			  <!-- Tab panes -->
			  <div class="tab-content">
				<div id="description" class="container tab-pane active"><br>
				  <form>
					<div class="form-group">
					<label>
						Product Description
					</label>
					<textarea style="min-height:200px;" class="form-control" name="description"> </textarea>
					</div>
					<div class="form-group">
						<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
						<button type="submit" value="Save" class="btn btn-success">Save</button>
					</div>
				  </form>
				</div>
				
				<div id="specifications" class="container tab-pane fade"><br>
				  <form>
					<div class="form-group">
					<label>
						Specifications
					</label>
					<textarea style="min-height:200px;" class="form-control" name="specifications"> </textarea>
					</div>
					<div class="form-group">
						<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
						<button type="submit" value="Save" class="btn btn-success">Save</button>
					</div>
				  </form>
				</div>
				
				<div id="comments" class="container tab-pane fade"><br>
				  <form>
					<div class="form-group">
					<label>
						Comments
					</label>
					<textarea style="min-height:200px;" class="form-control" name="comments"> </textarea>
					</div>
					<div class="form-group">
						<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
						<button type="submit" value="Save" class="btn btn-success">Save</button>
					</div>
				  </form>
				</div>
				
				<div id="contactseller" class="container tab-pane fade"><br>
				  <form>
					<div class="form-group">
					<label>
						Contact Us
					</label>
					<textarea style="min-height:200px;" class="form-control" name="contactseller"> </textarea>
					</div>
					<div class="form-group">
						<button type="submit" value="Update" class="btn btn-danger mr-3">Update</button>
						<button type="submit" value="Save" class="btn btn-success">Save</button>
					</div>
				  </form>
				</div>
			  </div>
		</div>