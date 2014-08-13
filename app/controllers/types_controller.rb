class TypesController < ApplicationController
	respond_to :json
	def index
		render json: Type.all
	end

	def show
		render json: Type.find(params[:id])
	end

	def create
		@type = Type.new(type_params)
		if @type.save
			respond_with @type
		else
			respond_with @type, :status => 422
		end
		# render json: Type.create(type_params)
	end

	def update
		@type = Type.find(params[:id])
		if @type.update_attributes(type_params)
			respond_with @type
		else
			respond_with @type, :status => 422
		end
		# render json: Type.update(params[:id], type_params)
	end

	def destroy
		@type = Type.find(params[:id])
		if @type.destroy
			respond_to do |format|
				format.js { render json: @type }
			end
		end
	end


	private

	def type_params
		params.require(:type).permit(:metal_name, :type_name, :quantity, :created_at, :updated_at)
	end
end
