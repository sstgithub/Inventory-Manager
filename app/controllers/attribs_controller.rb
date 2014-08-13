class AttribsController < ApplicationController
	respond_to :json
	def index
		render json: Attrib.all
	end

	def show
		render json: Attrib.find(params[:id])
	end

	def create
		@attrib = Attrib.new(attrib_params)
		if @attrib.save
			respond_with @attrib
		else
			respond_with @attrib, :status => 422
		end
	end

	def update
		@attrib = Attrib.find(params[:id])
		if @attrib.update_attributes(attrib_params)
			respond_with @attrib
		else
			respond_with @attrib, :status => 422
		end
	end

	def destroy
		@attrib = Attrib.find(params[:id])
		if @attrib.destroy
			respond_to do |format|
				format.js { render json: @attrib }
			end
		end
	end


	private

	def attrib_params
		params.require(:attrib).permit(:type_id, :attr_name, :attr_value, :attr_req, :created_at, :updated_at)
	end
end
